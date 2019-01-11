<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "src/assets/variables.scss";

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: $main-font;
  font-size: 62.5%;
  margin: 2rem;
  background-color: $primary-color;
}

@media only screen and (max-width: 500px) {
    body {
      margin: .2rem;
    }
  }

</style>
