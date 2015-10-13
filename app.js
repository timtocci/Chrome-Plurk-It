chrome.contextMenus.create({"title": "Plurk-it", "contexts":["page"],"onclick": plurkIt});
function plurkIt(i, t){
	var createProperties = {url: "http://plurk.com/?qualifier=shares&status=" + encodeURIComponent(t.title) + "%20%2D%20" + encodeURI(t.url)};
	chrome.tabs.create(createProperties);
}
chrome.contextMenus.create({"title": "Search Plurks", "contexts":["selection"],"onclick": searchPlurks});
function searchPlurks(i, t){
	var createProperties = {url: "http://www.plurk.com/search?q=" + encodeURIComponent(i.selectionText)};
	chrome.tabs.create(createProperties);
}