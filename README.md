# Web Dev Simplified Course Utilities

This is a chrome extension that adds a few quality of life features to the Web Dev Simplified course website.

## Features

Here is a list of the current features for this extension. If you think any features should be added, please open an issue or a pull request.

### Video Player Enhancements

This extension saves your video settings between videos and site visits so you don't need to manually set them each time. Below is a list of all the settings that are saved:

- Playback Speed
- Volume
- Subtitles

Unfortunately, video quality settings are not saved by this extension as Cloudflare (the video player host) does not provide an API to change video quality settings programmatically. Cloudflare does claim to remember the ideal video quality for you between videos, though.

### Autoplay Next Video

If you click on the extension in your toolbar you can enable the autoplay feature. This will automatically play the next video in the course when the current video ends. You can also change the delay between the current video ending and the next video starting to any value between 0 and 10 seconds.

## Get The Extension

The following links can be used to download the extension for your browser.

- [Chrome](https://chromewebstore.google.com/detail/web-dev-simplified-course/abcfjmcpkeglnadogjdbignmonjdklge)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/wds-course-utilities/)

## Contributing

If you have any features, bug reports, or other contributions you would like to make to this extension, please open an issue or a pull request. Be as detailed as you can when opening an issue for a bug report or feature request as that will make it quicker for me to implement the feature/fix.
