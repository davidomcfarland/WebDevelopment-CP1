<template>
  <ul>
    <li
    v-for="i in v_length"
    :key="i"><input
    type="text"
    class="list-item"

    @keyup.enter.prevent="newEntry"
    @keydown.delete="deleteEntry"
    @keydown.tab.prevent="addSubtopic"

    v-model="v_array[i-1].name"
    :ref="'item' + i"/></li>
  </ul>
</template>

<style scope>
  .list-item {
    width: 100%;
    border: none;
  }

  .list-item:active, .list-item:focus {
    border: none;
    box-shadow: none;
    outline: none;
  }
</style>

<script>
  export default {
    name: "DynamicList",
    data() {
      return {}
    },
    computed: {
      v_length() {
        return this.v_array.length
      }
    },
    model: {
      prop: "v_array",
      event: "keyup.enter"
    },
    props: {
      v_array: {
        array: input => {return new Array(input)},
        default: new Array
      }
    },
    methods: {
      addNew(){
          this.v_array.push(this.$root.$data.topicSet.addTopic(""));
      },
      focusNew(){
        try {
          this.$refs["item" + (this.v_array.length)][0].focus();
        }
        catch {
          this.$refs["item" + (this.v_array.length-1)][0].focus();
        }
      },
      async newEntry() {
        try {
          await this.addNew();
          this.$emit("keyup", this.v_array);
          this.focusNew()
        }
        catch {
          error => console.log(error)
        }
      },
      deleteEntry() {
        alert("FIXME -- add delete function")
      },
      addSubtopic() {
        alert("FIXME -- add tab function")
      }
    }
  }
</script>
