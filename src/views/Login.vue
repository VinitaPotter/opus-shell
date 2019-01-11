<template>
    <div class="authentication">
        <p>Login with Google</p>
        <div class="button">
            <Button @click="socialLogin">Google</Button>
        </div>
    </div>
</template>

<script>
export default {
methods: {
    socialLogin(){
        const provider = new firebase.auth.GoogleAuthProvider();
        
        firebase.auth().signInWithPopup(provider).then((result)=> {
            this.$router.replace('/');
        }).catch((err) => {
            alert('oops' +err.message)
        })
    }
}
}
</script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
.authentication {
    margin-top: 20%;
    transform: translateY(-50%);
    .button {
        width: 100%;
    }
    p {
        text-align: center;
        font-size: 2rem;
    };
    button {
        all: unset;
        display: inline;
        background:#e1e1e1;
        color:#666;
        border:0;
        width:150px;
        height:60px;
        font-size:24px;
        cursor:pointer;
        text-align: center;
        margin-left: 50%;
        margin-top: 4rem;
        transform: translateX(-50%)
    }
}
</style>
