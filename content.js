// Function to hide links with specific class names
function hideLinksByClass(classNames) {
  // Split the class names by space and create a selector
  const classSelector = classNames.split(' ').map(cls => `.${cls}`).join('');
  const links = document.querySelectorAll(`a${classSelector}`);
  
  links.forEach(link => {
    link.remove(); 
  });
}

// Call the function with the desired class names
hideLinksByClass('fl iUh30'); // Replace with the actual class names
