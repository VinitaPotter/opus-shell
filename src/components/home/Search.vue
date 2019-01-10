<template>
  <div class="search">
      <input v-model="query" type="text" id="search" placeholder="Find a book">
      <span><ion-icon v-on:click="showBooks" name="search"></ion-icon></span>
      <div class="searchResult"  >
        <p v-for="items in booksList" :key="items.id"><img :src="items.volumeInfo.imageLinks.thumbnail"> {{ items.volumeInfo.title}} </p>
        
      </div>
  </div>

</template>

<script>
export default {
  name: 'Search',
  data(){
    return {
      query: "",
      booksList: {}
    }
  },
  methods: {
    showBooks: function() {
      fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.query)
      .then(response => response.json())
    .then(jsondata => this.booksList = jsondata.items)
    .catch(function(err) {
        console.log(err)
    });
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/variables.scss";

@mixin font {
  font-family: $main-font;
  font-size: 2rem;
}

.search{
  text-align: center;
  border-bottom: 2px solid $accent-color-2;
}

#search{
  margin: 0 auto;
  height: 45px;
  padding: 0 20px;
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: inherit;
  @include font;
  &::focus {
    border: none;
    transition: 0.35s ease;
    color: #008ABF;
  }
}

ion-icon {
  @include font;
  .icon-inner {
    width: 0;
  }
}

.searchResult {
  position: absolute;
  width: 95vw;
  background-color: $accent-color;
  p{
    font-family: $title-font;
    font-size: 1.5rem;
    line-height: 2.7rem;
    border-bottom: 1px solid #494949;
    img {
      display: inline-block;
      max-height: 30px;
      padding-right: 20px;
      padding-top: 10px
    }
  }
  
}

</style>
