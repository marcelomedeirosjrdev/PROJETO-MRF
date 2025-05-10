const list = document.querySelector('ul')
const product = menuOptions

const showAll = document.querySelector('.show-all')
const showMap = document.querySelector('.show-map')


function render() {

    let myLi = ''

    product.forEach(item => {

        myLi +=
            ` 
        <li>
            <img src=${item.src}>
            <p>${item.name}</p>
            <p class="item-price">${item.price.toFixed(2)}</p>
        </li>
`

    });

    list.innerHTML = myLi
}

function buttonShowAll() {
    render()

}
function buttonShowMap() {


    product.map((productmap) => {

        productmap.price = (productmap.price * 0.9)
        return productmap


        
    })
     render()

}







showAll.addEventListener('click', buttonShowAll)
showMap.addEventListener('click', buttonShowMap)

