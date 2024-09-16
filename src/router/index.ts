import { createMemoryHistory, createRouter } from 'vue-router'

import AlgorithmTestView from '../views/AlgorithmTest.vue'
import VueTestView from '../views/VueTest.vue'

const routes = [
  { path: '/algorithm-test', component: AlgorithmTestView },
  { path: '/vue-test', component: VueTestView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;