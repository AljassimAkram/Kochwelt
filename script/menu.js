function menu() {
    let menu = document.getElementById('toggleMenu');
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
    }
  }