<template>
  <div class="read">
    <h2>Read</h2>
    <div class="books">
        <div class ="bookInfo">
        <img src="../../img/dummy.jpg" alt="Book Cover">
        <p>Not mentioned</p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ReadList',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "src/assets/variables.scss";
@import "src/assets/bookInfo.scss";


.read {
  @include bookInfo;
  
}

</style>
