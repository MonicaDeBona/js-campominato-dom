const button = document.querySelector('div.button a.btn');
const scoreBoard = document.querySelector('div.score-board');

// Aggiungo evento dove al click sul btn appare la griglia
button.addEventListener('click', function() {

    // Selezione main
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = (''); // Ogni volta che clicco il main si svuota
    mainElement.classList.add('d-flex');
    
    // Creo dentro al main il div contenitore degli squares
    const newDivContainer = document.createElement('div');
    newDivContainer.classList.add('parent','m-auto', 'd-flex', 'flex-wrap');
    mainElement.append(newDivContainer);

    let score = 0;
    scoreBoard.innerHTML = score;

    const bombsArr = [];
    while (bombsArr.length < 16) {
        let bombsNum = getRandomUniqueNumber (bombsArr, 1, 100);
        bombsArr.push(bombsNum);
    }
    console.log(bombsArr);

    // Creo un loop per i numeri da 1 a 100 e dentro creo gli squares
    for (let i = 1; i <= 100; i++) {

        const newDivSquare = getNewElement('div', i, ['square', 'd-flex', 'justify-content-center', 'align-items-center']); 

        newDivSquare.addEventListener('click', function() {
            if (bombsArr.includes(i)) {
                newDivSquare.classList.add('redBomb');
                scoreBoard.innerHTML = 'GAME OVER!' + ' ' + 'Your score: ' + score;
                mainElement.innerHTML = ('');
            } else {
                newDivSquare.classList.add('clicked');
                score += 1;
                scoreBoard.innerHTML = score;
                if ( score === (100 - 16)) {
                    scoreBoard.innerHTML = 'YOU WIN!' + ' ' + 'Your score: ' + score;
                }
            }
        });
        newDivContainer.append(newDivSquare);
    }
});



// -----------------> MY FUNCTIONS <--------------------------- //

function getNewElement(elementTag, content, cls) {
    const newDivSquare = document.createElement(elementTag);
    newDivSquare.classList.add(...cls); 
    newDivSquare.innerText = content;

    return newDivSquare;
}

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
