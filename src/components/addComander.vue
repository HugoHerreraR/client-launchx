<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <h3>Nuevo MissionCommmander</h3>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="commander.name"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          required
          v-model="commander.username"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="title">MainStack</label>
        <input
          type="text"
          class="form-control"
          id="mainStack"
          required
          v-model="commander.mainStack"
          name="mainStack"
        />
      </div>
      <div class="form-group">
        <label for="title">Inscripción Actual</label>
        <select v-model="selected" class="form-control" required>
          <option
            v-for="option in options"
            v-bind:value="option.value"
            :key="option.id"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="title">Certificación Azure</label>
        <select v-model="selectedCertification" class="form-control" required>
          <option
            v-for="option in options"
            v-bind:value="option.value"
            :key="option.id"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
      <button @click="save" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4>MissionComander creado exitosamente.</h4>
      <button class="btn btn-success" @click="newCommander">Add</button>
    </div>
  </div>
</template>

<script>
import CommanderService from "../services/CommanderService";
export default {
  data() {
    return {
      commander: {
        id: null,
        name: "",
        username: "",
        mainStack: "",
        currentEnrollment: false,
        hasAzureCertification: false,
      },
      submitted: false,
      selected: null,
      selectedCertification: null,
      options: [
        { value: null, text: "Seleccione una opción" },
        { value: true, text: "Si" },
        { value: false, text: "No" },
      ],
      OptionC: [
        { value: null, text: "Seleccione una opción" },
        { value: true, text: "Si" },
        { value: false, text: "No" },
      ],
    };
  },
  methods: {
    save() {
      this.commander.currentEnrollment = this.selected;
      this.commander.hasAzureCertification = this.selectedCertification;
      var data = {
        name: this.commander.name,
        username: this.commander.username,
        mainStack: this.commander.mainStack,
        currentEnrollment: this.commander.currentEnrollment,
        hasAzureCertification: this.commander.hasAzureCertification,
      };
      CommanderService.create(data)
        .then((response) => {
          this.commander.id = response.data.id;
          this.submitted = true
        })
        .catch((e) => {
          console.log(e);
        });
    },
    newCommander() {
      this.submitted = false;
      this.commander = {};
    },
  },
};
</script>
