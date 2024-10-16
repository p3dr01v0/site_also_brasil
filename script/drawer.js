function menuShow(){
  let menuMobile = document.querySelector('.mobile_menu');
  if (menuMobile.classList.contains('open')){
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "img/menu_mobile/menu_white_36dp.svg"
  }else{
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "img/menu_mobile/close_white_36dp.svg"
  }
}

function mostrar_produtos() {
  var submenuProdutos = document.querySelector('.navegacao_sub_produtos');
  if (submenuProdutos.style.display === 'block') {
      submenuProdutos.style.display = 'none';
  } else {
      submenuProdutos.style.display = 'block';
  }
}


