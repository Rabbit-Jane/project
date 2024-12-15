const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay')
const cartBtn = document.querySelector('#cart-button')

const openModal = () => {
    modal.classList.add('open')
}

const closeModal = () => {
    modal.classList.remove('open')
}

cartBtn.addEventListener('click', () => {
    openModal()
})

modal.addEventListener('click', (event) => {
    if (
        event.target.classList.contains('cart-modal__overlay') || 
        event.target.closest('.cart-modal__header--close')
    ) {
        closeModal()
    }
    
})
}

const restsFunc = () => {
    const container = document.querySelector('#rests-container')
    const restArray = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'pizza_plus.jpg'
        },
        {
            id: 1,
            title: 'Тануки',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'tanuki.jpg'
        },
        {
            id: 2,
            title: 'FoodBand',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'foodband.jpg'
        },
        {
            id: 3,
            title: 'Жадина-пицца',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'jadina_pizza.jpg'
        },
        {
            id: 4,
            title: 'Точка еды',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'tochka_edi.jpg'
        },
        {
            id: 5,
            title: 'PizzaBurger',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'pizzaburger.jpg'
        }
    ]
    const loading = () => {
        container.innerHTML = '<p>Нет данных</p>'
    }

    const randerResrs = (array) => {
        container.innerHTML = ''

        array.forEach ((card) => {
            container.insertAdjacentHTML('beforeend',
                `<div class="productds-card">
                    <div class="productds-card__image">
                        <a href="./goods.html?id=${card.id}">
                            <img src="./assets/img/rests/${card.image}" alt="${card.image}">
                        </a>
                    </div>
                    <div class="productds-card__description">
                        <div class="productds-card__description-row">
                            <a href="./goods.html"><h4 class="productds-card__description--title">${card.title}</h4></a>
                            <div class="productds-card__description--badge">${card.time} мин</div>
                        </div>
                        <div class="productds-card__description-row">
                            <div class="productds-card__description-info">
                                <div class="productds-card__description-info--raiting">
                                    <img src="./assets/img/star.svg" alt="star">
                                    ${card.rating}
                                </div>
                                <div class="productds-card__description-info--price">
                                    От ${card.price} ₽
                                </div>
                                <div class="productds-card__description-info--group">
                                ${card.type}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            )
        })   
        
    }
    if(container)
        loading()

    setTimeout(() => {
        randerResrs(restArray)
        },
    500)
    
}

const goodsFunc = () => {
    const container = document.querySelector('#goods-container')
    const goodsArray = [
    {
        id: 0,
        name: 'Ролл угорь стандарт',
        text: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
        price: 250,
        image: 'roll_1.jpg'
    },
    {
        id: 0,
        name: 'Калифорния лосось стандарт',
        text: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
        price: 395,
        image: 'roll_2.jpg'
    },
    {
        id: 0,
        name: 'Окинава стандарт',
        text: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
        price: 250,
        image: 'roll_3.jpg'
    },
    {
        id: 0,
        name: 'Цезарь маки хl',
        text: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
        price: 250,
        image: 'roll_4.jpg'
    },
    {
        id: 0,
        name: 'Ясай маки стандарт 185 г',
        text: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
        price: 250,
        image: 'roll_5.jpg'
    },
    {
        id: 0,
        name: 'Ролл с креветкой стандарт',
        text: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
        price: 250,
        image: 'roll_6.jpg'
    }
        

    ]
    const loading = () => {
        container.innerHTML = '<p>Нет данных</p>'
    } 

    const randerGoods = (array) => {
        container.innerHTML = ''
        array.forEach ((card) => {
            container.insertAdjacentHTML('beforeend',
                `<div class="productds-card">
                    <div class="productds-card__image">
                        <img src="./assets/img/goods/${card.image}" alt="${card.image}">
                    </div>
                    <div class="productds-card__description">
                        <div class="productds-card__description-row">
                            <h5 class="productds-card__description--name">${card.name}</h5>
                        </div>
                        <div class="productds-card__description-row">
                            <p class="productds-card__description--text">${card.text}</p>
                        </div>
                        <div class="productds-card__description-row">
                            <div class="productds-card__description-controls">
                                <button class="btn btn-primary">
                                    В корзину
                                    <img src="assets/img/shopping-cart.svg" alt="shopping-cart">
                                </button>
                                <span class="productds-card__description-controls--price">${card.price} ₽</span>
                            </div>
                        </div>
                    </div>
                </div>`
            )
        })
    }
    if(container)
        loading()

    setTimeout(() => {
        randerGoods(goodsArray)
        },
    1500)
}

modalFunc()
restsFunc()
goodsFunc()

