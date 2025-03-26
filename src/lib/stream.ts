declare global {
  interface Window {
    Stream: (iframe: HTMLIFrameElement) => StreamPlayerApi
  }
}

export type Preload = "auto" | "metadata" | "none" | boolean
export interface StreamPlayerApi {
  defaultTextTrack: string
  /**
   * Subscribe to events
   */
  addEventListener: (event: string, handler: EventListener) => void
  /**
   * VAST tag for displaying ads
   */
  adUrl?: string
  /**
   * Tells the browser to immediately start downloading the video and play it as soon as it can. Note that mobile browsers generally do not support this attribute, the user must tap the screen to begin video playback. Please consider mobile users or users with Internet usage limits as some users don’t have unlimited Internet access before using this attribute.
   *
   * To disable video autoplay, the autoplay attribute needs to be removed altogether as this attribute. Setting autoplay="false" will not work; the video will autoplay if the attribute is there in the <stream> tag.
   *
   * In addition, some browsers now prevent videos with audio from playing automatically. You may add the mute attribute to allow your videos to autoplay. For more information, [go here](https://webkit.org/blog/6784/new-video-policies-for-ios/).
   */
  autoplay: boolean
  /**
   * An object conforming to the TimeRanges interface. This object is normalized, which means that ranges are ordered, don’t overlap, aren’t empty, and don’t touch (adjacent ranges are folded into one bigger range).
   */
  buffered: TimeRanges
  /**
   * Shows the default video controls such as buttons for play/pause, volume controls. You may choose to build buttons and controls that work with the player. If you hide controls, you may choose to build custom buttons and controls that work with the player.
   */
  controls: boolean
  /**
   * Returns the current playback time in seconds. Setting this value seeks the video to a new time.
   */
  currentTime: number
  /**
   * The read-only HTMLMediaElement property duration indicates the length of the element's media in seconds.
   */
  duration: number
  /**
   * Indicates whether the media element has ended playback..
   */
  ended: boolean
  /**
   * Any valid CSS color value provided will be applied to the letterboxing/pillarboxing of the player’s UI. This can be set to transparent to avoid letterboxing/pillarboxing when not in fullscreen mode.
   * https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
   */
  letterboxColor?: string
  /**
   * A Boolean attribute; if included the player will automatically seek back to the start upon reaching the end of the video.
   */
  loop: boolean
  /**
   * A Boolean attribute which indicates the default setting of the audio contained in the video. If set, the audio will be initially silenced.
   */
  muted: boolean
  /**
   * Pause the video
   */
  pause: () => void
  /**
   * Returns whether the video is paused
   */
  paused: boolean
  /**
   * Attempts to play the video. Returns a promise that will resolve if playback begins successfully, and rejects if it fails. The most common reason for this to fail is browser policies which prevent unmuted playback that is not initiated by the user.
   */
  play: () => Promise<void>
  /**
   * A `double` that indicates the rate at which the media is being played back.
   */
  playbackRate: number
  /**
   * An object conforming to the TimeRanges interface. This object is normalized, which means that ranges are ordered, don’t overlap, aren’t empty, and don’t touch (adjacent ranges are folded into one bigger range).
   */
  played: TimeRanges
  /**
   * A URL for an image to be shown before the video is started or while the video is downloading. If this attribute isn’t specified, a thumbnail image of the video is shown.
   */
  poster?: string
  /**
   * This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience. You may choose to include this attribute as a boolean attribute without a value, or you may specify the value preload="auto" to preload the beginning of the video. Not including the attribute or using preload="metadata" will just load the metadata needed to start video playback when requested.
   *
   * The <video> element does not force the browser to follow the value of this attribute; it is a mere hint. Even though the preload="none" option is a valid HTML5 attribute, Stream player will always load some metadata to initialize the player. The amount of data loaded in this case is negligable.
   */
  preload: Preload
  /**
   * Any valid CSS color value provided will be applied to certain elements of the player's UI.
   * https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
   */
  primaryColor?: string
  /**
   * Unsubscribe from events
   */
  removeEventListener: (event: string, handler: EventListener) => void
  /**
   * Either the video UID or the signed token for the video you’ve uploaded to Cloudflare Stream should be included here.
   */
  src: string
  /**
   * Number representing the intrinsic height of the video in pixels. Note that this is specific to the resolution of the actual video depending on the quality being played. For example, a 16:9 video playing at 1080p will have an intrinsic height of 1080.
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/videoHeight
   */
  videoHeight: number
  /**
   * Number representing the intrinsic width of the video in pixels. Note that this is specific to the resolution of the actual video depending on the quality being played. For example, a 16:9 video playing at 1080p will have an intrinsic width of 1920.
   * https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement/videoWidth
   */
  videoWidth: number
  /**
   * Sets volume from 0.0 (silent) to 1.0 (maximum value)
   */
  volume: number
}

import "./cloudflareStream.js"

export const Stream = window.Stream
