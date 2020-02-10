<template>
    <div>
       <v-container>
           <v-row> 
               <!-- This is for Recent Event Table -->
               <v-col cols="12"> 
                   <EventTable/>
               </v-col>
               <!-- This is for Recent Event Table -->
           </v-row>
       </v-container>
    </div>
</template>

<script>
import EventTable from '@/components/EventHistory' 
export default {
    name: 'eventHistory',
    components: {
        EventTable, 
    }
}
</script>