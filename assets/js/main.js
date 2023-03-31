
//    creo una funzione standard da poter riutilizzare che
//    crea elementi e aggiunge classi


function creazioneElemento( tagHtml, classi) {
    let elemento = document.createElement(tagHtml);
    elemento.classList.add(classi);
    return elemento;
}



document.getElementById('bottone').addEventListener('click',function() {

    let griglia = document.getElementById("griglia");
    griglia.innerHTML = "";

 for (let i = 1; i <= 100; i++) {
    let divbox = creazioneElemento("div", "item");
     divbox.addEventListener("click", function() {
        this.classList.toggle('active');
     })


   
    divbox.append(i);
    griglia.append(divbox);


}


 })



// let bottoni = document.querySelectorAll('.item');
// console.log(bottoni);

// for (let i = 0; i < bottoni.length; i++) {
//     console.log(bottoni[i]);
//     let cella = bottoni[i];
//     cella.addEventListener('click', function() {
//         this.classList.add('active');
//     })
// }


