<template>
  <!-- <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
  </q-page> -->
  <q-page id="content" class="flex flex-center">
    <q-img
      src="statics/backgrounds/accueil.png"
      class="fullscreen"
    />
    <div class="">
      <h2>Boxing Club Evian-Les-Bains</h2>
      <h1>Explorez vos limites.</h1>
      <p>
        Inscrivez vous pour avoir accès à des cours gratuits
        <br>
        et aux tournois de boxe en ligne
      </p>
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="scss">
  .fullscreen {
    z-index: -100;
  }
  #content{
    margin: 0 3em;
    color: white;
    h1{
      font-family: $fontHigh;
      font-weight: bold;
      font-size: 5em;
      line-height: 1em;
    }
    h2, p{
      font-family: $fontLow;
      font-size: 2em;
      line-height: 2em;
    }
  }
</style>
