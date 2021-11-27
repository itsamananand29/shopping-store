const productsList ={
    products:[
        {
            id:0,
            name:'Pillows',
            imageUrl:'https://th.bing.com/th/id/OIP.DnCGtHj_-3GzszUOoz680AHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            price:700,
            description:'A very comfortable pillow'
        },
        {
            id:1,
            name:'Sheets',
            imageUrl:'https://th.bing.com/th/id/OIP.s4nKcEB_towFosNXclUQtgHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7',
            price:900,
            description:'Classy looking bed sheets'
        }
    ],
    render:function(){
        const renderHook = $('#app');
        const prodList = document.createElement('ul');
        $(prodList).addClass('product-list');
        productsList.products.forEach(prod=>{
            const prodEl = document.createElement('li');
            $(prodEl).addClass('product-item');
            $(prodEl).html(`
            <div>
                <img src =${prod.imageUrl} alt=${prod.name}/>
                <div class= "product-item__content">
                    <h2>${prod.name}</h2>
                    <h3>\$${prod.price}</h3>
                    <p>${prod.description}</p>
                    <button>Add to Cart</button>  
                </div>
                 
            </div>`);
            $(prodList).append($(prodEl));
        });
        console.log(prodList);
        renderHook.append(prodList);
    }
};
productsList.render()