
//    creo una funzione standard da poter riutilizzare che
//    crea elementi e aggiunge classi


function creazioneElemento( tagHtml, classi, classLivello) {
    let elemento = document.createElement(tagHtml);
    elemento.classList.add(classi);
    elemento.classList.add(classLivello);
    return elemento;
}
    


document.getElementById('bottone').addEventListener('click',function() {

    let griglia = document.getElementById("griglia");
    griglia.innerHTML = "";
    let livello = document.getElementById('livello').value;
    console.log ("il livello è " + livello);
    
    

    let giri;
    livello = parseInt(livello);
    console.log(typeof livello);

    if (livello === 1)  {  
        console.log(1) 
        giri = 100;
    }   else if (livello === 2) {
        console.log(2) 
        giri = 81;
    }   else if (livello === 3) {
        console.log(3) 
        giri = 49;
    }

    console.log("giri:" + giri);
    
    for (let i = 1; i <= giri; i++) {

        let classeLivello;

        if (livello === 1) {
            classeLivello = "item_1";
        }

        if (livello === 2) {
            classeLivello = "item_2";
        }

        if (livello === 3) {
            classeLivello = "item_3"; 
        }

        let divbox = creazioneElemento("div", "item", classeLivello);


        // let divbox = creazioneElemento("div", "item", classeLivello);

        divbox.addEventListener("click", function() {
            this.classList.toggle('active');
        })

        divbox.append(i);
        griglia.append(divbox);

    }


})





