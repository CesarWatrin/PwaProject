<template>
  <q-page id="content">

    <q-parallax
      src="statics/backgrounds/accueil.png"
      style="color: white"
      >
      <h2>Boxing Club Evian-Les-Bains</h2>
      <h1>Explorez vos limites.</h1>
      <p>
        Inscrivez vous pour avoir accès à des cours gratuits
        <br>
        et aux tournois de boxe en ligne
      </p>
      <q-btn>
        Connexion
      </q-btn>
    </q-parallax>
    <div class="row justify-center full-height full-width text-centers" style="margin: 3%">
      <h1>L’Histoire du club</h1>
      <p>
        Créé en 2015 par Monsieur INSERERNOM, le Boxing Club
        d’Evian-Les-Bains n’a cessé de croitre au fil des années.
        Aujourd’hui, c’est plus de 150 adhérents qui viennent
        s’affronter quotidiennement au sein du club.
      </p>
      <h1>Nos valeurs</h1>
      <p>
        Notre club prône des valeurs sportives importantes afin de
        permettre à nos adhérents de pratiquer la boxe dans un
        environnement accueillant et propice au progrès.
      </p>
      <h1>Des coachs certifiés</h1>
      <p>
        Le boxing club d’Evian-Les-Bains vous propose des cours
        encadrés par des professionnels du monde de la boxe.
        Leur expérience est essentielle pour assurer la sécurité et le
        bon déroulement des séances.
      </p>
    </div>
    <q-parallax
    src="statics/club/background.png"
    style="color: white"
    >
      <h1>Un cadre idéal</h1>
      <p>
        Notre club vous acueille dans son établissement situé à
        quelques pas du lac Léman.
      </p>
    </q-parallax>

    <div class="row justify-center full-height full-width text-centers" style="margin: 3%">
      <h1>Nos équipements</h1>
      <p>
        Durant les séances d’entraînement, vous serez en
        capacité d’utiliser les différentes machines prévues
        à cet effet afin de développer votre technique ou
        votre condition physique.
      </p>
    </div>

    <!-- <q-footer>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
  </q-page>
</template>

<script>
export default {
  name: 'Accueil'
}
</script>

<style lang="scss">
  p, h2{
    font-family: $fontLow;
    font-size: 1em;
  }
  h1{
    font-family: $fontHigh;
    font-size: 3em;
  }
  p{
    margin: 0 30%;
  }
  // #content{
  //   margin: 0 3em;
  //   color: white;
  //   h1{
  //     font-family: $fontHigh;
  //     font-weight: bold;
  //     font-size: 5em;
  //     line-height: 1em;
  //   }
  //   h2, p{
  //     font-family: $fontLow;
  //     font-size: 2em;
  //     line-height: 2em;
  //   }
  // }
</style>
