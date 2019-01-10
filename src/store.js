import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookDetails: {
      title: "Harry Potter", 
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/220px-J._K._Rowling_2010.jpg"
    },
    myBooks: [],
    wishList: []
    
  },
  mutations: {
    

  },
  actions: {
   
    
  }
})
