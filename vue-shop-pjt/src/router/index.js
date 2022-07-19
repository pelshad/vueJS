import { createRouter, createWebHistory } from 'vue-router';
<<<<<<< HEAD
=======
import KakaoLogin from '../views/KakaoLogin';
>>>>>>> 082fbdad9ba574456689a2b7fa13163662a2a2ae
import ProductList from '../views/ProductList'
import ProductCreate from '../views/ProductCreate'
import ProductUpdate from '../views/ProductUpdate'
import ProductDetail from '../views/ProductDetail'
import SalesList from '../views/SalesList'
import ImageInsert from '../views/ImageInsert'
<<<<<<< HEAD
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
=======

const routes = [  
  {
    path: '/kakaologin',
    name: 'kakaologin',    
    component: KakaoLogin
  },
  {
>>>>>>> 082fbdad9ba574456689a2b7fa13163662a2a2ae
    path: '/',
    name: 'Home',    
    component: ProductList
  },
  {
    path: '/Create',
    name: 'ProductCreate',    
<<<<<<< HEAD
    component: ProductCreate,
    beforeEnter: requireAuth()
  },
=======
    component: ProductCreate
  },,
>>>>>>> 082fbdad9ba574456689a2b7fa13163662a2a2ae
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
<<<<<<< HEAD
    component: ImageInsert,
    beforeEnter: requireAuth()
  },

=======
    component: ImageInsert
  }
>>>>>>> 082fbdad9ba574456689a2b7fa13163662a2a2ae
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
