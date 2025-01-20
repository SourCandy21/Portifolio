function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


//  ------ para salvar botão de mudar o tema -------
//   const toggle = document.querySelector('.toggle-input');
// const initialState = localStorage.getItem('toggleState') == 'true';
// toggle.checked = initialState;

// toggle.addEventListener('change', function() {
//   localStorage.setItem('toggleState', toggle.checked);
// });