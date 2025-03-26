export type VideoPreferences = {
  quality?: string
  playbackRate?: number
  closedCaptions?: boolean
  volume?: number
  muted?: boolean
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
