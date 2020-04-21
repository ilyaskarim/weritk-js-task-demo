import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ApolloClient from "apollo-boost";
import VueApollo from "vue-apollo";

Vue.use(VueApollo);
Vue.config.productionTip = false;

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: "https://api.graphcms.com/simple/v1/awesomeTalksClone",
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.prototype.$apollo = apolloClient;

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
