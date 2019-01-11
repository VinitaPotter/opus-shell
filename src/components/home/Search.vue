
<template>
  <div class="search">
      <div v-if="!id" >
        <input v-model="query" type="text" id="search" placeholder="Find a book">
          <span><ion-icon v-on:click="showBooks" name="search"></ion-icon></span>
          <div class="searchResult" >
            <div class="resultNames">
          <p  v-for="items in booksList" :key="items.id" @click="showDetail(items)">
          <img :src="items.volumeInfo.imageLinks.thumbnail"> 
          {{ items.volumeInfo.title}} 
        </p>
         </div>
      </div>
        
      </div>
      <div v-else>
        <selected-book-details></selected-book-details>
      </div>
  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex'
import bookInfo from '@/components/home/bookInfo.vue'
export default {
  name: 'Search',
  data(){
    return {
      query: "",
      booksList: {},
      selected: {},
    }
  },
  methods: {
    showBooks: function() {
      fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.query)
      .then(response => response.json())
    .then(jsondata => {
      this.booksList = jsondata.items
    })
    .catch(function(err){
      console.log(err)
      });
    },
    showDetail: function(item){
      this.selected= item;
      this.query="";
      this.booksList = {};
      this.$store.dispatch({
        type: 'showBook', 
        title: this.selected.volumeInfo.title,
        id: this.selected.id,
        image: this.selected.volumeInfo.imageLinks.smallThumbnail,
        authors: this.selected.volumeInfo.authors,
        publisher: this.selected.volumeInfo.publisher,
        pageCount: this.selected.volumeInfo.pageCount,
        categories: this.selected.volumeInfo.categories,
        description: this.selected.volumeInfo.description
      })
    }
  },
  computed: mapState({
    id: state => state.bookDetails.id,
  }),

  components: {
    'selected-book-details': bookInfo
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
  border-bottom: 2px solid $accent-color;
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
  &:focus {
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
  background-color: rgba($accent-color, .8);
  .resultNames {
    margin-left: 1rem;
  }
  p{
    font-size: 1.5rem;
    line-height: 2.7rem;
    border-bottom: 1px solid $secondary-color;
    text-align: left;
    img {
      display: inline-block;
      max-height: 30px;
      padding-right: 20px;
      padding-top: 10px
    }
  }
  
}

@media only screen and (max-width: 400px) {
    #search {
      max-width: 100vw;
      input {
        max-width: 80%;
        text-align: left;
      };
    }
  }

  @media only screen and (min-width: 500px) {
    .searchResult {
      min-width: 95vw;
    .resultNames {
    margin-left: 10rem;
  }
  }
  }

</style>
