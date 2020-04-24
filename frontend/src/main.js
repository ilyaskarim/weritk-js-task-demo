import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueApollo from "vue-apollo";

import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:4000/",
});

// Cache implementation
const cache = new InMemoryCache({
  addTypename: false,
});

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  addTypename: false,
});

Vue.config.productionTip = false;
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  router,
  render: (h) => h(App),
  apolloProvider,
}).$mount("#app");
