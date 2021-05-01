<template>
  <div class="login container">
    <form @submit.prevent="login" class="card-panel">
      <div class="card-content center-align">
        <h2 class="center deep-purple--text">Login</h2>
        <div class="field">
          <label for="email">Usuario</label>
          <label>
            <input type="email" name="email" v-model="email">
          </label>
        </div>
        <div class="field">
          <label for="password">Contraseña</label>
          <label>
            <input type="password" name="password" v-model="password">
          </label>
        </div>
        <p v-if="feedback">{{feedback}}</p>
        <div class="field">
          <button class="btn deep-purple">Ingresar</button>
        </div>
        <div class="field">
          <router-link :to="{name: 'Register'}">
            <a class="">Registrarme</a>
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

import SessionRepository from "../repositories/SessionRepository";
const sessionRepository = SessionRepository;
    export default {
        name: "Login",
      data(){
          return{
            email: null,
            password: null,
            feedback: null,
          }
      },
      created(){
      },
      methods:{
          login: async function(){
            if (this.email && this.password){
              const {data} = await sessionRepository.login(this.email, this.password)
              if (data.error){
                this.feedback="Revisa el usuario y la contraseña";
              }else {
                this.$router.push({name:'TodoList'});
              }
              this.feedback="";
            } else {
              this.feedback = "Ingresa usuario y contraseña"
            }
          }
      }
    }
</script>

<style scoped>
  .login{
    max-width: 400px;
    margin-top: 60px;
  }
  .login h2{
    font-size: 2.4em;
  }
  .login .field{
    margin-bottom: 16px;
  }

</style>
