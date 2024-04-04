    // 
    const btn = document.querySelector('#btn');
    const todoCard = document.querySelector(".todoCard");
    const todoCards = document.querySelector("#todoCards");
    const compteurDiv = document.querySelector(".compteur");

    const classTodoCards = todoCards.classList.contains("todoCards")

    let compteur = 1;
    compteurDiv.innerHTML = compteur;

// Ajoute une nouvelle card
btn.addEventListener("click", function(){
    const cloneCard = todoCard.cloneNode(true);
    todoCards.appendChild(cloneCard)
    compteur++;
    compteurDiv.innerHTML = compteur;

})

 //Supprime une card


 
todoCards.addEventListener("click", function(event){
    const targetElement = event.target;
   console.log(targetElement.closest(".delBtn"))
    if(targetElement.classList.contains("fa")){
    const btnSupprimer = targetElement.closest(".delBtn")

           const parentButtonSuppr = btnSupprimer.parentElement
           parentButtonSuppr.remove()
           
           compteur--;
           compteurDiv.innerHTML = compteur;
       }
       console.log("ok")
})
