<template>
   <v-container>
       <v-data-table :headers="headers" :items="DataItem" class="elevation-1" :search="search">
            <template v-slot:top>
                <v-toolbar flat>
                    <v-toolbar-title>Status Usuarios </v-toolbar-title>
                        <v-divider  class="mx-4" inset vertical ></v-divider>
                        <v-spacer></v-spacer>
                    </v-toolbar>
            </template>

            <template v-slot: [`item.actions`] = {item} >
                <v-btn icon color="primary" @click="$router.push('/VerzoekerDetail/'+item.id)"><v-icon>mdi-eye</v-icon> </v-btn>
                <!-- <v-btn  color="warning" icon @click="editRequest(item)"><v-icon>mdi-border-color</v-icon></v-btn>  -->
            </template>
        </v-data-table> 
   </v-container>
</template>

<script>
export default {
    data(){
        return{
            headers: [ 
                {  text:"id",value: 'id_status_usuario',align: 'center', class:'light-blue darken-4 white--text px-0 mx-0'},
                { text: 'Nombre status', value: 'nombre_status_usuario',align: 'center',class:'light-blue darken-4 white--text px-0 mx-0' },
                { text: 'Estado', value: 'is_active',align: 'center', class:'light-blue darken-4 white--text px-0 mx-0' },
                { text: 'Fecha creado', value: 'fecha_create', align: 'center', class:'light-blue darken-4 white--text px-0 mx-0'},
                { text: 'Acciones', value: 'actions',  align: 'center', class:'light-blue darken-4 white--text px-0 mx-0'}
            ],
            DataItem:[],
            search:''
        }
    }
}
</script>

<style>

</style>