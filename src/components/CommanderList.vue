<template>
  <div class="list row">
    <dic class="col-md">
      <h4>MissionComanders Registrados</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(missionCommander, index) in missionCommanders"
          :key="index"
        >
          {{ missionCommander.name }}
        </li>
      </ul>
    </dic>
  </div>
</template>

<script>
import CommanderService from "../services/CommanderService";
export default {
  name: "Comander-list",
  data() {
    return {
      missionCommanders: [],
    };
  },
  methods: {
    getAllMissionCommander() {
      CommanderService.getMissionCommander()
        .then((response) => {
          this.missionCommanders = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getAllMissionCommander();
  },
};
</script>
