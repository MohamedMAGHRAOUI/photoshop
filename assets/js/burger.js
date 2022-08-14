function toggleMenu () {  
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
    });    
  }
  toggleMenu();


  function toggleButton () { 

  const body = document.querySelector('body')
  const toggle = document.getElementById('toggle');
  toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    
  }}

  toggleButton();

  function falsebutton () {
    document.oncontextmenu = new Function("return false")
  
  }
  falsebutton();