chrome.action.onClicked.addListener((tab) => {
    const url = "chrome://settings/passwords";
    chrome.tabs.create({ url });
});