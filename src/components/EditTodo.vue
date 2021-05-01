<template>
  <div v-if="task" class="edit-todo container">
    <h2>Edita el Todo de {{task.name}}</h2>
    <form class="" @submit.prevent="editTask()">
      <div class="field title">
        <label for="title">Tarea</label>
        <input type="text" name="title" v-model="task.name">
      </div>
      <div>
        <label for="todo">Descripción:</label>
        <input type="text" name="todo" v-model="task.description">
      </div>
      <div class="field center-align">
        <p v-if="feedback">{{feedback}}</p>
        <button class="btn pink">Actualiza el ToDo</button>
      </div>
    </form>
  </div>
</template>

<script>
import TodoRepository from "@/repositories/TodoRepository";
const repository = TodoRepository;
    export default {
        name: "EditTodo",
      data(){
          return{
            task: null,
            feedback: null,
          }
      },
      created() {

        console.log(this.$route.params.todo_id)
        repository.getTodo(this.$route.params.todo_id)
            .then(response => {
              //action
              console.log(response)
              this.task = response.data
            }).catch(() => {
              this.$router.push({name:'TodoList'});
            });

      },
      methods: {
        editTask(){
          if (this.task.name){
            this.feedback = null;
            repository.edit(this.task).then(response => {
              //action
              alert(`${response.data.name} actualizado`)
              this.$router.push({name:'TodoList'});
            }).catch(() => {
              this.$router.push({name:'TodoList'});
            });

          } else {
            this.feedback = "Deberías ingresar alguna tarea"
          }
        },
      }
    }

</script>


<style scoped>
  .edit-todo{
    margin-top: 20px;
    padding: 10px;
    max-width: 500px;
  }
  .edit-todo h2{
    font-size: 2em;
    margin: 20px;
  }
  .edit-todo .field{
    margin: 20px auto;
    position: relative;
  }

</style>
