<template>
    <div class="clearAllContainer">
        <span class="clearAllBtn pointer" @click="allClearTodo">Clear All</span>
    </div>
</template>

<script>
export default{
    methods: {
        allClearTodo(){
            this.$emit('childRemoveAllTodo');
        }
    }
}
</script>

<style scoped>
    .clearAllContainer{
        width: 8.5rem; height: 50px; line-height: 50px; background-color: white; border-radius: 5px; margin: 0 auto;
    }
    .clearAllBtn{ color: #e20404; display: block;}
    .pointer{ cursor: pointer;}
</style>