<template>
    <div class="add-container container">
      <h2 class="center-align indigo-text">Agrega una tarea</h2>
      <form class="" @submit.prevent="addTodo()">
        <div class="field task">
          <label for="task">Tarea</label>
          <label>
            <input type="text" name="task" v-model="task">
          </label>
        </div>
        <div class="field add-todo">
          <label for="add-todo">Descripción</label>
          <label>
            <input type="text" name="add-todo" v-model="description">
          </label>
        </div>
        <div class="field center-align">
          <p v-if="feedback">{{feedback}}</p>
          <button class="btn pink">AGREGA LA TAREA</button>
        </div>
      </form>
    </div>
</template>

<script>
  import slugify from 'slugify'
  import TodoRepository from "@/repositories/TodoRepository";

  const repository = TodoRepository;
    export default {
        name: "AddTodo",
      data() {
          return {
            task: null,
            description: null,
            feedback: null,
            slug: null,
          }
      },
      methods:{
        addTodo(){
          if (this.task){
            this.feedback = null;
            //create a slug
            this.slug = slugify(this.task, {
              replacement: '-',
              remove: /[$*_+.()'"!-:@]/g,
              lower: true,
            });
            const {data} = repository.add(this.task, this.description)
            if (data.detail){
              localStorage.removeItem("token")
              this.$router.push({name:'Index'});
            }else {
              this.$router.push({name:'TodoList'});
            }

          } else {
            this.feedback = "Deberías ingresar una tarea"
          }
        },
      },
    }
</script>

<style scoped>
  .add-container{
    margin-top: 20px;
    padding: 10px;
    max-width: 500px;
  }
  .add-container h2{
    font-size: 2em;
    margin: 20px;
  }
  .add-container .field{
    margin: 20px auto;
    position: relative;
  }

</style>
