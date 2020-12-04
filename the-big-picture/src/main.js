import Vue from 'vue'
import App from './App.vue'
import router from './router'

import topics from "@/assets/data.js"
import TopicSet from "@/assets/TopicSet.js"

Vue.config.productionTip = false;

new Vue({
  router,
  data: {
    current: 0,
    topicSet: new TopicSet(topics, "mainData"),
  },
  computed: {
    currentItem() {
      if (this.current < 0 || this.current >= this.topics.length) {
        let defaultItem = {
          id: -1,
          name: "No Topic Selected",
          description: "Choose a topic to start exploring",
          parents: [],
          subs: [],
        }
        return defaultItem
      }
      return this.topics[this.current]
    },
    topics() {
      return this.topicSet.topics;
    }
  },
  methods: {
    giveHint() {
      if (this.input === "") {
        alert("hey");
        this.hints = [];
        return;
      }
      this.searching = true;
      this.hints = ["a", "B", "CD ", "E"]

      return;

    }
  },
  render: h => h(App)
}).$mount('#app')
