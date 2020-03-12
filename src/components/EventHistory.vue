<template>
  <v-card>
    <v-card-title>
      Event History
      <v-spacer></v-spacer>
      <v-text-field  v-model="search"   label="Search"  single-line hide-details  ></v-text-field>
    </v-card-title>
    <v-data-table  :headers="headers" :items="desserts"  :search="search"  ></v-data-table>
  </v-card>
</template>


<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'Name',
          },
          { text: 'Phrase', value: 'Phrase' },
          { text: 'Date', value: 'Date' },
          { text: 'Venue', value: 'Venue' },
          { text: 'Speaker (s)', value: 'Speaker' }, 
        ],
        desserts: [
          {
            Name: 'I/O Extended \'18' ,
            Phrase: 'Be innovative',
            Date: '2018/07/12',
            Venue: 'Abia Hotels',
            Speaker: 'Lusac, Austin, Chime, Lucky, John', 
          },
          {
            Name: 'I/O Extended \'19 ' ,
            Phrase: 'Re-invent',
            Date: '2019/07/12',
            Venue: 'EverGreen Hotels',
            Speaker: 'George, Lucky, Queen, John', 
          },
          {
            Name: 'Get Together',
            Phrase: 'Parte after Parte',
            Date: '2019/12/12',
            Venue: 'Ojukwu Bunker',
            Speaker: 'George, Kingsley, Queen', 
          },
          
        ],
      }
    },
  }
</script>