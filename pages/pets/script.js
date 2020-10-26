//"use strict"

let pets = []; // 8 неповторяющихся элементов в порядке, как в исходнике
let fullPetsList = []; // 48

const request = new XMLHttpRequest();
request.open('GET', './../pets.json');

request.onload = () => {
    //console.log(request.response);
    pets = JSON.parse(request.response);
    
    fullPetsList = (() =>{ 
        let tempArr = [];
        for (let i = 0; i < 6; i++) {
            const newPets = pets; //8 перемешенных элементов
            for (let j = pets.length; j > 0; j--) {
                let randInd = Math.floor(Math.random() * j);
                const randElem = newPets.splice(randInd, 1)[0];//вырезаем 1 случайный элемент
                newPets.push(randElem);
            }    
            tempArr = [...tempArr, ...newPets];
        }
        return tempArr;
    })();

    createPets(fullPetsList);


    
    for (let i = 0; i < (fullPetsList.length/ 6); i++) {
        const stepList = fullPetsList.slice(i * 6, (i * 6) + 6);
        
        for (let j = 0; j < 6; j++) {
            stepList.forEach((item, ind) => {
                if ( item.name === stepList[j].name && (ind !== j) ) {
                  document.querySelector("#new-pets").children[(i * 6) + j].style.border = '5px solid red';
                }
            })

        }    
       
    }
    

}

createPets = (petsList) => {
    const elem = document.querySelector("#new-pets");
    elem.innerHTML += createElements(petsList);  
}    
createElements = (petsList) => {
    let str = '';
    for (let i = 0; i < petsList.length; i++) {
      str += `<img src=" ${ petsList[i].img } ">`;
    }
    return str;
  }

request.send();