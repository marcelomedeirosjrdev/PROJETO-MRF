const list = document.querySelector('ul')
const product = menuOptions

const showAll = document.querySelector('.show-all')
const showMap = document.querySelector('.show-map')
const showReduce = document.querySelector('.show-reduce')

let myLi = ''
function render() {

    myLi = ''

    product.forEach(item => {

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


    product.map((productmap) => {

        productmap.price = (productmap.price * 0.9)

        return productmap





    })

    render()


}

function buttonShowReduce() {

    const totalBurgers = menuOptions.reduce((acc, burger) => acc + burger.price, 0);

    list.innerHTML = `
<p id="total">O valor total de Hamburgueres: R$${totalBurgers}</p>`;

};














showAll.addEventListener('click', buttonShowAll)
showMap.addEventListener('click', buttonShowMap)
showReduce.addEventListener('click', buttonShowReduce)

