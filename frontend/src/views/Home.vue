<template>
  <div class="home" style="width: 300px;margin: auto;">
    <br />
    <form @submit.prevent="createTask">
      <h4>Add another task</h4>
      <input class="form-control" type="text" v-model="form.title" name="" placeholder="Add another task" id="" />
      <button type="submit" class="btn btn-success">Create</button>
    </form>
    <br />
    <ul class="list-group">
      <li v-for="i in taskList" class="list-group-item">
        <b v-if="!i.is_completed">{{ i.title }}</b>
        <del v-else
          ><b>{{ i.title }}</b></del
        >
        <div>
          <button @click="completeTask(i.id, i.is_completed)" class="btn btn-info btn-sm">Mark Incomplete</button>
          <button @click="deleteTask(i.id)" class="btn btn-danger btn-sm">Delete Task</button>
        </div>
      </li>
    </ul>
    <div v-if="taskList.length == 0">
      <div class="alert alert-info">
        No tasks
      </div>
    </div>
    <br />
  </div>
</template>

<script>
// @ is an alias to /src
import createTask from "./../graphql/createTask";
import listTask from "./../graphql/listTask";
import deleteTask from "./../graphql/deleteTask";
import completeTask from "./../graphql/completeTask";
import gql from "graphql-tag";

export default {
  name: "Home",
  data() {
    return {
      form: {
        title: "",
      },
      listTaskResponse: null,
    };
  },
  mounted() {
    this.fetchTasks();
  },
  computed: {
    taskList() {
      return this.listTaskResponse ? this.listTaskResponse.list : [];
    },
  },
  methods: {
    completeTask(id, state) {
      this.$apollo
        .mutate({
          mutation: gql`
            ${completeTask}
          `,
          variables: {
            id: id,
            is_completed: state === true ? 0 : 1,
          },
        })
        .then(() => {
          this.fetchTasks();
        });
    },
    fetchTasks() {
      this.$apollo
        .query({
          fetchPolicy: "no-cache",
          query: gql`
            ${listTask}
          `,
        })
        .then((e) => {
          this.listTaskResponse = e.data.listTask;
        });
    },
    deleteTask(id) {
      this.$apollo
        .mutate({
          mutation: gql`
            ${deleteTask}
          `,
          variables: {
            id: id,
          },
        })
        .then(() => {
          this.fetchTasks();
        });
    },
    createTask() {
      if (this.form.title) {
        this.$apollo
          .mutate({
            mutation: gql`
              ${createTask}
            `,
            variables: {
              input: {
                title: this.form.title,
                is_completed: 0,
              },
            },
          })
          .then((e) => {
            this.form.title = "";
            this.listTaskResponse.list = [e.data.createTask, ...this.listTaskResponse.list];
          });
      }
    },
  },
};
</script>
