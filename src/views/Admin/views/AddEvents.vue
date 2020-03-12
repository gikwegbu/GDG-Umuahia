<template>
    <div>
       <v-container fluid>
           <v-row> 
               <v-col cols="12" >  
                   <AddEvent/> 
                   <br>
                   <!-- {{ newEvent }} -->
               </v-col> 
           </v-row>
       </v-container>
    </div>
</template>

<script> 
import AddEvent from '@/components/AddEvent'
import { mapState  } from 'vuex'
export default {
    name: 'addEvent',
    components: { 
        AddEvent,
    },
    computed: {
        ...mapState([
            'newEvent'
        ])
    },
}
</script>