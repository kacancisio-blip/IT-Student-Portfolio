const menu = document.getElementById('menu');
    const links = document.getElementById('navlinks');
    menu.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(isOpen));
    });
    links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      links.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }));
    document.getElementById('year').textContent = new Date().getFullYear();
