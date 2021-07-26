<template>
    <div style="background-color: black;color:white;padding-inline: 16px">
    <v-container :fluid="$vuetify.breakpoint.lgAndDown" class="px-16" :style="`background-image: url(/images.jpeg);height: ${hero.size}px;background-position: bottom right;display:flex;flex-direction:column;justify-content: center;`">
      <h1 style="font-weight: 900;font-size: 80px">{{hero.title}}</h1>
      <p class="text-body-1" style="width: 40%;color: rgba(255,255,255,.67)">{{hero.text}}</p>
      <v-btn outlined color="success" class="mt-4" style="align-self: flex-start;" x-large>{{hero.button}}</v-btn>
    </v-container>
  </div>
</template>

<script>
  export default {
    data(){
      return{
      }
    },
    props:{
      hero:{type:Object}
    },
  }
</script>
