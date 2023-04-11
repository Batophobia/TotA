<template>
  <div id="app">
    <div id="wrapp">
      <div v-if="curTab == 'new'" class="app-body">
        <h2>Temple of the Albatross</h2>
        <div>
          You have been hired to locate and retrieve an ancient idol, believed
          to bring great fortune to its owner. It is rumored to be located in
          the long lost Temple of the Albatross. After a long journey, you are
          dropped off on the beach, near where you believe the temple to be.
        </div>
        <div style="margin-top: 25px">
          <button @click="startGame()">START</button>
        </div>
      </div>
      <!-- <app-nav v-else></app-nav> -->
      <app-loc v-if="curTab == 'quest'"></app-loc>
      <app-messages></app-messages>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import store from "./store";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["setTab", "setLoc"]),
    startGame() {
      this.setTab("quest");
      this.setLoc({ loc: "start", key: "" });
    },
  },
  computed: {
    ...mapState(["curTab"]),
  },
};
</script>

<style>
body {
  background-color: rgb(103, 103, 113);
}
#app {
  margin: 0 auto;
  width: 800px;
  height: 100vh;
  position: relative;
  background-color: rgb(120, 143, 90);
}
.app-body {
  position: absolute;
  top: 30px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  text-align: center;
  padding: 30px;
}
</style>