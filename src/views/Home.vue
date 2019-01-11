<template>
  <div class="home">
    <navbar></navbar>
    <search></search>  
    <wish-list></wish-list>
    <read-list></read-list>
  </div>
</template>

<script>
import Search from '@/components/home/Search.vue';
import WishList from '@/components/home/WishList.vue';
import ReadList from '@/components/home/ReadList.vue';
import navbar from '@/components/home/navbar.vue'

export default {
  name: 'home',
  components: {
    'navbar': navbar,
    'search' : Search,
    'wish-list' : WishList,
    'read-list' : ReadList,
  }
}
</script>
