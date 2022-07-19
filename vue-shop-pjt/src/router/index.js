import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '../views/ProductList'
import ProductCreate from '../views/ProductCreate'
import ProductUpdate from '../views/ProductUpdate'
import ProductDetail from '../views/ProductDetail'
import SalesList from '../views/SalesList'
import ImageInsert from '../views/ImageInsert'
import store from '@/store';
import swal from 'sweetalert2'; //main.js 의 sweetalert2를 사용하도록

const requireAuth = () => (to, from, next) => {
  if(store.state.user.iuser === undefined){
    swal.fire('로그인을 하세요.', '', 'warning');
    return;
  }
  return next();
}

const routes = [  
  {
    path: '/',
    name: 'Home',    
    component: ProductList
  },
  {
    path: '/Create',
    name: 'ProductCreate',    
    component: ProductCreate,
    beforeEnter: requireAuth()
  },
  {
    path: '/Update',
    name: 'ProductUpdate',    
    component: ProductUpdate
  },
  {
    path: '/Detail',
    name: 'ProductDetail',    
    component: ProductDetail
  },
  {
    path: '/Sales',
    name: 'SalesList',    
    component: SalesList
  },
  {
    path: '/image_insert',
    name: 'ImageInsert',    
    component: ImageInsert,
    beforeEnter: requireAuth()
  },

  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
