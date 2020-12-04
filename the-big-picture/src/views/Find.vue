<template>
  <div class="about">
    <h1>Find Things</h1>

    <DynamicList v-model="array"></DynamicList>

  </div>
</template>

<style scoped>
  #hint {
    background-color: pink;
  }
</style>

<script>
  import DynamicList from "@/components/DynamicList.vue"

  export default {
    name: "Find",
    data() {
      return {
        searching: false,
        input: "",
        array: [1,2,3,4,5,6]
      }
    },
    components: {
      DynamicList
    },
    computed: {
      topics() {
        return this.$root.topics;
      }
    }
  }
</script>
