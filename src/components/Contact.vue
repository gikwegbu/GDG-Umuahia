<template>
  <div>
    <br>
    <v-card :loading='form.loader' loader-height="5px" class="mx-auto"   max-width="500px">
          <v-card-title>
            <span class="headline">Contact GDG Umuahia</span>
          </v-card-title>
          <v-form @submit.prevent="sendMessage"> 
            <v-card-text>
              <v-container>
                <v-row> 
                  <v-col cols="12">
                    <v-text-field label="Name*" v-model="form.name" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Email*" v-model="form.email" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea    label="Message*" v-model="form.message"  rows="2"  ></v-textarea>
                  </v-col>
                  
                </v-row>
              </v-container>
              <small v-show="form.error" class="red--text">PLEASE PROVIDE ALL INFORMATION</small>
              <small v-show="form.success" class="teal--text">Delivered</small>
                <br>
              <small >*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" rounded dark type="submit">Send</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data() {
    return {
       form: {
        name: '',
        email: '',
        message: '',
        loader: false,
        error: false,
        success: false,
      },
    }
  },
  methods: {
    sendMessage: function(){
        let { name, email, message  } = this.form
        if( (name.length != 0) && (email.length != 0) && message.length !=0   ){
          this.form.loader = true;
          // This will be sent to database with axios, but for now am setting a timeout
          setTimeout(() => {
            this.form = {};
            this.form.success = true;
          }, 3000);
         
          setTimeout(() => {
            this.form.success = false;
          }, 4000);
        }else{
          this.form.error = true;
          setTimeout(() => {
            this.form.error = false;
          }, 2000);
        }
      }
  },
}
</script>