<template>
  <div class="bookInfo">
      <div>
          <img :src="selected.volumeInfo.imageLinks? selected.volumeInfo.imageLinks.thumbnail : 'https://www.lifewire.com/thmb/qLv10Pgd30kCy7OxXacwOWKxZ8M=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shutterstock_325494917-5a68d8403418c600190a3e1f.jpg'">
      </div>
      <div class="container">
          <p id="title">{{ selected.volumeInfo.title }}</p>
          <p>By {{ selected.volumeInfo.authors? selected.volumeInfo.authors[0] : "Not Found" }}</p>
          <p>Publisher: {{ selected.volumeInfo.publisher ? selected.volumeInfo.publisher : "Not Found" }}</p>
          <p>Page Count: {{ selected.volumeInfo.pageCount ? selected.volumeInfo.pageCount :  "Not Found" }}</p>
          <p>Price: INR {{ selected.saleInfo.retailPrice ? selected.saleInfo.retailPrice.amount : "Not Found" }}</p>
          <p id="description">{{ selected.volumeInfo.description ? selected.volumeInfo.description : "Description Not Found"}}</p>
          <button @click="goBack"><ion-icon name="arrow-round-back"></ion-icon></button>
          <button>Add to wishlist</button>
          <button @click="addBook">Add to Read list</button>
      </div>
      
  </div>

</template>

<script>

export default {
  name: 'bookInfo',
  props: ['selected'],
  methods: {
      goBack: function() {
          this.selected.id="";
      }
  }
  
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
        button {
            all: unset;
            border: none;
            background-color: $accent-color-2;
            display: inline-block;
            text-decoration: none;
            user-select: none;
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
      margin: 3rem;
  }
}

@media only screen and (max-width: 460px) {
  img {
      visibility: hidden;
  }
}
</style>
