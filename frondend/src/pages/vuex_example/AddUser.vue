<template>
  <div class="col-8 offset-2">
    <form @submit.prevent="onUserSubmit">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Enter name" v-model="name">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Enter email" v-model="email">
      </div>
      <button type="submit" class="btn btn-block btn-primary">Add</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'AddUser',
  data() {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    ...mapActions('user', ["addUsers"]),
    onUserSubmit() {
      this.addUsers({
        name: this.name,
        email: this.email
      })
    }
  }
}
</script>