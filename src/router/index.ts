import { createRouter, createWebHistory } from 'vue-router'
import ListaTransferencias from '../views/ListaTransferencias.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'transferencias',
      component: ListaTransferencias
    },
  ]
})

export default router
