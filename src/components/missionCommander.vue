<template>
    <h4>MissionCommander</h4>
    <div v-if="missionCommander" class="edit-form">
        <form>
            <div class="form-group">
                <label for="title">Nombre</label>
                <input class="form-control" type="text" id="title" disabled v-model="missionCommander.name">
            </div>
            <div class="form-group">
                <label for="title">Username</label>
                <input class="form-control" type="text" id="title" disabled v-model="missionCommander.username">
            </div>
            <div class="form-group">
                <label for="title">mainStack</label>
                <input type="text" class="form-control" id="title" disabled v-model="missionCommander.mainStack">
            </div>
            <div class="form-group">
                <label for="titile">Inscripción Actual</label>
                <input type="text" class="form-control" v-model="missionCommander.currentEnrollment">
            </div>
            <div class="form-group">
                <label for="title">Certificación Azure</label>
                <input class="form-control" type="text" id="title" v-model="missionCommander.hasAzureCertification">
            </div> 
        </form>
        <button class="btn btn-danger mr-2" @click="deleteCommander">Eliminar</button>
        <button class="btn btn-info mr-2" @click="UpdateCommander">Actualizar</button>
        <p>{{message}}</p>
    </div>
    <div v-else>
        <br />
        <p>Selecciona un missionExplorer</p> 
    </div>
</template>

<script>
import CommanderService from "../services/CommanderService"
export default {
    data() {
        return {
            missionCommander: [],
            message: '', 
        }
    },
    methods: {
        getCommander(id){
            CommanderService.get(id)
            .then(response => {
                this.missionCommander = response.data;
            })
            .catch(e => {
                console.log(e);
            });
        },
        deleteCommander(){

        },
        UpdateCommander(){
            var val = this.missionCommander.currentEnrollment.toString()
            if(val.toLowerCase() === 'false'){
                this.missionCommander.currentEnrollment = false
            }else if(val.toLowerCase() === "true"){
               this.missionCommander.currentEnrollment = true
            }

            var val1 = this.missionCommander.hasAzureCertification.toString()
            console.log(typeof val1);
            if(val1.toLowerCase() === 'false'){
                this.missionCommander.hasAzureCertification = false
            }else if(val1.toLowerCase() === "true"){
               this.missionCommander.hasAzureCertification = true
            }

            CommanderService.update(this.missionCommander.id, this.missionCommander)
            .then(response => {
                console.log(response.data);
                this.message = 'Se actualizó correctamnete'
            })
            .catch(e => {
                console.log(e);
            }); 
        }
    },
    mounted() {
        this.message = '';
        this.getCommander(this.$route.params.id);
    },
}
</script>
