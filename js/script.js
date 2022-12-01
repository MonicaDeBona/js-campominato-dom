// Selezione btn da html
const button = document.querySelector('div.button a.btn');

// Aggiungo evento dove al click sul btn appare la griglia
button.addEventListener('click', function() {

    // Creo dentro al main il div contenitore degli square
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = (''); // Ogni volta che clicco il main si svuota
    mainElement.classList.add('d-flex');
    const newDivContainer = document.createElement('div');
    newDivContainer.classList.add('parent','m-auto', 'd-flex', 'flex-wrap');
    mainElement.append(newDivContainer);

    let score = 0;
    const bombsArr = [];
    while (bombsArr.length < 16) {
        let bombsNum = getRandomUniqueNumber (bombsArr, 1, 100);
        bombsArr.push(bombsNum);
    }
    console.log(bombsArr);

    // Creo un loop per i numeri da 1 a 100 e dentro creo gli square che diventeranno blu al click mostrando il numero di casella in console.log
    for (let i = 1; i <= 100; i++) {

        const newDivSquare = getNewElement('div', i, ['square', 'd-flex', 'justify-content-center', 'align-items-center']); 

        newDivSquare.addEventListener('click', function() {
            // newDivSquare.classList.toggle('clicked');
            // console.log(i);
            if (bombsArr.includes(i)) {
                newDivSquare.classList.add('redBomb');
                alert('YOU LOSE!');
            } else {
                newDivSquare.classList.add('clicked');
                score += 1;
                if ( score === (100 - 16)) {
                    alert('YOU WIN!');
                }
            }
            // if bombArr contiene i ---> lose(alert) e cella rossa
            // else ---> colore blu add(class) score =+ 1
                //if ( score === (100 - 16) ) alert win
        });
        newDivContainer.append(newDivSquare);
    }
});

function getNewElement(elementTag, content, cls) {
    const newDivSquare = document.createElement(elementTag);
    newDivSquare.classList.add(...cls); 
    newDivSquare.innerText = content;

    return newDivSquare;
}



// ( VERIFICA ESLOSIONE)
//ad ogni click devo controllare se il numero è nell'array delle bombe, 
    //se si GAME OVER
    //se no (AGGIUNGO 1 PUNTO ALLE CASELLE GIUSTE)  E POI CONTINUO


    //(VERIFICA VINCITA)
    //controllo se il numero delle caselle buone è 100 meno le bombe
        // se si ho vinto if ( score === (100 - 16) )
        //se no continuo il gioco 

        function getRandomNumber(numMin, numMax) {
            const randomNumber =  Math.floor(Math.random() * (numMax - numMin + 1) + numMin);
            return randomNumber;
        }
        
        
        function getRandomUniqueNumber (blacklist, min, max){
            let isCheck = false;
            let randomNum;
            
            // Finchè non trovo un numero valido 
            while (isCheck == false) {
                // mi genero un numero randomico nell'intervallo richiesto 
                randomNum = getRandomNumber(min, max);
        
                // Se non è un doppione 
                if (!blacklist.includes(randomNum)) {
                    // ho trovato un nuovo numero randomico nella lista
                    isCheck = true;
                }
            }
            // Lo restituisco
            return randomNum;
        }
        
