Vue.component('cart', {
    props: ['cartItems', 'img', 'visibility'],
    template: `<div class="cart-block" v-show="visibility">
                <p v-if="!cartItems.length">Cart is empty</p>
                <cart-item 
                v-for="product of cartItems"  
                :key="product.id_product"
                :img="img"
                :cart-item="product"></cart-item>
            </div>`
});
Vue.component('cart-item', {
    props: ['cartItem', 'img'],
    template: `<div class="header__cart-item" >
                    <div class="product-bio">
                        <img :src="img" alt="Some image">
                        <div class="product-desc">
                            <p class="header__goods-item-product_name">{{cartItem.product_name}}</p>
                            <p class="product-quantity">Quantity: {{cartItem.quantity}}</p>
                            <p class="header__goods-item-price">$ {{cartItem.price}} each</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">{{cartItem.quantity*cartItem.price}}</p>
                        <button class="del-btn" @click="$parent.$emit('remove', cartItem)">&times;</button>
                    </div>
                </div>`
})

// EventBus
// Vuex