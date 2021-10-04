const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url, callback) {
    let xhr;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    }

    xhr.open('GET', url, true);
    xhr.send();
}

class Cart {
    constructor() {
        this.goods = [];
    }
    getSum() { }
    clearAll() { }
}

class CartItem {
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
        return `<div class="main__goods-item">
                <div class="main__goods-image"></div>
                <h3 class="main__goods-item-product_name">${this.product_name}</h3>
                <p class="main__goods-item-price">${this.price}</p>
                <button class="main__button">Добавить в корзину</button>
            </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        this.filteredGoods = [];
    }
    fetchGoods(cb) {
        makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            this.filteredGoods = JSON.parse(goods);
            cb()
        })
    }
    filterGoods(value) {
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
        this.render();
    }
    render() {
        let listHtml = '';
        this.filteredGoods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.main__goods-list').innerHTML = listHtml;
    }
}

let searchButton = document.querySelector(".header__search-button")
let searchInput = document.querySelector(".header__goods-search")

searchButton.addEventListener('click', (e) => {
    const value = searchInput.value;
    list.filterGoods(value);
});

const list = new GoodsList();
list.fetchGoods(() => {
    list.render();
});