document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    for (const link of scrollLinks) {
      link.addEventListener('click', smoothScroll);
    }
  
    function smoothScroll(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjust this value as needed
          behavior: 'smooth'
        });
      }
    }
  });
  