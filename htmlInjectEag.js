var fileUpload = document.createElement("input");
fileUpload.id = 'fileUpload';
fileUpload.type = 'file';
fileUpload.accept = '.html';
document.body.appendChild(fileUpload);

var button = document.createElement('button');
button.innerText = 'render';
document.body.appendChild(button);

// Add 'async' to the function to use 'await'
button.addEventListener('click', async function() {
  if (fileUpload.files && fileUpload.files[0]) {
    // Clear DOM
    document.textContent = "";
    
    // Make div for the place
    var div = document.createElement('div');
    document.body.appendChild(div);
    
    // 1. Get the HTML text content from the file
    const fileText = await fileUpload.files[0].text();
    
    // 2. Parse the string into actual DOM elements using DOMParser
    const parser = new DOMParser();
    const doc = parser.parseFromString(fileText, 'text/html');
    
    // 3. Find all script tags in the parsed content
    const scripts = doc.querySelectorAll('script');
    
    // 4. Inject the non-script HTML elements first
    div.innerHTML = doc.body.innerHTML;
    
    // 5. Re-create and inject each script tag so the browser executes it
    scripts.forEach(oldScript => {
      const newScript = document.createElement('script');
      
      // Copy over attributes (like src, type, async) if they exist
      Array.from(oldScript.attributes).forEach(attr => {
        newScript.setAttribute(attr.name, attr.value);
      });
      
      // Copy the inline code inside the script tag
      newScript.textContent = oldScript.textContent;
      
      // Appending to the DOM forces the browser to evaluate and run the JS
      div.appendChild(newScript);
    });
    
  } else {
    alert("Please select a file first!");
  }
});
