function Catalog () {
    this.title = 'Catalog';

    this.elem = document.createElement('div');
    this.elem.classList.add('page');

    let data = [];

    const getData = async () => {
        return await fetch('https://fakestoreapi.com/products')
        .then(response => {
            return response.json();
        })
        .then(result => {
            localStorage.setItem('localData', JSON.stringify(result));
            return result;
        });
    }
    
    const render = async () => {
        let localData = localStorage.getItem('localData');
        if(localData && localData.length > 0) localData = JSON.parse(localData);

        let localCart = localStorage.getItem('localCart');
        if(localCart && localCart.length > 0) localCart = JSON.parse(localCart); 

        data = localData || await getData();
        
        data.forEach(product => {
            const productElem = document.createElement('div');
            productElem.classList.add('catalog__product');

            const btnAdd = document.createElement('button');
            btnAdd.classList.add('catalog__btn_product_add');
            
            btnAdd.innerHTML = 'Add';
            
            if (localCart && localCart.indexOf(product.id) != -1) {
                btnAdd.innerHTML = "Added";
            };
           
            productElem.innerHTML = `
                <img class="catalog__product-image" src="${product.image}" alt="#">
                <h3 class="catalog__product-title"><a href="#product/${product.id}" >${product.title}</a></h3>
                <div class="catalog__product-price">$${product.price}</div>
            `;

            btnAdd.addEventListener('click', () => {
                import('./Cart.js')
                .then(module => {
                   if(module.addCart(product.id)) btnAdd.innerHTML = 'Added';
                })
            })

            productElem.append(btnAdd);
            catalogElem.append(productElem);
        });
    }
    
    this.elem.innerHTML = `<h1 class="catalog__title title">Catalog</h1>`;
    const catalogElem = document.createElement('div');
    catalogElem.classList.add('catalog')
    this.elem.append(catalogElem)
    render();
} 

const obj = new Catalog();

const elem = obj.elem;
const title = obj.title;

export default elem;
export {title};