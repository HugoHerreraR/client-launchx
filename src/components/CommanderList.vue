<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>MissionComanders Registrados</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(missionCommander, index) in missionCommanders"
          :key="index"
          @click="setActiveCommander(missionCommander, index)"
        >
          {{ missionCommander.name }}
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if = "currentCommander">
        <h4>MissionCommander</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{currentCommander.name}}
          <br><label><strong>Username:</strong></label> {{currentCommander.username}}
          <br><label v-if="currentCommander.hasAzureCertification == true"><strong>Certificación Azure</strong> Si</label>
          <br><label v-if="currentCommander.hasAzureCertification == false"><strong>Certificación Azure</strong> No</label>
        </div>
        <router-link :to="'/missionCommander/' + currentCommander.id" class="btn btn-info">Editar</router-link>
      </div>
      <div v-else>
        <br/>
        <p>Selecciona un MissionCommander</p>
      </div>
    </div>
  </div>
</template>

<script>
import CommanderService from "../services/CommanderService";
export default {
  name: "Comander-list",
  data() {
    return {
      missionCommanders: [],
      currentCommander: null,
      currentIndex: -1
    };
  },
  methods: {
    getAllMissionCommander() {
      CommanderService.getMissionCommander()
        .then(response => {
          this.missionCommanders = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveCommander(explorer, index){
      this.currentCommander = explorer;
      this.currentIndex = explorer? index : -1;
    }
  },
  mounted() {
    this.getAllMissionCommander();
  },
};
</script>
