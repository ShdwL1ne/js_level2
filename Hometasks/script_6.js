const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

Vue.component('products', {
    props: ['products'],
    template: `<div class="products">
            <product 
            v-for="product of products" 
            :key="product.id_product"
            :product="product"></product>
        </div>`
});

Vue.component('product', {
    props: ['product'],
    template: `<div class="product-item" >
                <div class="desc">
                    <h3>{{ product.product_name }}</h3>
                    <p>{{ product.price }} $</p>
                    <button class="buy-btn" @click="$parent.$emit('add-product', product)">Купить</button>
                </div>
            </div>`
})

Vue.component('searchform', {   //searchform - название тега в ДОМ
    props: ['value'],
    template: `
        <input type="text" class="search-field" 
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)">
    `
})

let app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        showCart: false,
        userSearch: '',
        filtered: [],
        cartItems: [],
        products: [],
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error)
                })
        },
        addProduct(product) {
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result) {
                        let find = this.cartItems.find(el => el.id_product === product.id_product);
                        if (find) {
                            find.quantity++;
                        } else {
                            let prod = Object.assign({ quantity: 1 }, product);
                            this.cartItems.push(prod);
                        }
                    }
                })
        },
        remove(product) {
            this.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result) {
                        if (product.quantity > 1) {
                            product.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1);
                        }
                    }
                })
        },
        filter() {
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted() {

        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.cartItems.push(el);
                }
            });
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
        this.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    }
})