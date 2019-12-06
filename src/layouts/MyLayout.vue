<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
          />

        <q-toolbar-title>
          Accueil
        </q-toolbar-title>

        <q-btn id="connexion" flat dense>
          Connexion
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
      :breakpoint="1000"
    >
      <q-list>
        <q-item-label header>Accueil</q-item-label>

        <q-item
          v-for="nav in navs" v-bind:key="nav.label"
          :to="nav.to"
          v-ripple :active="active"
          clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon" style="color: black"/>
          </q-item-section>
          <q-item-section  >
            <q-item-label class="label"  style="color: black" >{{ nav.label }}</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>

        <!-- <hr> -->

        <q-item footer>
          <q-btn>
            Langue
          </q-btn>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      navs: [
        {
          label: 'Accueil',
          icon: 'home',
          to: '/'
        },
        {
          label: 'Mes stats',
          icon: 'trending_up',
          to: '/'
        },
        {
          label: 'Outils',
          icon: 'build',
          to: '/'
        },
        {
          label: 'Entrainement',
          icon: 'fitness_center',
          to: '/'
        },
        {
          label: 'Compétition',
          icon: 'assessment',
          to: '/'
        },
        {
          label: 'Club',
          icon: 'storefront',
          to: '/Club'
        },
        {
          label: 'Contact',
          icon: 'chat',
          to: '/'
        },
        {
          label: 'À propos',
          icon: 'error',
          to: '/'
        },
        {
          label: 'CGU',
          icon: 'menu_book',
          to: '/'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  *{
    font-family: $fontLow;
    font-weight: bold;
  }
  hr{
    opacity: 0.2;
  }
  #connexion{
    font-family: $fontHigh;
    font-weight: bolder;
  }
</style>
