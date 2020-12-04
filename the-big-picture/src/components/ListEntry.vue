<template>
  <li class="listItem" @click="openClose" v-if="onlyShowName">{{item.name}}<i class="fas fa-plus-circle"></i><i class="fas fa-sort-down"></i></li>
  <li v-else>
    <p class="listItem" @click="openClose">{{item.name}}<i class="fas fa-plus-circle"></i><i class="fas fa-sort-up"></i></p>
    <ul>
      <ListEntry v-for="sub in item.subs" :item="sub" :nameonly="true" :key="sub.name"></ListEntry>
    </ul>
  </li>
</template>

<style scoped>
  p {
    margin-bottom: 0px;
    margin-left: 0px;
    padding-left: 0px;
  }

  .fas {
    visibility: hidden
  }

  .listItem:hover .fas {
    visibility: visible
  }
</style>

<script>
  export default {
    name: "ListEntry",
    props: [
      "item",
      "nameonly",
    ],
    data() {
      return {
        onlyShowName: this.nameonly
      }
    },
    methods: {
      openClose() {
        if (this.onlyShowName) {
          this.onlyShowName = false;
        }
        else {
          this.onlyShowName = true;
        }
      }
    }
  }
</script>
