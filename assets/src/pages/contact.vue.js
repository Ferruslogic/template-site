var pageContact = {
    store,
    template: `
<div>
      <base-page-title
            :title="titlePage"
      />

      <div class="v-responsive mx-auto title font-weight-light mb-8" style="max-width: 720px;">
          <div class="v-responsive__content">

          <p v-html="text"> </p>

          </div>
        </div>
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

    <snackbar />
    </div>
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
        htmlp: ""
    }),

    methods: {

        getFormValues() {

            return JSON.stringify(this.$refs.form.data)

        },

        async submit() {
            let validate = this.$refs.form.validate();
            if (validate === true) {
                let status = await API_submitEmail(this.name, this.email, this.message);
                this.showAlert(status, validate);
            };
            this.$refs.form.reset();
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

        showAlert(status, validate) {
            this.$store.state.alert = true;

            if (status === 200) {
                this.$store.state.alertText = this.$store.state.language.texts.sendMail;
                this.$store.state.alertType = "success";
            } else {
                this.$store.state.alertText = this.$store.state.language.texts.notSendMail;
                this.$store.state.alertType = "error";
            }


            setTimeout(() => {
                this.$store.state.alert = false;
            }, 3000)

        }
    },
    computed: {
        titlePage: function() {
            return this.$store.state.language.texts.contactPageName;
        },
        text: function() {
            return this.$store.state.language.texts.textContact;
        }
    }













};