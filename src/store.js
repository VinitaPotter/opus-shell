import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookDetails: {
      type: 'showBook', 
        title: "",
        id: "",
        image: "",
        authors: [],
        publisher: "",
        pageCount: 0,
        categories: [],
        description: ""
    },
    myBooks: [],
    wishList: [ 
    {title: `harry potter and the sorcerer's stone`, image: `https://ewedit.files.wordpress.com/2016/09/hpsorcstone.jpg?w=405`},
    {title: `Madness is Better Than Defeat`, image: `https://s26162.pcdn.co/wp-content/uploads/2018/12/91yOw4ZHA3L.jpg`},
    {title: `Frolic of the Beasts`, image: `https://s26162.pcdn.co/wp-content/uploads/2018/12/1.jpg`}]
    
  },
  mutations: {
    SHOW_BOOK (state, payload) {
      state.bookDetails.title = payload.title;  
      state.bookDetails.id = payload.id;
      state.bookDetails.image = payload.image;   
      state.bookDetails.authors = payload.authors;  
      state.bookDetails.publisher = payload.publisher;  
      state.bookDetails.pageCount = payload.pageCount; 
      state.bookDetails.categories = payload.categories;  
      state.bookDetails.description = payload.description
    },
    GO_BACK (state) {
      state.bookDetails.id = "";
    },

    WISH_LIST (state, payload) {
      state.wishList.push(payload.book)
    },

    READ_LIST (state, payload) {
      state.myBooks.push(payload.book)
    },

  },
  actions: {
    showBook (context, payload) {
      context.commit('SHOW_BOOK', payload)
    },
    goback (context) {
      context.commit('GO_BACK')
    },
    wishList (context, payload) {
      context.commit('WISH_LIST', payload)
    },

    readList  (context, payload) {
      context.commit('READ_LIST', payload)
    },
   
    
  }
})
