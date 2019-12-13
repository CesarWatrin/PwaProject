
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Accueil.vue') },
      { path: '/Accueil', component: () => import('pages/Accueil.vue') },
      { path: '/Apropos', component: () => import('pages/Apropos.vue') },
      { path: '/CGU', component: () => import('pages/CGU.vue') },
      { path: '/Shop', component: () => import('pages/Shop.vue') },
      { path: '/Competition', component: () => import('pages/Competition.vue') },
      { path: '/Contact', component: () => import('pages/Contact.vue') },
      { path: '/Entrainement', component: () => import('pages/Entrainement.vue') },
      { path: '/Outils', component: () => import('pages/Outils.vue') },
      { path: '/Profil', component: () => import('pages/Profil.vue') },
      { path: '/Reglages', component: () => import('pages/Reglages.vue') },
      { path: '/Stats', component: () => import('pages/Stats.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
