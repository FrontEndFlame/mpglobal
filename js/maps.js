const links = document.querySelectorAll('.footer__map-links a');
  const iframes = document.querySelectorAll('.map__iframe')

  links.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      
      links.forEach(link => link.classList.remove('active'));
      link.classList.add('active');

      const targetIds = link.dataset.target.split(','); 

      iframes.forEach(iframe => {
        iframe.style.display = 'none';
      }); 

      targetIds.forEach(targetId => {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.style.display = 'block';
        }
      });
    });
  });