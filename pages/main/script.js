/*const request = new XMLHttpRequest();
request.open('GET', './pets.json');
request.onload = () => {console.log(request.response)};
*/
const pets = 
[
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]


class Menu {
    constructor() {
        this.body = document.body
        this.wrapper = document.querySelector("body > header > div") 
        this.headerInner = document.querySelector('.header__wrapper') 
        this.headerMenu = document.querySelector('.menu')
        this.headerBurgerMenu = document.querySelector('.menu2')
        this.headerBlackout = document.querySelector('.header__blackout')
    }

    addListenersForMenu() {
        this.headerBurgerMenu.addEventListener('click', this.toggleDroppedMenu.bind(this))
        this.headerBlackout.addEventListener('click', this.toggleDroppedMenu.bind(this))
        window.addEventListener('resize', (event) => {
            if (event.target.innerWidth > 767) this.closeDroppedMenu()
        })
    }

    toggleDroppedMenu() {
        this.wrapper.classList.toggle('active')
        this.headerInner.classList.toggle('active')
        this.headerMenu.classList.toggle('active')
        this.headerBurgerMenu.classList.toggle('active')
        this.headerBlackout.classList.toggle('active')
        this.body.classList.toggle('scroll')
    }

    closeDroppedMenu() {
        this.headerInner.classList.remove('active')
        this.headerMenu.classList.remove('active')
        this.headerBurgerMenu.classList.remove('active')
        this.headerBlackout.classList.remove('active')
        this.body.classList.remove('scroll')
    }
}
class Popup {
    constructor(pets) {
        this.pets = pets
        this.petsPopup = document.querySelector('.pets__popup')
        this.petsClose = document.querySelector('.pets__close')
        this.petsBlackout = document.querySelector('.pets__blackout')
    }

    addListenersForPopup() {
        this.petsClose.addEventListener('click', () => {
            this.closePopup()
        })

        this.petsBlackout.addEventListener('click', () => {
            this.closePopup()
        })

        this.petsBlackout.addEventListener('mouseover', () => {
            this.petsClose.classList.add('active')
        })

        this.petsBlackout.addEventListener('mouseout', () => {
            this.petsClose.classList.remove('active')
        })
    }

    fillPopup(index) {
        const popupImg = this.petsPopup.querySelector('.pets__popup__img img')
        const popupName = this.petsPopup.querySelector('.pets__popup__name')
        const popupType = this.petsPopup.querySelector('.pets__popup__type')
        const popupDescription = this.petsPopup.querySelector('.pets__popup__description')

        popupImg.src = this.pets[index].img
        popupImg.alt = this.pets[index].name

        popupName.textContent = this.pets[index].name
        popupType.textContent = `${this.pets[index].type} - ${this.pets[index].breed}`
        popupDescription.textContent = this.pets[index].description

        const age = document.getElementById('age')
        const inoculations = document.getElementById('inoculations')
        const diseases = document.getElementById('diseases')
        const parasites = document.getElementById('parasites')

        age.textContent = this.pets[index].age
        inoculations.textContent = this.pets[index].inoculations.join(', ')
        diseases.textContent = this.pets[index].diseases.join(', ')
        parasites.textContent = this.pets[index].parasites.join(', ')
    }

    openPopup(index) {
        this.fillPopup(index)
        this.petsPopup.classList.add('active')
        this.petsBlackout.classList.add('active')
        this.body.classList.add('scroll')
    }

    closePopup() {
        this.petsPopup.classList.remove('active')
        this.petsBlackout.classList.remove('active')
        this.body.classList.remove('scroll')
    }
}

class Slider extends Popup {
    constructor(pets) {
        super(pets)
        this.pets = pets
        this.quantity = 3
        this.body = document.body
        this.next = document.querySelector('#next')
        this.prev = document.querySelector('#prev')
        this.arrows = document.querySelectorAll('.pets__slider__arrow')
        this.track = document.querySelector('.pets__slider__cards__track')

        this.next.addEventListener('click', () => {
            this.addListenerForSlider('right')
        })

        this.prev.addEventListener('click', () => {
            this.addListenerForSlider('left')
        })

        window.addEventListener('resize', (event) => {
            let newQuantity = this.getCurrentQuantity()

            if (newQuantity !== this.quantity) {
                this.removeCards('left', this.quantity)
                this.generateCards('left', newQuantity)
                this.quantity = newQuantity
            }
        })
    }

    getCurrentQuantity() {
        let quantity = 1
        if (document.body.clientWidth >= 1280) quantity = 3
        else if (document.body.clientWidth >= 768) quantity = 2
        return quantity
    }

