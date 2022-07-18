<template>
    <div>
        <p>Count2 : {{count}}</p>
        <button type="button" @click="callIncrement">up</button>

    </div>
</template>

<script>
export default {
    computed:{
        count(){
            return this.$store.state.count;
        }
    },
    methods:{
        callIncrement(){
            this.$store.commit('increment');
            //p208, commit은 index.js의 mutations에 접근
        }
        
    }
}
</script>

<style>

</style>