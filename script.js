function menuShow(){
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")){
        menuMobile.classList.remove("open");
        document.querySelector(".icon").src = "imagens/menu_white_36dp.svg";
    } else{
        menuMobile.classList.add("open");
        document.querySelector(".icon").src = "imagens/close_white_36dp.svg";
    }
}

function submitForm() {
    var searchTerm = document.getElementById("searchInput").value;

    console.log("Termo de pesquisa enviado: " + searchTerm);
  }

  