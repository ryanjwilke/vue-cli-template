import { createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

export const localVue = createLocalVue()
localVue.use(VueRouter)

export const router = new VueRouter()
