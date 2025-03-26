import { getOptions } from "@/lib/storage"

chrome.runtime.sendMessage({ type: "register", scriptType: "content" })

chrome.runtime.onMessage.addListener(async function (request) {
  if (request && request.type === "video-ended") {
    const options = await getOptions()
    const nextButton = document.querySelector<HTMLButtonElement>(
      "#lesson-navigation a[rel='next']"
    )

    if (options.autoplay) {
      setTimeout(() => {
        nextButton?.click()
      }, options.autoplayDelay * 1000)
    }
  }
})
