<template>
  <div id="app">

    <!--URLへのリンク生成-->
    <router-link to="/red">
      Red
    </router-link>
    <router-link to="/blue">
      Blue
    </router-link>
    <router-link to="/green">
      Green
    </router-link>
    <router-link to="/">
      Top
    </router-link>

    <!--遷移時にトランジションさせる-->
    <transition appear mode="out-in">
      <!--URLにアクセスすると下記にコンポーネントの中身を表示-->
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
//Appコンポーネントの中で使いたいコンポーネントをimport
import HelloWorld from './components/HelloWorld.vue'
import Red from './components/Red.vue';
import Blue from './components/Blue.vue';
import Green from './components/Green.vue';

export default {
  name: 'app',
  components: {
    //Appコンポーネントの中で使いたいコンポーネントを登録
    HelloWorld,
    Red,
    Blue,
    Green
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  margin-right:16px;
  font-size:24px;
}
/*トランジション用スタイル*/
.v-enter-active, .v-leave-active {
  transition: opacity .2s ease-out, transform .3s ease-out;
}
.v-enter {
  opacity: 0;
  transform: translateY(200px);
}
.v-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.v-leave {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-to {
  opacity: 0;
}
</style>
