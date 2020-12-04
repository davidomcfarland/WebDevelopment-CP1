<template>
  <main>
    <section id="header">
      <h1 v-text="currentItem.name"></h1>
      <input type="number" v-model="$root.$data.current">
    </section>

    <nav id="viewSelector">
      <ul>
        <li @click="selectTab(0)" :class="{ activeTab: activeTab[0] }">Detail</li>
        <li @click="selectTab(1)" :class="{ activeTab: activeTab[1] }">List</li>
        <li @click="selectTab(2)" :class="{ activeTab: activeTab[2] }">Map</li>
        <li @click="selectTab(3)" :class="{ activeTab: activeTab[3] }">Navigation</li>
      </ul>
    </nav>

    <div class="content">
      <detail :item="currentItem" v-if="activeTab[0]"></detail>
      <list :item="currentItem" v-else-if="activeTab[1]"></list>
      <mapView :item="currentItem" v-else-if="activeTab[2]"></mapView>
      <navigation :item="currentItem" v-else-if="activeTab[3]"></navigation>
    </div>


  </main>
</template>

<style scoped>
  main, div.content {
    width: 100vw;
    max-width: 900px;
    margin: auto;
  }

  div.content {
    padding: 5px 20px
  }

  section#header {
    position: sticky;
    top: 0;
    z-index: 3;
    background-color: var(--background);
    text-align: center;
    font-size: 3vh;
    border-bottom: 2px solid var(--tertiary);
    box-shadow: 0 0 10px 1px var(--tertiary);
  }

  #viewSelector {
    width: 100%;
    background-color: aliceblue;
  }

  #viewSelector ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  #viewSelector ul li {
    display: inline;
    height: 100%;
    width: 25%;
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid black;
  }

  #viewSelector ul li:hover {
    cursor: pointer;
    background-color: #ccc;
  }

  #viewSelector .activeTab {
    background-color: var(--background);
    border: 1px solid black;
    border-bottom: var(--background);
  }

  @media only screen and (min-width: 501px) and (max-width: 960px) {
    section#parents, section#subtopics {
      display: inline-block;
      width: 45%;
      vertical-align: top;
    }
  }

  @media only screen and (min-width: 961px) {
    section#description {
      display: inline-block;
      width: 50%;
      vertical-align: top;
    }

    section#parents, section#subtopics {
      display: inline-block;
      width: 20%;
      vertical-align: top;
    }
  }
</style>

<script>
  import detail from "@/components/Detail.vue"
  import list from "@/components/List.vue"
  import navigation from "@/components/Navigation.vue"
  import mapView from "@/components/Map.vue"

  export default {
    name: "Default",
    data() {
      return {
        activeTab: [
          true,
          false,
          false,
          false
        ]
      }
    },
    components: {
      mapView,
      detail,
      navigation,
      list,
    },
    computed: {
      currentItem() {
        return this.$root.currentItem
      }
    },
    methods: {
      selectTab(n) {
        if (n===1) {
          this.activeTab = [false, true, false, false]
        }
        else if (n===2) {
          this.activeTab = [false, false, true, false]
        }
        else if (n===3) {
          this.activeTab = [false, false, false, true]
        }
        else {
          this.activeTab = [true, false, false, false]
        }
      },
    }

  }
</script>
