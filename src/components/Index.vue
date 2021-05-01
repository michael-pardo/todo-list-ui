<template>
  <div class="hello">
    <header class="white-text valign-wrapper">
      <div style="position: relative" class="container">
        <h1>
          Nueva App
        </h1>
        <h3 class="grey-text">
          Contamos con {{ usersCount }} usuarios.
        </h3>
      </div>
    </header>

    <body class="white-text valign-wrapper">
      <div style="position: relative" class="container">
        <h1>
          ToDo'
        </h1>
        <h3 class="grey-text">
          Contamos con {{ tasksCount }} tareas.
        </h3>
      </div>
    </body>

  </div>
</template>

<script>
import IndexRepository from "@/repositories/IndexRepository";
const indexRepository = IndexRepository;
export default {
  name: 'Index',
  props: {
    msg: String
  },
  data(){
    return{
      usersCount: 0,
      tasksCount: 0,
      feedback: null,
    }
  },
  created() {
    this.getIndex()
    this.getTodos()
  },
  methods:{
    getIndex: async function(){
      const { data } = await indexRepository.getUsersCount()
      this.usersCount = data.count

    },
    getTodos: async function(){
      const { data } = await indexRepository.getTodosCount()
      this.tasksCount = data.count
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  height: 80em;
  background: url("https://picsum.photos/id/1033/1600/900");

  position: relative;
}
header::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  width: 100%;
  height: 100%;
  z-index: 0;
}

body{
  height: 30em;
  background: url("https://picsum.photos/id/1025/1600/900");

  position: relative;
}
body::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  width: 100%;
  height: 100%;
  z-index: 0;
}

p {
  max-width: 35em;
}

@media screen and (max-width: 1200px){
  header{
    height: 30em;
  }
}

</style>
