<template>
    <img class="imgsize" v-bind:src="imgSrc">
    <!--v-bind = : -->
</template>

<script>
export default{
    props:{
        imgSrc: String,
    }
}
</script>

<style scoped> /*scoped : 해당 vue에서만 스타일을 적용*/
    .imgsize{ height : 200px;} 
</style>