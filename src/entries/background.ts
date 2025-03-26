const tabMap = new Map()

chrome.runtime.onMessage.addListener(function (request, sender) {
  if (request == null) return

  if (request.to != null) {
    const tabId = tabMap.get(request.to)
    const forwardRequest = { ...request, to: undefined }
    if (tabId != null) {
      chrome.tabs.sendMessage(tabId, forwardRequest)
    }
    return
  }

  if (
    request.type === "register" &&
    request.scriptType != null &&
    sender.tab?.id != null
  ) {
    tabMap.set(request.scriptType, sender.tab.id)
    return
  }
})
