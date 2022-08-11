<template>
  <div>
    <Title><p>最好的</p></Title>
    <Tabitem @tabItem="getTab"></Tabitem>
    <Selects></Selects>
    <Render :getmsg="msg"></Render>
  </div>
</template>

<script>
import Title from '@/components/common/title/Title.vue';
import Tabitem from './childpoms/tabitem.vue';
import Selects from './childpoms/select.vue';
import Render from './childpoms/render.vue';
export default {
  name: 'Best',
  components: {
    Tabitem,
    Selects,
    Render,
    Title,
  },
  data() {
    return {
      msg: 'All',
    };
  },
  methods: {
    getTab(val) {
      this.msg = val;
    },
  },
};
</script>

<style>
li ul {
  list-style: none;
}
</style>
