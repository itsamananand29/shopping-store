class Product{
    constructor(name,imageUrl,price,description){
        this.name = name;
        this.imageUrl = imageUrl; 
        this.price = price;
        this.description = description;
    }
}
class ProductItem{
    constructor(prod){
        this.prod = prod;
    }
    render(){
        const prodEl = document.createElement('li');
        $(prodEl).addClass('product-item');
        $(prodEl).html(`
        <div>
            <img src =${this.prod.imageUrl} alt=${this.prod.name}/>
            <div class= "product-item__content">
                <h2>${this.prod.name}</h2>
                <h3>\$${this.prod.price}</h3>
                <p>${this.prod.description}</p>
                <button>Add to Cart</button>  
            </div>
                
        </div>`);
        return prodEl;     
    }
}
class ProductsList{
    products=[
        new Product(
            'Pillows',
            'https://th.bing.com/th/id/OIP.DnCGtHj_-3GzszUOoz680AHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            700,
            'A very comfortable pillow'
        ),
        new Product(
            'Sheets',
            'https://th.bing.com/th/id/OIP.s4nKcEB_towFosNXclUQtgHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            900,
            'Classy looking bed sheets'
        )
    ];
    render(){
        const renderHook = $('#app');
        const prodList = document.createElement('ul');
        $(prodList).addClass('product-list');
        productsList.products.forEach(prod=>{
            const productItem = new ProductItem(prod); 
            $(prodList).append(productItem.render());
        });
        renderHook.append(prodList);
    }
}
const productsList = new ProductsList();
productsList.render()