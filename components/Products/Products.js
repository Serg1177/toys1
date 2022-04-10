class Products {
    constructor (){
this.classNameActive = 'products-element__btn_active';
this.labelAdd = 'Добавить в корзину';
this.labelRestore = 'Удалить из корзины'

    }

    handleSetLocationStorage(element, id){
        let {pushProduct, products} = localStorageUtils.putProducts(id)

        if(pushProduct){
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRestore;
        }else{
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd ;
        }
        headerPage.render(products.length);
    }

render(){
    
    const productsStore = localStorageUtils.getProducts()
    let htmlCatalog = '';

    CATALOG.forEach(({id, name, img, price})=>{

        let activeText = '';
        let activeClass = '';

if(productsStore.indexOf(id) === -1){

    activeText = this.labelAdd;

}else{
    activeClass = ' '+this.classNameActive;
    activeText = this.labelRestore;
}

       htmlCatalog += `
       <li class = 'products-element'>
       <span class = 'products-element__name'>${name}</span>
       <img class = 'products-element__img' src = '${img}'/>
       <span class='products-element__price'>
      
✨${price.toLocaleString()} Rub
       </span>
       <button class = 'products-element__btn${activeClass}' onclick='productsPage.handleSetLocationStorage(this, "${id}")' ; >${activeText}</button>
       </li>
       
       `
    })

    let html = `
    <ul class='products-container'>
    ${htmlCatalog}
    </ul>

    `;

    ROOT_PRODUCTS.innerHTML = html;
}


}
const productsPage = new Products();
