<template>
  <div class="wishlist">
      <h2>Wish List</h2>
      <div class="container">
          <div v-for="book in books" :key="book.id" class="books">
            <div class ="bookInfo">
            <img :src="book.image" alt="Book Cover">
            <p>{{ book.title }}</p>
          </div>
      </div>
      </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'WishList',
  computed: mapState({
    books: state => state.wishList,
    
})
}
</script>
<style scoped lang="scss">
@import "src/assets/variables.scss";
@import "src/assets/bookInfo.scss";

.wishlist {
  @include bookInfo;
}
</style>
