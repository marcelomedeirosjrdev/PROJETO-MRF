const list = document.querySelector('ul')
const product = menuOptions

const showAll = document.querySelector('.show-all')

let myLi = ''

function buttonShowAll() {

    product.forEach(item => {

        myLi +=
            ` 
        <li>
            <img src=${item.src}>
            <p>${item.name}</p>
            <p class="item-price">${item.price}</p>
        </li>
`

    });

list.innerHTML = myLi
}

showAll.addEventListener('click', buttonShowAll )

