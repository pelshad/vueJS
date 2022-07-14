<template>
<div id="app">
  <todoHeader></todoHeader>
  <todo-input @childAddTodo="addTodo" @OnAlertModal="showModal" ></todo-input> 
  <!-- @childAddTodo에 이벤트가 생기면 addTodo에 이어지게함-->
  <todoList v-bind:propsItems="todoItems" @childRemoveTodo="removeTodo" @sendModModalOn="modModalOn"></todoList>
  <todo-footer @childRemoveAllTodo="AllRemoveTodo"></todo-footer> 
</div>
<AlertModal :show="modalShow" header="Undefind" body="todoItem is not defind" @close="modalClose"></AlertModal>
<ModModal :show="modModalShow" @close="modModalClose" itodo=""></ModModal>
</template>

<script>
import todoHeader from './components/todo/todoHeader.vue';
import todoInput from './components/todo/todoInput.vue';
import todoList from './components/todo/todoList.vue';
import todoFooter from './components/todo/todoFooter.vue';
import AlertModal from './components/common/AlertModal.vue';
import ModModal from './components/common/ModModal.vue';
//import TodoDao from './dao/TodoDao.js
import axios from 'axios';
import DateUtils from './utils/DataUtil';

export default {
  name: 'App',
    //beforecreat단 data()사용 안됨
    data(){
      return{
        todoItems: [],
        /*cnt:0,*/
        modalShow: false,
        modModalShow: false
      }
    },
  methods: {
    addTodo(todoItem){
      /*localStorage.setItem(todoItem, todoItem);*/

      /*this.todoItems.push(
        {key: this.cnt++,
        value: todoItem}
      );*/
      const param = {
        'todo' : todoItem
      }
      axios.post('/todo/index', param)
      .then(res => {
        if(res.status === 200 && res.data){ //res.status === 200 서버가 통신 성공, res.status === 404 서버 통신 실패
          const item = {
            'itodo' : res.data.result,
            'todo' : todoItem,
            'created_at' : DateUtils.getTimeStamp(new Date())
          }
          this.todoItems.push(item);
        }
      })
    },
    
    removeTodo(key){
      /*const remove = confirm('해당 글을 삭제하시겠습니까?');*/
      this.todoItems.forEach((item,idx) => {
        if(item.itodo === key) {
          this.todoItems.splice(idx, 1); //해당 인덱스 1개만 삭제
          axios.delete(`/todo/index/${item.itodo}`)
          .then(res=> {
            console.log(res);
          });
        }
      })
    },
    modModalOn(key){
      this.modModalShow = !this.modModalShow;
      this.todoItems.forEach((item,idx) => {
        if(item.itodo === key) {
          this.$emit('toModal',idx);
        }
      })
    },
    modModalClose(){
      this.modModalShow = !this.modModalShow;
    },

    showModal(){
      this.modalShow = !this.modalShow;
    },

    modalClose(){
      this.modalShow = !this.modalShow;
    },
    

    AllRemoveTodo(){
      const removeAll = confirm('모든 글을 삭제하시겠습니까?');
      if(removeAll === true){
        localStorage.clear();
        this.todoItems.splice(0);
        axios.delete(`/todo/index/0`)
          .then(res=> {
            console.log(res);
          });
      }
    },

    changeValue(){
      const json = JSON.stringify(this.todoItems);
      localStorage.setItem('todoItems', json);
      localStorage.setItem('cnt', this.cnt);
    }
  },
    

  components:{
    todoHeader,
    todoInput,
    todoList,
    todoFooter,
    AlertModal,
    ModModal
    },

  watch:{//바뀔때마다 감지, 각 메소드에 changeValue()를 뺄 수 있게 되었다.
    todoItems: {
      deep: true,//deep을 주지 않으면 todoItems:[]의 안쪽 값을 watch하지 않아 반드시 줘야됨
      handler(){
      this.changeValue();
      }
    }
  },

    created(){// 컴포넌트가 실행되었을때 호출되는 메소드
              // beforecreate->created->beforemount->mounted 순으로
              // vue 라이프사이클 참고

      axios.get('/todo/index')
      .then(res => {
        if(res.status === 200 && res.data.length > 0) {
          res.data.forEach(item => {
            this.todoItems.push(item);
          });
        }
        console.log(res);
      })
/*
      const json = localStorage.getItem("todoItems");
      if(json){
        const todoItems = JSON.parse(json);
        todoItems.forEach(item => {
          this.todoItems.push(item);
        });
        const cnt = localStorage.getItem("cnt");
        this.cnt = cnt;
      }
        if(localStorage.length > 0){
            for(let i=0; i<localStorage.length; i++){
                this.todoItems.push(localStorage.key(i));
            }
        }*/
    }
  }

</script>

<style>
body { text-align: center; background-color: #F6F6F8; }
input { border-style: groove; width: 200px; }
button { border-style: groove; }
.ctnt { font-size: 1.5rem; }
.d-flex { display: flex; }
.flex-col { flex-direction: column; }
.flex-row { flex-direction: row; }
.grow_1 { flex-grow: 1; }
.shadow { box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03); }
.justify_content_evenly { justify-content: space-evenly; }
</style>
