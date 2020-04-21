<template>
  <div class="home">
    <h3>Wertik-js tasks demo</h3>
    <ul>
      <li>Go to bazar</li>
    </ul>
    <input v-model="form.title"  placeholder="add new task" type="text" name="" id="">
    <button @click="addNew" >Add</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          title: ""
        }
      }
    },
    methods: {
      addNew() {
        if (this.form.title) {

        }
      }
    }
  }
</script>
