<template>
  <main>
    <div class="current" v-if="item.id != -1">
    <section id="description">
      <h2>Description</h2>
      <p v-text="item.description"></p>
    </section>

    <section id="parents">
      <h2>Parent Topics</h2>
      <ul>
        <li v-for="parent in item.parents" :key="parent.id">{{parent.name}}</li>
      </ul>
    </section>

    <section id="subtopics">
      <h2>Subtopics</h2>
      <ul>
        <li v-for="sub in item.subs" :key="sub.id">{{sub.name}}</li>
      </ul>
    </section>

    <section id="discussion">
      <h2>Discussion</h2>

      <p v-for="paragraph in item.discussion" :key="paragraph">{{paragraph}}</p>
    </section>
    </div>

    <div class="empty" v-else>
      <p>{{item.description}}</p>
    </div>
  </main>
</template>

<script>
  export default {
    name: "detail",
    props: [
      "item"
    ]
  }
</script>

<style>
  section {
    padding: 20px;
  }

  h2 {
    position: sticky;
    top: 0;
  }

  p {
    text-indent: 30px;
  }

  p:not(:last-child) {
    margin-bottom: 20px;
  }

  .empty {
    width: 100%;
    height: 50vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .empty p {
    font-size: 24pt;
    font-weight: bold;
    text-align: center;
  }
</style>
