// when the extension is first installed, set default values
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set(
    {
      toggleSitesActive: false,
      toggleSitesList: "example.com",
    },
    function() {}
  );
});

// set up initial chrome storage values
var toggleSitesActive = false;
var toggleSitesList = "example.com";

chrome.storage.sync.get(["toggleSitesActive", "toggleSitesList"], function(
  result
) {
  toggleSitesActive = result.toggleSitesActive;
  toggleSitesList = result.toggleSitesList;
});

// on each site request, block if it's in toggleSitesList
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // if the toggle is inactive, don't block anything
    if (!toggleSitesActive) {
      return { cancel: false };
    }

    // determine if the url is in toggleSitesList
    var cancel = toggleSitesList.split(/\n/).some((site) => {
      var url = new URL(details.url);

      return Boolean(url.hostname.indexOf(site) !== -1);
    });

    return { cancel: cancel };
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

// any time a storage item is updated, update global variables
chrome.storage.onChanged.addListener(function(changes, namespace) {
  if (namespace === "sync") {
    if (changes.toggleSitesActive) {
      toggleSitesActive = changes.toggleSitesActive.newValue;
    }

    if (changes.toggleSitesList) {
      toggleSitesList = changes.toggleSitesList.newValue;
    }
  }
});

// https://gist.github.com/piayo/4274463
let _timer = null;
let _flg_opened = false;
let _func_toggle = function(flg) {
  _flg_opened = flg;
  clearTimeout(_timer);
  _timer = setTimeout(function() {
    console.log(">>_flg_opened: " + _flg_opened);
    if (_flg_opened) {
      chrome.browserAction.setPopup({ popup: "" });
      chrome.browserAction.setBadgeText({ text: "OFF" });
      chrome.browserAction.setTitle({ title: "NextClick: Close" });
      clearTimeout(_timer);
    } else {
      chrome.browserAction.setPopup({ popup: "popup.html" });
      chrome.browserAction.setBadgeText({ text: "ON" });
      chrome.browserAction.setTitle({ title: "NextClick: OPEN" });
      clearTimeout(_timer);
    }
  }, 200);
};
(function(_WIN, _DOC) {
  let _init = function() {
    console.log(">>onload: background");
    _func_toggle(false);
  };
  _WIN.onload = _init;
})(window, document);
