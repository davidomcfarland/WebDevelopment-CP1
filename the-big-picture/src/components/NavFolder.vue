<template>
  <p
    class="nav-folder"
    @click="clicked"
  ><i
    class="fas fa-2x folder-icon"
    :class="{ 'fa-folder-open': open, 'fa-folder': !open}"
    size="3x"
  ></i><span
    class="folderName"
  >{{ item.name }}</span></p>
</template>

<style>
  .nav-folder {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .nav-folder:active{
    border: 1px solid black;
    border-radius: 5px;
  }

  .folder-icon {
    color: #ffe563;
  }

  .folderName {
    font-size: 1.5em;
    font-weight: bold;

  }
</style>

<script>
  export default {
    name: "NavFolder",
    props: [
      "item",
      "open"
    ],
    methods: {
      clicked() {
          this.$emit("click", this.item)
      }
    }
  }
</script>
