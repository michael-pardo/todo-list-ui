<template>
  <div class="login container">
    <form @submit.prevent="login" class="card-panel">
      <div class="card-content center-align">
        <h2 class="center deep-purple--text">Login</h2>
        <div class="field">
          <label for="email">Correo</label>
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
              console.log(data)
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
