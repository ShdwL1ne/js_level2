Vue.component('searchform', {   //searchform - название тега в ДОМ
    props: ['value'],
    template: `
        <input type="text" class="header__goods-search" 
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)">
    `
})