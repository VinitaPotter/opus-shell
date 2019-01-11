<template>
  <div class="read">
    <h2>Read</h2>
     <div v-for="book in books" :key="book.id" class="books">
        <div class ="bookInfo">
        <img :src="book.image" alt="Book Cover">
        <p>{{ book.title }}</p>
      </div>
  </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ReadList',
  computed: mapState({
    books: state => state.myBooks,
})
}
</script>

<style scoped lang="scss">
@import "src/assets/variables.scss";
@import "src/assets/bookInfo.scss";


.read {
  @include bookInfo;
  
}

</style>
