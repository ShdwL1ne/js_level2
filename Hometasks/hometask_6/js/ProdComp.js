Vue.component('products', {
    props: ['products', 'img'],
    template: `<div class="main__goods-list">
            <product 
            v-for="product of products" 
            :key="product.id_product"
            :img="img"
            :product="product"></product>
        </div>`
});

Vue.component('product', {
    props: ['product', 'img'],
    template: `<div class="main__goods-item" >
                <img :src="img" alt="Some img" class="main__goods-image">
                <div class="desc">
                    <h3 class="main__goods-item-product_name">{{ product.product_name }}</h3>
                    <p class="main__goods-item-price">{{ product.price }} $</p>
                    <button class="main__button" @click="$parent.$emit('add-product', product)">Купить</button>
                </div>
            </div>`
})