<template>
    <div>
        <p>Count : {{count}}</p>
        <button type="button" @click="callIncrement">up</button>
        <p> 상품수 : {{cartCount}}</p>

    </div>
</template>

<script>
export default {
    computed:{
        count(){
            return this.$store.state.count;
        },
        cartCount(){
            return this.$store.getters.cartCount;
        }
    },
    methods:{
        callIncrement(){
            this.$store.commit('setCount', 200);
            //p208, commit은 index.js의 mutations에 접근
        }
        
    }
}
</script>

<style>

</style>