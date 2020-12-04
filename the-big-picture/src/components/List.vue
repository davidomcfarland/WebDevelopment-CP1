<template>
  <main>
    <h3>Parents</h3>

    <DynamicList v-model="item.parents"></DynamicList>

    <h3>Children</h3>

    <DynamicList v-model="item.subs"></DynamicList>
  </main>
</template>

<script>
  import DynamicList from "@/components/DynamicList.vue"

  export default {
    name: "list",
    props: [
      "item",
      "nameonly"
    ],
    computed: {
      children() {
        return this.item.subs.map(entry => entry.name)
      },
      parents() {
        return this.item.parents.map(entry => entry.name)
      }
    },
    components: {
      DynamicList
    }
  }
</script>
