<!--컴포넌트의 부모 vue-->
<template>
<!--public/index.html에 import됨-->
  <h1>헬로우</h1>
  <div>{{ hello }}, {{bye}}</div>
  <input type="text" v-model="hello"> 
  <!--vmodel: data(hello)에 바인딩 + changeHello()의 기능을 포함하고 있음-->
  <button @click="changeHello">안녕하세요 변경</button>
  <!-- v-on:click = @click -->
  <favorite-singer />
  <favorite-singer></favorite-singer>
  <favoriteSingerProps imgSrc="https://img9.yna.co.kr/photo/cms/2019/05/02/81/PCM20190502000081005_P2.jpg"></favoriteSingerProps>
</template>

<script>
import favoriteSinger from './components/favoriteSinger.vue';
import favoriteSingerProps from './components/favoriteSingerProps.vue';

export default {
  name: 'App',
  data(){
    return {
      hello:"안녕",
      bye:"잘가",
    }
  },

  methods: {
    changeHello(){
      this.hello = "안녕하세요";
    }//버튼 클릭시 hello를 전부 안녕하세요로 변경.
  },

  components: {
    favoriteSinger,
    favoriteSingerProps
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
