var pageContact = {
    template: `
    <v-card
    class="mx-auto pa-4"
    max-width="500"
    outlined
    >

        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>
      
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>


          <v-textarea
                  v-model="message"
                  :rules="messageRules"
                  color="teal"
                  required
                >
                  <template v-slot:label>
                    <div>
                      Message
                    </div>
                  </template>
                </v-textarea>
      
        
      
        


        <v-btn
          :disabled="!valid"
          class="mr-4"
          @click="submit"
        >
          submit
        </v-btn>


        <v-btn @click="reset">
          clear
        </v-btn>
      
        </v-form>
    </v-card>
    `,


    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        message: '',
        messageRules: [
            v => !!v || 'Message is required',
            v => (v && v.length <= 512) || 'Message must be less than 512 characters',
        ],

    }),

    methods: {

        submit() {
            this.$refs.form.validate()
        },

        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },

    },













};