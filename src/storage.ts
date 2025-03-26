export type VideoPreferences = {
  quality?: string
  playbackRate?: number
  closedCaptions?: boolean
  volume?: number
  muted?: boolean
}

export type Options = {
  autoplay: boolean
  autoplayDelay: number
}

export async function getOptions(): Promise<Options> {
  return (
    await chrome.storage.sync.get({
      options: {
        autoplay: false,
        autoplayDelay: 5,
      } satisfies Options,
    })
  ).options
}

export function storeOptions(options: Options) {
  return chrome.storage.sync.set({ options })
}

export async function getVideoPreferences(): Promise<VideoPreferences> {
  return (
    await chrome.storage.sync.get({
      videoPreferences: {
        quality: undefined,
        playbackRate: undefined,
        closedCaptions: undefined,
        volume: undefined,
        muted: undefined,
      } satisfies VideoPreferences,
    })
  ).videoPreferences
}

export function storeVideoPreferences(videoPreferences: VideoPreferences) {
  return chrome.storage.sync.set({
    videoPreferences,
  })
}
