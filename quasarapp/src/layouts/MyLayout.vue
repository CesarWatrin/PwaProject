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
          >
        </q-btn>

        <q-toolbar-title>
          Accueil
        </q-toolbar-title>

        <q-btn
          id="connexion"
          flat
          dense
          @click="rightDrawerOpen = !rightDrawerOpen"
          >
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

          class="menu-no-active"
          v-for="nav in navs" v-bind:key="nav.label"
          :to="nav.to"
          clickable

          v-ripple :active="link === '{{ nav.label }}'"
          @click="link = '{{ nav.label }}'"
          active-class="menu-active"

          >
          <q-item-section avatar>
            <q-icon :name="nav.icon"/>
          </q-item-section>
          <q-item-section  >
            <q-item-label class="label" style="color: black">{{ nav.label }}</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>

        <q-item footer>
          <q-btn>
            Langue
          </q-btn>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      show-if-above

      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
      mini-to-overlay

      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >

    <q-item
      v-for="nav in navs2" v-bind:key="nav.label"
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
      rightDrawerOpen: false,
      miniState: true,
      link: 'Accueil',
      navs: [
        {
          label: 'Accueil',
          icon: 'home',
          to: '/Accueil'
        },
        {
          label: 'Mes stats',
          icon: 'trending_up',
          to: '/Stats'
        },
        {
          label: 'Outils',
          icon: 'build',
          to: '/Outils'
        },
        {
          label: 'Entrainement',
          icon: 'fitness_center',
          to: '/Entrainement'
        },
        {
          label: 'Compétition',
          icon: 'assessment',
          to: '/Competition'
        },
        {
          label: 'Magasin',
          icon: 'storefront',
          to: '/Shop'
        },
        {
          label: 'Contact',
          icon: 'chat',
          to: '/Contact'
        },
        {
          label: 'À propos',
          icon: 'error',
          to: '/Apropos'
        },
        {
          label: 'CGU',
          icon: 'menu_book',
          to: '/CGU'
        }
      ],
      navs2: [
        {
          label: 'Profil',
          icon: 'person',
          to: '/Profil'
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
  .menu-no-active{
    color: black;
  }
  .menu-active{
    color: $primary;
    font-family: $fontHigh;
    font-weight: bold;
  }
</style>
