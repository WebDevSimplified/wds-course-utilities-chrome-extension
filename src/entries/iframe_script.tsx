import {
  getOptions,
  getVideoPreferences,
  storeVideoPreferences,
  VideoPreferences,
} from "../storage"

async function main() {
  const video = document.querySelector("video")

  if (video == null) return

  const storedPreferences = await getVideoPreferences()
  setDefaultValues(storedPreferences, video)
  listenForChanges(storedPreferences, video)

  const options = await getOptions()
  if (options.autoplay) video.play()

  video.addEventListener("ended", () => {
    chrome.runtime.sendMessage({ type: "video-ended", to: "content" })
  })
}

function setDefaultValues(
  storedPreferences: VideoPreferences,
  video: HTMLVideoElement
) {
  if (storedPreferences.playbackRate != null) {
    video.playbackRate = storedPreferences.playbackRate
  }
  if (storedPreferences.volume != null) {
    video.volume = storedPreferences.volume
  }
  if (storedPreferences.muted != null) {
    video.muted = storedPreferences.muted
  }
  if (
    storedPreferences.closedCaptions != null &&
    !location.href.includes("defaultTextTrack") &&
    storedPreferences.closedCaptions
  ) {
    const url = new URL(location.href)
    url.searchParams.set("defaultTextTrack", "en")
    location.href = url.toString()
  }
  if (storedPreferences.quality != null) {
    // Cloudflare does not let you programmatically change the quality or set a default in anyway :(
  }
}

async function listenForChanges(
  storedPreferences: VideoPreferences,
  video: HTMLVideoElement
) {
  let rateChangeTimeout: NodeJS.Timeout
  video.addEventListener("ratechange", async () => {
    if (
      storedPreferences.playbackRate === video.playbackRate ||
      video.playbackRate === 0
    ) {
      return
    }
    storedPreferences.playbackRate = video.playbackRate

    if (rateChangeTimeout) clearTimeout(rateChangeTimeout)
    rateChangeTimeout = setTimeout(() => {
      storeVideoPreferences(storedPreferences)
    }, 100)
  })

  let volumeChangeTimeout: NodeJS.Timeout
  video.addEventListener("volumechange", async () => {
    if (
      storedPreferences.volume === video.volume &&
      storedPreferences.muted === video.muted
    ) {
      return
    }
    storedPreferences.volume = video.volume
    storedPreferences.muted = video.muted
    if (volumeChangeTimeout) clearTimeout(volumeChangeTimeout)
    volumeChangeTimeout = setTimeout(() => {
      storeVideoPreferences(storedPreferences)
    }, 100)
  })

  try {
    const captionsButton = await getCaptionsButton()
    const mutationObserver = new MutationObserver(async () => {
      const closedCaptions = !captionsButton.innerText.includes("Off")
      if (storedPreferences.closedCaptions === closedCaptions) return
      storedPreferences.closedCaptions = closedCaptions
      return await storeVideoPreferences(storedPreferences)
    })
    mutationObserver.observe(captionsButton, {
      childList: true,
      subtree: true,
    })
  } catch (e) {
    // Just ignore
  }

  // Cloudflare does not let you programmatically change the quality or set a default in anyway :(
}

function getCaptionsButton(): Promise<HTMLButtonElement> {
  function getButton() {
    return [...document.querySelectorAll("button")].find(button => {
      return button.innerText?.startsWith("Captions:")
    })
  }
  return new Promise((resolve, reject) => {
    const button = getButton()
    if (button != null) {
      resolve(button)
      return
    }
    let iterations = 0
    const interval = setInterval(() => {
      const button = getButton()
      if (button != null) {
        resolve(button)
        clearInterval(interval)
        return
      }
      iterations++
      if (iterations > 5) {
        reject("Could not find button")
        clearInterval(interval)
        return
      }
    }, 1000)
  })
}

chrome.runtime.sendMessage({ type: "register", scriptType: "iframe" })

main()

// chrome.runtime.onMessage.addListener(function (request) {
//   if (request && request.type === "page-changed") {
//     main()
//   }
// })
