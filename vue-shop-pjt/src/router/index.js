import { createRouter, createWebHistory } from 'vue-router';
import KakaoLogin from '../views/KakaoLogin';
import ProductList from '../views/ProductList'
import ProductCreate from '../views/ProductCreate'
import ProductUpdate from '../views/ProductUpdate'
import ProductDetail from '../views/ProductDetail'
import SalesList from '../views/SalesList'
import ImageInsert from '../views/ImageInsert'

const routes = [  
  {
    path: '/kakaologin',
    name: 'kakaologin',    
    component: KakaoLogin
  },
  {
    path: '/',
    name: 'Home',    
    component: ProductList
  },
  {
    path: '/Create',
    name: 'ProductCreate',    
    component: ProductCreate
  },,
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
    component: ImageInsert
  }
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
