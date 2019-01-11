<template>
  <div class="bookInfo">
      <div>
          <img :src="image">
      </div>
      <div class="container">
          <p id="title">{{ title }}</p>
          <p>By {{ author ? author : "Not found" }}</p>
          <p>Publisher: {{ publisher ? publisher : "Not found"  }}</p>
          <p>Page Count: {{ pageCount ?  pageCount : "Not found"}}</p>
          <p>Category: {{ category }}</p>
          <p id="description">{{ description }}</p>
          <button @click="goBack"><ion-icon name="arrow-round-back"></ion-icon></button>
          <button @click.once="addToWishList">Add to wishlist</button>
          <button @click.once="addToReadList">Add to Read list</button>
      </div>
      
  </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'bookInfo',
  methods: {
      goBack: function() {
          this.$store.dispatch("goback")
      },

      addToWishList: function(){
          this.$store.dispatch({
              type: "wishList",
              book: {
                  title: this.$store.state.bookDetails.title,
                  image: this.$store.state.bookDetails.image,
                  id: this.$store.state.bookDetails.id
              }
          })
        },

        addToReadList: function(){
          this.$store.dispatch({
              type: "readList",
              book: {
                  title: this.$store.state.bookDetails.title,
                  image: this.$store.state.bookDetails.image
              }
          })
        }
  },
  computed: mapState({
    title: state => state.bookDetails.title,
    id: state => state.bookDetails.id,
    image: state => state.bookDetails.image,
    author: state => state.bookDetails.authors[0],
    publisher: state => state.bookDetails.publisher,
    pageCount: state => state.bookDetails.pageCount,
    category: state => state.bookDetails.categories[0],
    description: state => state.bookDetails.description
})
}
</script>

<style scoped lang="scss">
@import "src/assets/variables.scss";

.bookInfo {
    position: absolute;
    width: 95vw;
    max-height: 80vh;
    font-size: 1.5rem;
    line-height: 2.7rem;
    z-index: 3;
    background-color: $secondary-color;
    img {
        position: absolute;
        justify-content: left;
        text-align: left;
        top: 1rem;
        left: 1rem;
    }
    .container {
        padding: .5rem;
        justify-content: right;
        text-align: right;
        margin-right: .5rem;
        button {
            all: unset;
            border: none;
            background-color: $accent-color-2;
            display: inline-block;
            text-decoration: none;
            letter-spacing: 1rem;
            color: white;
            padding: 1rem 2rem;
            text-transform: uppercase;
            transition: all 0.1s ease-out;
            margin: 1rem;


            &:hover {
                background-color: $accent-color;
                color: #fff;
            }
            
            &:active {
                transform: scale(0.95);
            }
        }

        #title {
            font-weight: 700;
        }
    }
    #description {
        max-height: 16rem;
        overflow: auto;
        font-size: 1rem;
        text-align: justify;
        padding: 1rem;
    }
}

@media only screen and (max-width: 600px) {
  .container {
      p {
          text-align: left;
      }
       
  }
  img {
      visibility: hidden;
      
  }
}

</style>
