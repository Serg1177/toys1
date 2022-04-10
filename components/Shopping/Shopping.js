class Shopping{
    handleClier(){
        ROOT_SHOPPING.innerHTML = '';
    }

    render(){


        const productsStore = localStorageUtils.getProducts()
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({id, name, price})=>{
        if (productsStore.indexOf(id)!= -1){

            htmlCatalog += `
            <tr>
            <td class='shopping-element__name'>${name}</td>
            <td class='shopping-element__price'>⛳️  ${price.toLocaleString()} Rub</td>
            </tr>
            `
            sumCatalog += price;
        }
       
        });    
        const html =`
        <div class='shopping-conteiner'>
        <div class='shopping-close' onclick=' shoppingPage.handleClier()'></div>
        <table>
        ${htmlCatalog}

        <tr>
        <td class='shopping-element__name'>Сумма</td>
        <td class='shopping-element__price'>🎯  ${sumCatalog.toLocaleString()} Rub</td>
        </tr>

        </table>
        </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();
