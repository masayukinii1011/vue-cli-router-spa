//ルーティング設定用ファイルを新規作成

//使いたいファイルをimport
import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Red from './components/Red.vue';
import Blue from './components/Blue.vue';
import Green from './components/Green.vue';

Vue.use(VueRouter);

//URLの指定
const routes = [
  { path: '/', component: HelloWorld },
  { path: '/red', component: Red },
  { path: '/blue', component: Blue },
  { path: '/green', component: Green },
];

//VueRouterをインスタンス化
const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
