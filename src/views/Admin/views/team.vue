<template>
    <div> 
        <v-container fluid> 
            <v-btn rounded color="primary" @click="addTeamDetails = true"  class="mb-4 mt-4">
                New Team Player
                <v-icon > mdi-chevron-right  </v-icon>
            </v-btn>  
            <v-simple-table > 
                <!-- <v-simple-table dark>  -->
                <template v-slot:default>
                    <thead>
                    <tr >
                        <th class="text-center" v-for="(item, index) in Header" :key="index">{{ item  }}</th>
                        <!-- <th class="text-left">Name</th>
                        <th class="text-left">Stack</th>
                        <th class="text-left">Quote</th>
                        <th class="text-left">Fb</th>
                        <th class="text-left">Whatsapp</th>
                        <th class="text-left">Twitter</th>
                        <th class="text-left">Image</th>
                        <th class="text-left">Medium</th> -->
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in team" :key="item.id">
                        <td>{{ item.name }}</td>
                        <td>{{ item.business }}</td>
                        <td>{{ item.position }}</td>
                        <td>{{ item.quote }}</td>
                        <td>{{ item.facebook }}</td>
                        <td>{{ item.whatsapp }}</td>
                        <td>{{ item.twitter }}</td> 
                        <td>{{ item.medium }}</td> 
                        <td>  <img :src="item.img" height="80" width="80"> </td>  
                        <td>
                            <v-btn class="ml-1" @click="action('edit', item.id)"  title="Edit Event"  icon> <v-icon  color="green"> mdi-database-edit  </v-icon> </v-btn> 
                            <v-btn class="ml-1" @click="action('delete', item.id)"  title="Delete Event"  icon> <v-icon  color="red"> mdi-delete  </v-icon> </v-btn>
                        </td>
                    </tr>
                    </tbody>
                </template>
            </v-simple-table>



            <!-- This is the modal for adding new event -->
            <v-dialog  v-model="addTeamDetails" max-width="600px"   >
                <v-card>
                    <v-card-title>
                    <span class="subheadline">Lead Details</span>
                    </v-card-title>
                    <v-card-text>
                    <v-container>
                        <v-row>
                        <v-col cols="12" sm="6"  >
                            <v-text-field label="Event Name"  v-model="newTeamDetails.name"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6"  >
                            <v-text-field label="Phrase" hint="Enter slogan for the Event" v-model="newTeamDetails.phrase"></v-text-field>
                        </v-col> 

                        <v-col cols="12" sm="6">
                            <v-text-field label="Venue" v-model="newTeamDetails.venue"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field label="Speakers" hint="Separate Names with comma, e.g George, Ikwegbu" v-model="newTeamDetails.speakers"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6"> 
                            <v-file-input show-size counter multiple label="Event Image" v-model="newTeamDetails.image"></v-file-input> 
                        </v-col>
                        <v-col cols="12" sm="6"> 
                            <v-text-field label="Event Date" type="date"  v-model="newTeamDetails.date"></v-text-field>
                        </v-col> 
                        </v-row> 
                    </v-container> 
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1"  text @click="addTeamDetails = false">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="AddTeam">Add </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- This is the modal for editing the event table -->
            <v-dialog  v-model="showTeamDetails" max-width="600px"   >
                <v-card>
                    <v-card-title>
                    <span class="subheadline">Player Details</span>
                    </v-card-title>
                    <v-card-text>
                    <v-container>
                        <v-row>
                        <v-col cols="12" sm="6"  >
                            <v-text-field label="Player Name"  v-model="previewTeam.name"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6"  >
                            <v-text-field label="Stack" hint="What do you have?" v-model="previewTeam.stack"></v-text-field>
                        </v-col> 

                        <v-col cols="12" sm="6">
                            <v-text-field label="Position" v-model="previewTeam.position"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field label="Quote"   v-model="previewTeam.quote"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field label="Facebook ID"   v-model="previewTeam.facebook"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field label="Twitter ID"   v-model="previewTeam.twitter"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field label="Medium ID"   v-model="previewTeam.medium"></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <v-text-field label="Whatsapp Number"   v-model="previewTeam.whatsapp"></v-text-field>
                        </v-col> 

                        <v-col cols="12"> 
                            <v-file-input show-size counter multiple label="Player Image" v-model="previewTeam.image"></v-file-input> 
                        </v-col> 

                        </v-row>
                        <v-img :src="previewTeam.img" height="200" width="100%"></v-img>
                    </v-container> 
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1"  text @click="showTeamDetails = false">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="showTeamDetails = false">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-container>
    </div>
</template>


<script>
import { mapState, mapActions  } from 'vuex'

// i want to write a filter program, that will grab the details of the selected event from the state using the id


  export default {
    computed: {
      ...mapState([
        'team'
      ]),   
    },
    data () {
      return {
         Header: [ 'Name', 'Stack', 'position',  'Quote',  'Facebook', 'Whatsapp', 'Twitter', 'Medium'  , 'Image', 'Action',  ],
         addTeamDetails: false,
         showTeamDetails: false,
         previewTeam: {},
         newTeamDetails: {
           name: '',
           phrase: '',
           venue: '',
           speakers: '',
           image: null, 
           date: ''

           

         }
      }
    },
    methods: {
      action: function(action, id){
        const _ = this;

        let event = _.team.find( event => event.id === id)
        _.previewTeam = event 
        _.showTeamDetails = true 
      },
      AddTeam: function(){
        const _ = this;
        
        const { name, phrase, venue, speakerName ,eventImage, date  } = _.newTeamDetails;
        console.log(_.newTeamDetails)
        
      }
    },
  }
</script>