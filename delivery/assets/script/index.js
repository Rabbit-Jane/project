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
        }
    ]
    const loading = () => {
        container.innerHTML = '<p>Нет данных</p>'
    }

    const randerResrs = (array) => {
        container.innerHTML = ''
/* 40 минута */
        array.forEach ((card) => {
            container.insertAdjacentElement('beforeend'
                `
                `
            )
        })   
        
    }
    loading()
    
}

modalFunc()
restsFunc()