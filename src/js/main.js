// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// declaration variable - selection des elements html.cart-items
const cartItemsHtml = document.querySelector("#ocCart .cart-items");
// declaration variable - selection des elements html.cart-total
const cartTotalHtml = document.querySelector("#ocCart .cart-total > span");
// declaration variable - selection de tout les elements html .card
const itemsHtml = document.querySelectorAll(".card");
// objet du tableau, objet du tableau

//declaration variable qui contient valeur (float) 0.00
let cartTotal = 0.0;

//on boucle a travers tout les elements html de notre variable itemsHtml
itemsHtml.forEach((item) => {
  //assignation de la valeur (prix) a cardPrice puis elle est convertie en float
  const cardPrice = parseFloat(
    item.querySelector(".card-price > span").innerHTML
  );

  //selection du .btn-buy et ajout d'evenement lors du click
  item.querySelector(".btn-buy").addEventListener("click", () => {
    //declaration variable contenant item clone
    const itemClone = item.cloneNode(true);
    //enlever btn buy dans le clone de la carte
    itemClone.querySelector(".btn-buy").remove();

    //remplacer par btn remove
    const btnRemove = document.createElement("button");
    //ajout du texte dans le btnRemove
    btnRemove.textContent = "Remove";
    //donner les classes que le bouton aura
    btnRemove.className = "btn btn-danger btn-remove";
    //ajout d'evenement lors du click de btnRemove
    btnRemove.addEventListener("click", () => {
      //retire itemClone
      itemClone.remove();
      //deduction de cartTotal - cardPrice
      cartTotal -= cardPrice;
      //retourne le textContent de cartTotalHtml a cartTotal
      cartTotalHtml.textContent = cartTotal;
      //methode pour arrondir le cardTotalHtml avec 2 decimales
      cartTotalHtml.innerHTML = cartTotal.toFixed(2);
    });
    //ajout du bouton a la carte
    itemClone.querySelector(".card-body").appendChild(btnRemove);

    //addition total du cart et prix carte
    cartTotal += cardPrice;
    //Update du visuel du cart total par la valeur de notre variable cartTotal
    cartTotalHtml.innerHTML = cartTotal;
    //Update la liste d'item dans le cart en ajoutant le clone de la carte selectionne
    cartItemsHtml.appendChild(itemClone);
  });
});

// -------- List view / Grid view  --------

// declaration de variable elements - selection de l'element html
let elements = document.getElementsByClassName("col-12 col-lg-4 col-md-6 p-3");

// declaration d'une boucle
let i;

const listButton = document.querySelector(".btnList");
const gridButton = document.querySelector(".btnGrid");

listButton.addEventListener("click", listView);
gridButton.addEventListener("click", gridView);

// fonction pour le List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "60%";
  }
}

// fonction pour le Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "";
  }
}

window.onload= function() {
  Particles.init({
    selector: '.background',
    color: ['#6d6875', '#b5838d', '#6d2e46'],
    sizeVariations:5,
  });
    
};