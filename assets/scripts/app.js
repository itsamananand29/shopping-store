class Product{
    constructor(name,imageUrl,price,description){
        this.name = name;
        this.imageUrl = imageUrl; 
        this.price = price;
        this.description = description;
    }
}
class ElementAttributes{
    constructor(attr,val){
        this.attr= attr;
        this.val=val;
    }
}
class Component{
    constructor(hookId){
        this.hookId = hookId;
    }
    createRootElement(tag,classNames,...attributes){
        const rootEl = document.createElement(tag);
        if(classNames){
            $(rootEl).addClass(classNames);
        }
        if(attributes && attributes.length>0){
            attributes.forEach(a=>{
                $(rootEl).attr(a.attr,a.val);
            })
        }
        $(this.hookId).append(rootEl);
        return rootEl;
    }
}
class ProductItem extends Component{
    constructor(prod,hookId){
        super(hookId);
        this.prod = prod;
    }
    addToCart(prod){
        App.addProductToCart(prod);
    }
    render(){
        const prodEl = this.createRootElement('li','product-item');
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
        const addToCart = $(prodEl).find('button');
        addToCart.click(()=>this.addToCart(this.prod));
    }
}
class ProductsList extends Component{
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
    constructor(hookId){
        super(hookId);
    }
    render(){
        const prodList = this.createRootElement('ul','product-list',new ElementAttributes('id','product-list'));
        this.products.forEach(prod=>{
            const productItem = new ProductItem(prod,'#product-list'); 
            $(prodList).append(productItem.render());
        });
    }
}
class ShoppingCart extends Component{
    items =[];
    constructor(hookId){
        super(hookId);
    }
    totalAmount(){
        const sum = this.items.reduce((a,b)=>(+a + +b.price),0);
        return sum;
    }
    addProduct(product){
        this.items.push(product);
        $(this.totalOutput).html(`<h2>Total: \$${this.totalAmount().toFixed(2)}</h2>`);                  
    }
    render(){
        const cart = this.createRootElement('div','cart');
        $(cart).html(
            `
            <h2>Total: \$${0}</h2>
            <button>Order Now</button>    
            `
        );
        this.totalOutput = $(cart).find('h2');
    }
}
class Shop extends Component{
    render(){
    this.cart = new ShoppingCart('#app');
    this.productsList = new ProductsList('#app');
    this.cart.render();   
    this.productsList.render();
    }
    
}
class App{
    static init(){
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
    }
    static addProductToCart(product){
        this.cart.addProduct(product); 
    }
}
App.init();
