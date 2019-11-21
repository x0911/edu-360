import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
const fb = require("../firebase.config.js");
import NProgress from "nprogress";
import "nprogress/nprogress.css";

function loadView(view) {
  return () => import(`@/views/${view}.vue`);
}

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "error_404",
    component: loadView("errors/err_404"),
    meta: {
      title: "Not Found"
    }
  },
  {
    path: "/",
    name: "home",
    component: loadView("Home"),
    meta: {
      title: "Home"
    }
  },
  {
    path: "/no_auth",
    name: "no_auth",
    component: loadView("errors/no_auth"),
    meta: {
      title: "No Permission"
    }
  }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
});

let app_title = store.state.app_title;
let return_defaults = function() {
  document.title = app_title;
};

router.beforeEach((to, from, next) => {
  let toNext,
    noAuthPath = "/no_auth",
    authPath = "/p";

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const requiresNoAuth = to.matched.some(x => x.meta.requiresNoAuth);
  const currentUser = fb.auth.currentUser;
  if (currentUser) {
    // && (!store.state.currentUser || !store.state.userProfile)
    if (!store.state.currentUser) {
      store.commit("setCurrentUser", currentUser);
    }
  }
  if (from.path == noAuthPath && to.meta.requiresAuth) {
    // Do nothing
  } else if (from.path == authPath && to.meta.requiresNoAuth) {
    // Do nothing
  } else {
    if (requiresAuth && !currentUser) {
      toNext = noAuthPath;
    } else if (requiresNoAuth && currentUser) {
      toNext = authPath;
    } else {
      // Do nothing
    }

    if (to.name) {
      NProgress.start();
      if (to.meta.title) {
        document.title = to.meta.title + " - " + app_title;
      } else {
        return_defaults();
      }
    } else {
      return_defaults();
    }
    next(toNext);
  }
});
router.afterEach(() => {
  NProgress.done();
});

export default router;
