<template>
  <div class="navbar">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-wrapper">
        <router-link :to="{name: 'Index'}">
          <a class="brand-logo"><i class="material-icons"></i>ToDo</a>
        </router-link>

        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li>
            <router-link :to="{name: 'TodoList'}">
              <a href="sass.html">Mis ToDo</a>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'AddTodo'}">
              <a href="sass.html">Agregar</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li>
        <router-link :to="{name: 'TodoList'}">
          <a href="sass.html">Mis ToDo</a>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'AddTodo'}">
          <a href="sass.html">Agregar</a>
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
    export default {
        name: "Navbar",
      data(){
          return{

          }
      }
    }
</script>

<style scoped>


</style>
