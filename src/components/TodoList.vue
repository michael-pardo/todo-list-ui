<template>
  <div row>
    <div class="col s4">
      <div class="index container">
        <div class="card" v-for="task in tasks" :key="task.id">
          <div class="card-content">
            <i class="material-icons delete" @click="deleteTask(task.id)">delete</i>
            <h2 class="indigo-text">
              {{task.title}}
            </h2>
            <ul class="tasks">
                <div class="module">
                  &nbsp; {{ task.id }} &nbsp;
                </div>
            </ul>
          </div>
          <span class="btn-floating btn-large halfway-fab pink">
        <router-link :to="{ name:'EditTodo',params: {todo_id: task.id}}">
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoRepository from "@/repositories/TodoRepository";

const repository = TodoRepository;
export default {
name: "TodoList",
  data () {
    return {
      tasks: []
    }
  },
  methods: {
    deleteTask(id){
      repository.delete(id)
      this.getTodos()
    },
    getTodos: async function(){
      const { data } = await repository.get();
      this.tasks = data
    }
  },
  created() {
    this.getTodos()
  }
}
</script>

<style scoped>
.index{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-top: 30px;
}
.index h2{
  font-size: 4vmin;
  text-align: center;
  margin-top: 0;
}
.index .tasks{
  margin: 10px auto;
}
.index .tasks li{
  display: inline-grid;
}
.index .delete{
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
.module{
  margin-right: 10px;
}
</style>