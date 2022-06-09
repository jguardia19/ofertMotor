<template>
    <v-app id="inspire">
           
          <v-navigation-drawer v-model="on_drawer" app color="deep-orange" dark> 

            <v-row>
                <v-col cols="12" class="text-center mt-5 mb-3">
                  <v-avatar color="white" class="mb-2">
                      <v-icon color="deep-orange">mdi-account</v-icon>
                  </v-avatar>
                   <h4 class="white--text">Ofert Motor</h4> 
                </v-col>   
            </v-row>
          
                

                <v-divider ></v-divider>  

                 <v-list dense>
                    <v-list-item to="/dashboard" color="white" >
                        <v-list-item-icon>
                        </v-list-item-icon>
                        <v-list-item-title >Inicio</v-list-item-title>
                    </v-list-item>
                   
                 </v-list>

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

<style>

</style>