(function () {

    document.addEventListener("DOMContentLoaded", initialiser);

    function initialiser(evt) {

        let allOnglet = document.querySelectorAll(".slider-dots-item");
        for (let oneOnglet of allOnglet) {
            oneOnglet.addEventListener("click", slide);
        }
        let suivant = document.querySelector(".slider-next");
        suivant.addEventListener("click", deplacementVersLaDroite);
        let precedent = document.querySelector(".slider-prev");
        precedent.addEventListener("click", deplacementVersLaGauche);

    }

    function deplacementVersLaGauche(evt) {
        let ongletSelectionne = document.querySelector(".slider-dots-item.active")
        let frerePrecedent = ongletSelectionne.previousElementSibling;
        let dernierFrere = document.querySelector(".slider-dots").lastElementChild;

        if (frerePrecedent!=null) {
            frerePrecedent.click();
        } else {
            dernierFrere.click();
        }
    }

    function deplacementVersLaDroite(evt) {
        let ongletSelectionne = document.querySelector(".slider-dots-item.active")
        let frereSuivant = ongletSelectionne.nextElementSibling;
        let premierFrere = document.querySelector(".slider-dots").firstElementChild;

        if (frereSuivant!=null) {
            frereSuivant.click();
        } else {
            premierFrere.click();
        }
    }

    function slide(evt) { 
        
        let ongletSelectionne = document.querySelector(".slider-dots-item.active")
        ongletSelectionne.classList.remove("active")
        this.classList.add("active");
       
        let deplacement = this.dataset.slideTo*(-100);
        let liste = document.querySelector(".slider-list");
            liste.style.transform=("translateX("+deplacement+"%)");
        
        
    }
   
}());