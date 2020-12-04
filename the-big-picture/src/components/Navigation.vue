<template>
  <main>
    <NavFolder :item="currentItem" :open="true"/>
    <section class="subfolders">
      <NavFolder
        v-for="sub in currentItem.subs"
        :item="sub"
        :key="sub.id"
        :open="false"
        @click="changeItem(sub)"
      />
    </section>
  </main>
</template>

<style>
</style>

<script>
  import NavFolder from "@/components/NavFolder.vue"
  export default {
    name: "navigation",
    props: [
      "item"
    ],
    components: {
      NavFolder
    },
    data() {
      return {
        currentItem: this.item
      }
    },
    methods: {
      changeItem(itemID) {
        alert(itemID);
        this.currentItem = this.$root.$data.topicSet.getTopicById(itemID)
      }
    }
  }
</script>
