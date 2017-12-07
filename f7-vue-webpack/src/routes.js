export default [
  {
      path: '/index/',
      component: require('./app.vue')
  },
  {
      path: '/about/',
      component: require('./pages/about.vue')
  },
  {
      path: '/timeline/',
      component: require('./pages/timeline.vue')
  },
  {
      path: '/form/',
      component: require('./pages/form.vue')
  },
  {
      path: '/dynamic-route/blog/:blogId/post/:postId/',
      component: require('./pages/dynamic-route.vue')
  }
]
