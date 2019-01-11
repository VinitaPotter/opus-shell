<template>
    <div class="navbar">
        <button @click="logout">
            <a href ="/login">Log Out </a>
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        logout() {
            firebase.signOut(); 
        }
    }

}
</script>

<style scoped lang="scss">
@import "src/assets/variables.scss";

button {
        all: unset;
        display: inline;
        background-color: $accent-color;
        padding: .5rem .8rem;
        border-radius: 25px;;
        border:0;
        font-size:1rem;
        box-shadow: -2px 2px $secondary-color;
        cursor:pointer;
        text-align: center;
        a {
            text-decoration:none;
            color: $accent-color-2;
        }
    }
</style>
