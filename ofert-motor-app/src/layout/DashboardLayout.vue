<template>
    <v-app id="inspire">
           
          <v-navigation-drawer v-model="on_drawer" app color="light-blue darken-4" dark> 

            <v-row>
                <v-col cols="12" class="text-center mt-5 mb-3">
                  <v-avatar color="white" class="mb-2">
                      <v-icon color="light-blue darken-4">mdi-account</v-icon>
                  </v-avatar>
                   <h4 class="white--text">Ofert Motor</h4> 
                </v-col>   
            </v-row>
          
                

                <v-divider ></v-divider>  

                 <!-- <v-list dense>
                    <v-list-item to="/dashboard" color="white" >
                        <v-list-item-icon>
                        </v-list-item-icon>
                        <v-list-item-title >Inicio</v-list-item-title>
                    </v-list-item>
                   
                 </v-list> -->

                  <v-list-group color="white" class="prueba">
                        <template v-slot:activator>
                            <v-list-item-icon class="">
                                                    
                            </v-list-item-icon>
                            <v-list-item-content  class="link_menu" >Admin </v-list-item-content>
                        </template>
                            <span>
                                <v-list-item  to="/status/usuarios"  class="link_submenu">
                                    <v-list-item-title >
                                       Status Usuarios 
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item  to="/typeUsers"  class="link_submenu">
                                    <v-list-item-title >
                                       Tipo de Usuarios
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item  to="/Usuarios"  class="link_submenu">
                                    <v-list-item-title >
                                         Usuarios
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item  to="/status/Usuarios"  class="link_submenu">
                                    <v-list-item-title >
                                        <p>Articulos</p>   
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item  to="/status/Usuarios"  class="link_submenu">
                                    <v-list-item-title >
                                        <p>Status Articulos</p>   
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item  to="/status/Usuarios"  class="link_submenu">
                                    <v-list-item-title >
                                        <p>Status cliente</p>   
                                    </v-list-item-title>
                                </v-list-item>
                                <v-list-item  to="/status/Usuarios"  class="link_submenu">
                                    <v-list-item-title >
                                        <p>Status Proveedor</p>   
                                    </v-list-item-title>
                                </v-list-item>
                            </span>


                    </v-list-group>

            </v-navigation-drawer>
        
            <v-app-bar app color="white" >
              <v-app-bar-nav-icon @click="on_drawer = !on_drawer" color="gray" ><v-icon>mdi-menu</v-icon></v-app-bar-nav-icon>
        
              <v-toolbar-title></v-toolbar-title>

          </v-app-bar>
            <v-main>
              <v-container>
                  <slot/>
              </v-container>
            </v-main>
        </v-app> 
</template>

<script>
export default {
    data(){
        return{
            on_drawer:true
        }
    }
}
</script>

<style lang="scss">
    .link_submenu{
        font-size: 10px !important;
        min-height: 37px !important;
    }
    .v-application a {
         color: #fff !important;  
     }
</style>