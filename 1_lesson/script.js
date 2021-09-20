const template = [
    { title: 'Test_1', price: 200 },
    { title: 'Test_2', price: 400 },
    { title: 'Test_3', price: 600 },
    { title: 'Test_4', price: 800 },
    { title: 'Test_5' }
];

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'T-shirt', price: 200 },
];

const renderGoodsItem = (title, price = "Товара нет в наличии") => { //ввёл это значение для отсутсвия товара
    return `<div class="main__goods-item"><div class="main__goods-image"></div><h3 class="main__goods-item_title">${title}</h3><p class="main__goods-item_price">${price}</p></div>`;
};

const renderGoodsList = (list = template) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price)); //запятые выводилась из-за метода .map, который создаёт новый массив, в котором элементы находтся через запятую
    document.querySelector('.main__goods-list').innerHTML = goodsList.join("");
}

renderGoodsList(goods);