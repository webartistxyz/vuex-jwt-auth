<template>
<div></div>

</template>

<script>
    // import store from '../store'
    export default {
        name: 'logout-template',
        mounted () {
            localStorage.removeItem('token')
            // store.commit('logoutUser')
            this.$router.push({ name: 'login' })
        }
    }
</script>