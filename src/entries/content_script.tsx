// import { Stream } from "@/lib/stream"

import { getOptions } from "@/storage"

// function main() {
//   const iframe = document.querySelector<HTMLIFrameElement>(
//     "iframe[data-controller='cloudflare-player']"
//   )
//   console.log("Here")

//   if (iframe == null) return

//   const stream = Stream(iframe)

//   stream.addEventListener("ended", () => {
//     console.log("Ended")
//     // const nextButton = document.querySelector<HTMLButtonElement>(
//     //   "button[data-testid='next-button']"
//     // )

//     // nextButton?.click()
//   })
// }

// main()

chrome.runtime.sendMessage({ type: "register", scriptType: "content" })

chrome.runtime.onMessage.addListener(async function (request) {
  if (request && request.type === "video-ended") {
    const options = await getOptions()
    const nextButton = document.querySelector<HTMLButtonElement>(
      "#lesson-navigation a[rel='next']"
    )
    console.log(nextButton)

    if (options.autoplay) {
      setTimeout(() => {
        nextButton?.click()
      }, options.autoplayDelay * 1000)
    }
  }
})
