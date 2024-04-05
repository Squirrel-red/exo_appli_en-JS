    // Déclaration de constantes
    const btn = document.querySelector('#btn');
    const todoCard = document.querySelector(".todoCard");
    const todoCards = document.querySelector("#todoCards");
    const compteurNombreCards = document.querySelector(".compteur");
  //const classTodoCards = todoCards.classList.contains("todoCards")

    // Déclaration de la variable liée au div compteur dans index.html
    let compteur = 1;
    compteurNombreCards.innerHTML = compteur;

// Ajoute un nouveau task card
btn.addEventListener("click", function(){
    const cloneCard = todoCard.cloneNode(true);     // on clone le task card
    const cloneTextArea = cloneCard.querySelector('.task');
    cloneTextArea.value = "New Task";               // pour créer  le nouveau task card vierge et ne pas copier le contenu de task précédent
    todoCards.appendChild(cloneCard)                // on inscrit  le nouveau task card au container des cards

    compteur++;                                     //on incrémente le compteur et on le mis à jour
    compteurNombreCards.innerHTML = compteur;

})

//Supprime un task card
todoCards.addEventListener("click", function(event){
    const targetElement = event.target;
    console.log(targetElement.closest(".delBtn"))
    if(targetElement.classList.contains("fa")){
    const btnSupprimer = targetElement.closest(".delBtn")

           const parentButtonSuppr = btnSupprimer.parentElement
           parentButtonSuppr.remove()
           
           compteur--;                               //on décrémente le compteur et on le mis à jour
           compteurNombreCards.innerHTML = compteur;
       }
       console.log("ok")
})
