const list = document.querySelector('ul')
const product = menuOptions

const showAll = document.querySelector('.show-all')
const showMap = document.querySelector('.show-map')
const showReduce = document.querySelector('.show-reduce')
const veganFilter = document.querySelector('.filter-vegan')

let myLi = ''
function render(productsToRender = product) {

    myLi = ''

    productsToRender.forEach(item => {

        myLi +=
            ` 
        <li>
            <img src=${item.src}>
            <p>${item.name}</p>
            <p class="item-price" >R$ ${item.price.toFixed(2)}</p>
        </li>

        
`

    });

    list.innerHTML = myLi
}

function buttonShowAll() {
    render()

}
function buttonShowMap() {


    const discountedProducts = product.map((productmap) => {

        return {
            ...productmap,
            price: productmap.price * 0.9
        }


    })

    render(discountedProducts)


}

function buttonShowReduce() {

    const totalBurgers = menuOptions.reduce((acc, burger) => acc + burger.price, 0);

    list.innerHTML = `
<p id="total">O valor total dos Hamburgueres, são de R$${totalBurgers.toFixed(2)}</p>`;

};

function buttonFilterVegan(){
    const veganFilter = menuOptions.filter((product)=> product.vegan === true )

    render(veganFilter)

   
}



showAll.addEventListener('click', buttonShowAll)
showMap.addEventListener('click', buttonShowMap)
showReduce.addEventListener('click', buttonShowReduce)
veganFilter.addEventListener('click', buttonFilterVegan)

