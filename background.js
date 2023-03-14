
function handleBrowserActionClick() {
    // Code to save tabs to CSV and download file
    chrome.tabs.query({}, function(tabs) {
      // create CSV content
      let csvContent = "data:text/csv;charset=utf-8,";
      tabs.forEach(function(tab) {
        let tabData = [tab.title, tab.url];
        let row = tabData.join(",");
        csvContent += row + "\r\n";
      });
  
      // download CSV file
      chrome.downloads.download({
        url: csvContent,
        filename: "tabs.csv",
        saveAs: true,
        conflictAction: "uniquify"
      });
    });
  }
  
handleBrowserActionClick()  
  
// chrome.browserAction.onClicked.addListener(function() {
//     chrome.tabs.query({}, function(tabs) {
//       // create CSV content
//       let csvContent = "data:text/csv;charset=utf-8,";
//       tabs.forEach(function(tab) {
//         let tabData = [tab.title, tab.url];
//         let row = tabData.join(",");
//         csvContent += row + "\r\n";
//       });
  
//       // download CSV file
//       let encodedUri = encodeURI(csvContent);
//       let link = document.createElement("a");
//       link.setAttribute("href", encodedUri);
//       link.setAttribute("download", "tabs.csv");
//       document.body.appendChild(link);
//       link.click();
//     });
//   });


  