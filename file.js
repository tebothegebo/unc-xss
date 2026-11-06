// 1. Open the new blank window
var win = window.open('about:blank');

// 2. Configure the new window's body styles
win.document.body.style.margin = '0';
win.document.body.style.height = '100vh';

// 3. Fetch the HTML file content
fetch("https://raw.githubusercontent.com/tebothegebo/unc-xss/refs/heads/main/eagler.js")
  .then(response => {
    // Check if the network request was successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Extract the content as text
    return response.text();
  })
  .then(htmlContent => {
    // 4. Write the text content into the new window's document
    win.document.open();
    win.document.write(htmlContent);
    win.document.close();
  })
  .catch(error => {
    console.error('Failed to fetch or write the document:', error);
  });
