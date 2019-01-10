<template>
  <div class="wishlist">
      <h2>Wish List</h2>
      <div class="books">
        <div class ="bookInfo">
        <img src="../../img/dummy.jpg" alt="Book Cover">
        <p>{{ bookName }}</p>
      </div>
      <div class ="bookInfo">
        <img src="../../img/dummy.jpg" alt="Book Cover">
        <p>{{ bookName }}</p>
      </div>
      <div class ="bookInfo">
        <img src="../../img/dummy.jpg" alt="Book Cover">
        <p>{{ bookName }}</p>
      </div>
      </div>
  </div>

</template>

<script>
export default {
  name: 'WishList',
  data(){
    return {
      bookName: "Out of the box"
    }
  }
}
</script>
<style scoped lang="scss">
@import "src/assets/variables.scss";
@import "src/assets/bookInfo.scss";

.wishlist {
  @include bookInfo;
}
</style>
