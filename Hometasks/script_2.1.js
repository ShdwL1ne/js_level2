class Basket {
    constructor() {
        this.goods = [];
    }
    getSum() { }
    clearAll() { }
}

class BasketItem {
    constructor(title, price) {
        this.title = title;
        this.price = this.price;
    }
    addItem() { }
    removeItem() { }
}

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="main__goods-item"><div class="main__goods-image"></div><h3 class="main__goods-item-title">${this.title}</h3><p class="main__goods-item-price">${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
            { title: 'T-shirt', price: 200 }
        ];
    }
    getSum() {
        let sum = 0;
        this.goods.forEach(good => {
            sum += good.price;
        });
        console.log('суммарная стоимость всех товаров = ' + sum + '₽');
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.main__goods-list').innerHTML = listHtml;
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.getSum();