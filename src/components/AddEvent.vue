<template>
  <div>
    <v-data-table  :headers="headers"   :items="newEventData"  sort-by="phrase"  class="elevation-6" >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Upcoming Events</v-toolbar-title> 
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }" >
              <v-btn color="primary" dark class="mb-2" v-on="on" rounded>New Event</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <!-- This card is for editable values -->
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model="editedItem.name" label="Event Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model="editedItem.phrase" label="Catch Phrase"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field v-model="editedItem.date" type="date" label="Date"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field v-model="editedItem.venue" label="Venue"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field v-model="editedItem.speakerName" label="Speaker(s) Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6"> 
                      <v-file-input v-model="editedItem.speakerImage" show-size counter multiple label="Speaker(s) Image"></v-file-input>  
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-file-input v-model="editedItem.eventImage" show-size counter multiple label="Event Image"></v-file-input>   
                    </v-col>
                  </v-row>
                </v-container>
                <!-- This card is for editable values -->
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>


      <template v-slot:item.action="{ item }">
        <v-icon   class="mr-2" @click="editItem(item)" color="blue" >
            mdi-playlist-edit
        </v-icon>
        <v-icon    @click="deleteItem(item)" class="mr-2" color="red" >
          mdi-delete-forever
        </v-icon>
        <!-- This action button will be used to move the upcoming event to Recent Event
        i.e when the event have passed, then a form comes up where the admin provides
        Keynotes, pictures taken and other activities carried out in the particular meetup  -->
        <v-icon   @click="deleteItem(item)" color="green"  >
            mdi-share
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
    {{ newEvent  }} 
  </div>
</template>


<script>
import { mapState  } from 'vuex'

  export default {
    computed: {
    ...mapState([
      'newEvent'
    ]), 
    },
    data: () => ({
      dialog: false,
      newEvent:'',
      headers: [
        { text: 'Event (s)',  align: 'left',   sortable: false, value: 'name', },
        { text: 'Phrase', value: 'phrase' },
        { text: 'Date', value: 'date' },
        { text: 'Venue', value: 'venue' },
        { text: 'Speakers', value: 'speakerName' },
        { text: 'S.Image', value: 'speakerImage' },
        { text: 'E.Image', value: 'eventImage' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      newEventData: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        phrase: 0,
        date: null,
        venue: 0,
        speakerName: 0,
        speakerImage: null,
        eventImage: null,
      },
      defaultItem: {
        name: '',
        phrase: 0,
        date: null,
        venue: 0,
        speakerName: 0,
        speakerImage: null,
        eventImage: null,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.newEventData = [
          {
            name: 'Frozen Yogurt',
            phrase: 159,
            date: 6.0,
            venue: 24,
            speakerName: 4.0,
            speakerImage: null,
            eventImage: null
          },
          {
            name: 'Ice cream sandwich',
            phrase: 237,
            date: 9.0,
            venue: 37,
            speakerName: 4.3, 
            speakerImage: null,
            eventImage: null
          },
          {
            name: 'Eclair',
            phrase: 262,
            date: 16.0,
            venue: 23,
            speakerName: 6.0,  
          }, 
        ]
      },

      editItem (item) {
        this.editedIndex = this.newEventData.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.newEventData.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.newEventData.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.newEventData[this.editedIndex], this.editedItem)
        } else {
          this.newEventData.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>