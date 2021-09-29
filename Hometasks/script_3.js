const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const makeGETRequest = (url) => {
    return new Promise((resolve) => {
        let xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                resolve(JSON.parse(xhr.response));
            }
        }

        xhr.open('GET', url, true);
        xhr.send();
    })
}

class Basket {
    constructor() {
        this.goods = [];
    }
    getSum() { }
    clearAll() { }
}

class BasketItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = this.price;
    }
    addItem() { }
    removeItem() { }
}

class GoodsItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }
    render() {
        return `<div class="main__goods-item"><div class="main__goods-image"></div><h3 class="main__goods-item-product_name">${this.product_name}</h3><p class="main__goods-item-price">${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        return makeGETRequest(`${API_URL}/catalogData.json`)
    }
    getSum(goods) {
        let sum = 0;
        goods.forEach(good => {
            sum += good.price;
        });
        console.log('суммарная стоимость всех товаров на экране= ' + sum + '₽');
    }
    render(goods) {
        let listHtml = '';
        goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.main__goods-list').innerHTML = listHtml;
    }
}

const list = new GoodsList();
list.fetchGoods()
    .then((goods) => {
        list.render(goods);
    })