    addListenerForSlider(side) {
        this.quantity = this.getCurrentQuantity()

        setTimeout(() => {
            this.prepareTrack(side)
        }, 0)

        setTimeout(() => {
            this.generateCards(side, this.quantity)
            this.scrollTrack(side, this.quantity)
        }, 100)

        setTimeout(() => {
            this.finishScroll(side)
            this.removeCards(side, this.quantity)
        }, 400)

        setTimeout(() => {
            this.clearScroll()
        }, 410)
    }

    prepareTrack(side) {
        if (side === 'left') {
            this.track.style.right = '0'
        } else {
            this.track.style.left = '0'
        }

        this.arrows.forEach((arrow) => {
            arrow.setAttribute('disabled', '')
        })
    }

    scrollTrack(side, quantity = 3) {
        let bias = 90
        if (quantity === 2 || quantity === 1) bias = 40

        if (side === 'left') {
            this.track.style.right = `calc(-100% - ${bias}px)`
        } else {
            this.track.style.left = `calc(-100% - ${bias}px)`
        }
    }

    finishScroll(side) {
        if (side === 'left') {
            this.track.style.left = '0'
            this.track.style.right = 'auto'
        } else {
            this.track.style.left = 'auto'
            this.track.style.right = '0'
        }
    }

    clearScroll() {
        this.track.style.left = ''
        this.track.style.right = ''

        this.arrows.forEach((arrow) => {
            arrow.removeAttribute('disabled')
        })
    }

    createCard(index) {
        const card = document.createElement('div')
        const cardHeader = document.createElement('div')
        const cardHeaderImg = document.createElement('img')
        const cardBody = document.createElement('div')
        const cardBodyTitle = document.createElement('h4')
        const cardButton = document.createElement('button')

        card.className = 'pets__slider__card'
        cardHeader.className = 'pets__card__header'
        cardBody.className = 'pets__card__body'
        cardBodyTitle.className = 'pets__card__title'
        cardButton.className = 'pets__card__button'

        cardBodyTitle.textContent = this.pets[index].name
        cardButton.textContent = 'Learn more'

        cardHeaderImg.src = this.pets[index].img
        cardHeaderImg.alt = this.pets[index].name

        cardHeader.appendChild(cardHeaderImg)
        card.appendChild(cardHeader)
        cardBody.appendChild(cardBodyTitle)
        cardBody.appendChild(cardButton)
        card.appendChild(cardBody)

        card.setAttribute('data-id', index)

        card.addEventListener('click', (event) => {
            super.openPopup(event.currentTarget.getAttribute('data-id'))
            super.addListenersForPopup()
        })

        return card
    }

    generateCards(side, quantity = 3) {
        let cardsIndex = [0, 1, 2, 3, 4, 5, 6, 7]

        this.track.childNodes.forEach((card) => {
            cardsIndex = cardsIndex.filter((item) => item != card.dataset.id)
        })

        const currentCardsIndex = cardsIndex.sort(() => Math.random() - 0.5).slice(0, quantity)

        for (let i = 0; i < quantity; i++) {
            const card = this.createCard(currentCardsIndex[i])

            if (side === 'left') {
                this.track.prepend(card)
            } else {
                this.track.append(card)
            }
        }
    }

    removeCards(side, quantity = 3) {
        for (let i = 0; i < quantity; i++) {
            const card = side === 'left' ? this.track.lastChild : this.track.firstChild
            this.track.removeChild(card)
        }
    }
}

// Run
/*
const request = new XMLHttpRequest();
request.open('GET', './pets.json');
request.onload = () => {console.log(request.response)};
const pets = request.response;
main(pets);
*/
const getCurrentQuantity = () => {
    let quantity = 1
    if (document.body.clientWidth >= 1280) quantity = 3
    else if (document.body.clientWidth >= 768) quantity = 2
    return quantity
}

const main = (pets) => {
    const menu = new Menu()
    menu.addListenersForMenu()

    const slider = new Slider(pets)
    slider.generateCards('left', getCurrentQuantity())
}

/*
document.addEventListener('DOMContentLoaded', main(allPets));
*/
/*

const getPets = async () => {
    
    const res = await fetch('./pets.json')

    const pets = await res.json()

    main(pets)
}

getPets();
*/

const getPets = () => {
 

    main(pets)
}

getPets();


/*
document.addEventListener('DOMContentLoaded', () => {
   
    const DATA_FILE = require('./pets.json');
    const parseJson = (json) => {
      return JSON.parse(JSON.stringify(json));
    };
    pets = parseJson(DATA_FILE);
});    
*/



/*pets = JSON.parse(request.respons); 
main(pets);*/
/*fetch('./pets.json').then(res => res.json()).then(list => {
  pets = list;
  main(pets);
});  */
