<template>
  <div class="read">
    <h2>Read</h2>
    <div class="books">
        <div class ="bookInfo">
        <img :src="image" alt="Book Cover">
        <p>{{ title }}</p>
      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ReadList',
  computed: mapState({
    title: state => state.bookDetails.title,
    image: state => state.bookDetails.image,
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
