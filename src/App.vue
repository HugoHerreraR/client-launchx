<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light bg-white">
      <router-link to="/" class="navbar-brand">LaunchX</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item mx-2">
          <select
            v-model="selected"
            class="form-control"
            v-on:change="changeRoute"
          >
            <option value="">Explorers</option>
            <option>Mission Commander</option>
          </select>
        </li>
        <li class="nav-item mx-2" v-show="show1">
          <router-link to="/add" class="nav-link">Agregar Explorer</router-link>
        </li>
        <li class="nav-item mx-2" v-show="show2">
          <router-link to="/add" class="nav-link">Agregar MissionCommander</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      selected: "",
      show1: true,
      show2: false,
    };
  },
  methods: {
    changeRoute() {
      if (this.selected === "") {
        this.$router.push({ path: "/explorers" });

        this.show1 = true
        this.show2 = false

      } else if (this.selected === "Mission Commander") {
        this.$router.push({ path: "/missionCommander" });
        
        this.show1 = false
        this.show2 = true
      }
    },
  },
};
</script>
