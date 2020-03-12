<template>
    <div>
       <v-container fluid>
           <v-row> 
               <!-- This is for Recent Event Table -->
               <v-col cols="12"> 
                   <messageTable/>
               </v-col>
               <!-- This is for Recent Event Table -->
           </v-row>
       </v-container>
    </div>
</template>

<script>
import messageTable from '@/components/MessageTable' 
export default {
    name: 'eventHistory',
    components: {
        messageTable, 
    }
}
</script>