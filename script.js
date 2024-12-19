// Dark Mode Toggle
document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
  
  // Language Toggle (for simplicity, just changing the text on button)
  let languageButton = document.getElementById('toggle-language');
  let isEnglish = true;
  
  languageButton.addEventListener('click', function() {
    if (isEnglish) {
      languageButton.innerText = 'Switch to English';
      document.querySelector('h1').innerText = 'مرحبًا بك في مركز وسائل التواصل الاجتماعي';
      isEnglish = false;
    } else {
      languageButton.innerText = 'Switch to Arabic';
      document.querySelector('h1').innerText = 'Welcome to Social Media Hub';
      isEnglish = true;
    }
  });
  