function hideGoogleTranslateLinks(){
  const links = document.querySelectorAll("a[href^='https://translate.google.']")
  links.forEach(link => {
    link.remove(); 
  });
  
}

hideGoogleTranslateLinks();