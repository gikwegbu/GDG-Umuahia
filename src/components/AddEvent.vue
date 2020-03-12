<template>
  <div>  
    <v-btn rounded color="primary" @click="addEventDetails = true"  class="mb-4 ">
      New Event
      <v-icon > mdi-chevron-right  </v-icon>
    </v-btn>   
    <v-simple-table > 
    <!-- <v-simple-table dark>  -->
      <template v-slot:default>
        <thead>
          <tr >
            <th class="text-center" v-for="(item, index) in Header" :key="index">{{ item  }}</th>
            <!-- <th class="text-left">Name</th>
            <th class="text-left">Phrase</th>
            <th class="text-left">Date</th>
            <th class="text-left">Venue</th>
            <th class="text-left">Speaker (s) Name</th>
            <th class="text-left">Speaker (s) Image</th>
            <th class="text-left">Event Image</th>
            <th class="text-left">Action</th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in newEvent" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.phrase }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.venue }}</td>
            <td>{{ item.speakername }}</td>
            <td>
              <img :src="item.eventImage" height="80" width="80">
            </td> 
            <td>
              <v-btn class="ml-2" @click="action('edit', item.id)"  title="Edit Event"  icon> <v-icon large color="green"> mdi-database-edit  </v-icon> </v-btn> 
              <v-btn class="ml-2" @click="action('delete', item.id)"  title="Delete Event"  icon> <v-icon large color="red"> mdi-delete  </v-icon> </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>



    <!-- This is the modal for adding new event -->
    <v-dialog  v-model="addEventDetails" max-width="600px"   >
      <v-card>
        <v-card-title>
          <span class="subheadline">Event Details</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6"  >
                <v-text-field label="Event Name"  v-model="newEventDetails.name"></v-text-field>
              </v-col>

              <v-col cols="12" sm="6"  >
                <v-text-field label="Phrase" hint="Enter slogan for the Event" v-model="newEventDetails.phrase"></v-text-field>
              </v-col> 

              <v-col cols="12" sm="6">
                <v-text-field label="Venue" v-model="newEventDetails.venue"></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field label="Speakers" hint="Separate Names with comma, e.g George, Ikwegbu" v-model="newEventDetails.speakers"></v-text-field>
              </v-col>

              <v-col cols="12" sm="6"> 
                <v-file-input show-size counter multiple label="Event Image" v-model="newEventDetails.image" ></v-file-input> 
              </v-col>
              <v-col cols="12" sm="6"> 
                <v-text-field label="Event Date" type="date"  v-model="newEventDetails.date"></v-text-field>
              </v-col>
              <v-col cols="12"  sm="12">
                <small class="red--text" v-show="newEventErr"> 
                  {{newEventErrMsg}}
                </small>
              </v-col>
            </v-row> 
          </v-container> 
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1"  text @click="addEventDetails = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="AddEvent" >
            {{AddBtn}} 
            <i v-show="addIcon"  class="fa fa-spinner fa-spin"></i>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- This is the modal for editing the event table -->
    <v-dialog  v-model="showEventDetails" max-width="600px"   >
      <v-card>
        <v-card-title>
          <span class="subheadline">Event Details</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6"  >
                <v-text-field label="Event Name"  v-model="previewEvent.name"></v-text-field>
              </v-col>

              <v-col cols="12" sm="6"  >
                <v-text-field label="Phrase" hint="Enter slogan for the Event" v-model="previewEvent.phrase"></v-text-field>
              </v-col> 

              <v-col cols="12" sm="6">
                <v-text-field label="Venue" v-model="previewEvent.venue"></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field label="Speakers" hint="Separate Names with comma, e.g George, Ikwegbu" v-model="previewEvent.speakername"></v-text-field>
              </v-col>

              <v-col cols="12" sm="6"> 
                <v-file-input show-size counter multiple label="Event Image" v-model="previewEvent.image"></v-file-input> 
              </v-col>
              <v-col cols="12" sm="6"> 
                <v-text-field label="Event Date" type="date"  v-model="previewEvent.date"></v-text-field>
              </v-col> 
            </v-row>
            <v-img :src="previewEvent.eventImage" height="200" width="100%"></v-img>
          </v-container> 
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1"  text @click="showEventDetails = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="updateEvent(previewEvent.id)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
import { mapState, mapActions  } from 'vuex'
import db from '@/fb'
import * as firebase from 'firebase/app';
import 'firebase/storage';
// import { compareAsc, format } from 'date-fns'


