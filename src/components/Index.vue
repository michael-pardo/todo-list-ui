<template>
  <div class="hello">
    <header class="white-text valign-wrapper">
      <div style="position: relative" class="container">
        <h1>
          Nueva App
        </h1>
        <h3 class="grey-text">
          Contamos con 15% de la poblacion total
        </h3>
      </div>
    </header>

  </div>
</template>

<script>
import Repository from "../repositories/RepositoryFactory";
const IndexRepository = Repository.get("index");
export default {
  name: 'Index',
  props: {
    msg: String
  },
  created() {
    this.getIndex()
  },
  methods:{
    getIndex: async function(){
      const { data } = await IndexRepository.get()
      console.log('lolol ',data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  height: 60em;
  background: url("https://picsum.photos/id/1033/1600/900");
  background-size: cover;
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

p {
  max-width: 35em;
}

@media screen and (max-width: 600px){
  header{
    height: 30em;
  }
}

</style>
