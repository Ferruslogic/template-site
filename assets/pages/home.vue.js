var pageHome = {
    template: `
    <div>
    <div  class="title">Inicio</div>
    
    <blockquote class="blockquote">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.</blockquote>

    <v-timeline>
<v-timeline-item
  v-for="n in 4"
  :key="n"
  color="red lighten-2"
  large
>
  <template v-slot:opposite>
    <span>Tus eu perfecto</span>
  </template>
  <v-card class="elevation-2">
    <v-card-title class="headline">Lorem ipsum</v-card-title>
    <v-card-text>
      Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
    </v-card-text>
  </v-card>
</v-timeline-item>
</v-timeline>
    </div>
    `
};