// i want to write a filter program, that will grab the details of the selected event from the state using the id


  export default { 
    computed: {
      ...mapState([
        'newEvent'
      ]),   
    },
    data () {
      return {
         Header: [ 'Name', 'Phrase',  'Date', 'Venue', 'Speaker (s) Name', 'Event Image',  'Action',  ], 
         AddBtn: 'Add',
         newEventErrMsg: '*Please Provide All Field\'s Details',
         newEventErr: false,
         addIcon: false,
         addEventDetails: false,
         showEventDetails: false,
         previewEvent: {},
         newEventDetails: {
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
      ...mapActions([
        'Update_Events'
      ]),
      action: function(action, id){
        const _ = this; 
        let event = _.newEvent.find( event => event.id === id)
        _.previewEvent = event ;
        if(action == 'edit'){ 
          _.showEventDetails = true 
        }else if(action == 'delete'){ 
          let choice = confirm("You Are About To Delete "+ event.name);
          if(!choice){
            return 
          }
          db.collection("newEvent").doc(id).delete().then(function() {
              // console.log("Document successfully deleted!");
              // Remember to use a snackbar toast here
          }).catch(function(error) {
              // console.error("Error removing document: ", error);
          });

        }
      },
      updateEvent: function(id){
        const _ = this;
        _.Update_Events(id)
      },
      AddEvent: function(){
        const _ = this;
        /* _.addIcon = true;
        _.AddBtn = 'Adding' */
        
        const { name, phrase, venue, speakers ,image, date  } = _.newEventDetails;
        // I think, i will first load the image to storage here first, before sending it to the database 
        // Use a watch function to determine when the file input changes, note the extension
        // call the function created, and pass the extension and file model there. 
        if( (name.length == 0) || (phrase.length == 0) || (venue.length == 0) || (speakers.length == 0) || (date.length == 0) ){
          _.newEventErrMsg = "* Please Provide All Field\'s Details " ;
          _.newEventErr = true;
        }else{
          _.newEventErr = false; 
          // Checking to see file type
          if(image !=null){ 
            var fileTypes = ['jpg', 'jpeg', 'png'];
            if (image && image[0]) {  
              var extension = image[0].name.split('.').pop().toLowerCase(),  //file extension from input file
                  isSuccess = fileTypes.indexOf(extension) > -1;  //is extension in acceptable types 

              if (!isSuccess) {
                _.newEventErrMsg = "* Please Select an image file e.g JPG, JPEG, PNG " ;
                _.newEventErr = true;
                return
              }
              _.newEventErr = false;
              _.addIcon = true;
              _.AddBtn = 'Adding' ;
                const event = {
                name: name,
                phrase: phrase,
                venue: venue,
                speakername: speakers,
                eventImage: '',
                date: date 
              }
              //Declaring the image url and id globally local lol <no reason m >
              let imgUrl
              let id;
              db.collection('newEvent').add(event)
              .then( (data) => {
                id =  data.id; 
                _.newEventDetails = {};
                _.addIcon = false;
                _.AddBtn = 'Add';
                _.addEventDetails = false; 
                // Returning the id, so i can use it in the next then()
                return id
              })
              .then( (id) => { 
                const file = image[0];
                const filename = image[0].name
                const ext = extension; 
                
                // Returning the firebase storage(), because it has a promise, to be used in the next then()
                
                return firebase.storage().ref('newEvents/').child(id + '.' + ext).put(file); 
              })
              .then( fileData => { 
                // The use of downloadURL got deprecated as the time of writing this script. so use ref.getDownloadURL()
                return  fileData.ref.getDownloadURL();
              })
               .then(downloadURL => {
                 imgUrl = downloadURL;

                 db.collection('newEvent').doc(id).update({
                   eventImage: imgUrl
                 })
                 // Updating the image url with the new value in the database. 
                return downloadURL;
              })
              .catch((e)=>{
                console.log("An Error Occured: ",+' '+ e)
              })

            }
          }else{
            _.newEventErrMsg = "* Please Select an image file e.g JPG, JPEG, PNG " ;
            _.newEventErr = true;
          }
        }
         

        
        
      }
    },
  }
</script>