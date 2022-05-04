
// import Vue from "vue";
// import VueRouter, { Route } from "vue-router";

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  interface Vue {
    // $router: VueRouter; // This means there is this thing under this
    // $route: Route;
    $https: any;
    $urls: any;
    $Message: any;
    $Modal: any;
  }
  const component: DefineComponent<{}, {}, Vue, any>
  // const component: DefineComponent<{}, {}, any>
  export default component
}

