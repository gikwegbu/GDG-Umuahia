<template>
    <div>
        <v-container fluid>
            <v-row justify="end" align="center">
                <div>
                    <v-breadcrumbs :items="items" divider="/"></v-breadcrumbs> 
                </div> 
            </v-row> 
            <v-card>
            <v-row justify="center" align="center">
                <v-col cols="sm-6" align="center" justify="center"> 
                    <v-spacer class="pt-12"></v-spacer>
                    <div class="pt-12">
                        <p>
                            <abbr title="Google Developer Group">GDG</abbr> Umuahia, is a Tech-Community in the city of Umuahia, Abia State, that encompases all Google Affliated Programs conducted World Wide
                            . We serve as an Eco-system that encourages services ranging from Google technologies to Google Entreprenuerial Skills etc.
                        </p>

                        <v-btn color="primary" link href="https://developers.google.com/community/gdg" target="_blank" rounded title="Learn more about Google Developers Group">
                            Learn More 
                            <v-icon dark>
                                mdi-share
                            </v-icon>
                        </v-btn>
                    </div>
                </v-col> 
                <v-col cols="6">
                    This will contain a canvas of umuahia city
                </v-col>
            </v-row>
            </v-card>
            <br>
            <v-card>
            <v-row  justify="center" align="center">
                <v-col cols="6">
                    <v-card :loading='form.loader' outlined color="transparent" loader-height="5px" class="mx-auto"   max-width="100%">
                        <v-card-title>
                            <span class="headline">Complete The Below form</span>
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
                            <v-btn color="primary " rounded block dark type="submit">Send</v-btn>
                            </v-card-actions>
                        </v-form>
                        </v-card>
                </v-col>
                <v-col cols="6" class="text-center">
                    <span>
                        Need to get accross to us?
                        Fill the form to send us a smart DM.
                        <br> Or call the below numbers for a <abbr title="Quick Response">QR</abbr>
                        <br>
                        <v-icon color="green"> mdi-cellphone-message</v-icon>
                        <b>08101570258</b>
                    </span>
                </v-col>
            </v-row> 
            </v-card>
        </v-container>
    </div>
</template>

<script> 

export default {
    name: 'about',
    components: {
        
    },
    data: () => ({
      items: [
        {
          text: 'Home',
          disabled: false, 
        },
        {
          text: 'About',
          disabled: true, 
        }, 
      ],
      form: {
        name: '',
        email: '',
        message: '',
        loader: false,
        error: false,
        success: false,
      },
    }),
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