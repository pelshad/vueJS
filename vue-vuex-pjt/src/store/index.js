import { createStore } from 'vuex';


export default createStore({
  state() {
    //Vuex에서는 직접적인 state의 변경을 허용X
    //mutations의 동기(Sync)를 통해 변경사항을 추적
    return {
      count: 0,
      cart:[
        {
          product_id: 1,
          product_name: "아이폰 거치대",
          category:"A"
        }
      ]
    };
  },

  getters: {//반드시 return 필요.
    cartCount: (state) => {
      return state.cart.length;
    }
  },
  mutations: {
    increment(state){
      state.count++;
    },
    setCount(state, val){
      state.count = val;
    }
  },
  actions: {
    
  },
  modules: {
  },
});
