<template>
    <div> 
      <br><br> <br>
      <br><br> <br> 
        <v-card class="mt-12 mx-auto" max-width="400px" >
        <v-card-title>
            <span class="headline">Admin Login</span>
            <v-icon left> mdi-account</v-icon>
        </v-card-title>
        <v-form @submit.prevent='login()'> 
            <v-card-text>
            <v-container>
                <v-row> 
                <v-col cols="12">
                    <v-text-field label="Username" type="text" required></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field label="Password" type="password" required></v-text-field>
                </v-col> 
                
                </v-row>
            </v-container>  
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer> 
            <!-- <v-btn color="blue darken-1" block rounded dark type="submit">Login</v-btn> -->
             <v-btn   :loading="loginBtn" :disabled="loginBtn" class="white--text" color="blue darken-1" block rounded  type="submit"  >
                Login
                <template v-slot:loader>
                    <span class="custom-loader">
                    <!-- <v-icon dark> mdi-rotate-right  </v-icon> -->
                    <v-icon dark> mdi-axis-arrow  </v-icon>
                    </span>
                </template>
            </v-btn>
            </v-card-actions>
        </v-form>
        </v-card> 
    </div>
</template>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>


<script>
export default {
    data: ()=>({
        dialog: true,
        loader: null,
        loginBtn: false,
    }), 
    methods: {
        login: function(){
            const _ = this;
            _.loader = 'loginBtn' 
            const l = this.loader
            this[l] = !this[l]
            setTimeout(() => {
                this[l] = false;
                _.$router.push("/admin/views/dashboard")

            }, 3000); 
             this.loader = null
        }
    },
}
</script>