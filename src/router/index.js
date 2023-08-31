import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  // Admin pages
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: () => import('../views/Category/Category.vue')
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: () => import('../views/Category/AddCategory.vue')
  },
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: () => import('../views/Category/EditCategory.vue')
  },
  {
    path: '/admin/product',
    name: 'Product',
    component: () => import('../views/Product/Product.vue')
  },
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: () => import('../views/Product/AddProduct.vue')
  },
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: () => import('../views/Product/EditProduct.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
