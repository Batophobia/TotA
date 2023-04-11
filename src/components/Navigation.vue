<template>
  <div class="app-nav">
    <div class="app-nav-item" @click="setTab('inv')">Inventory</div>
    <div class="app-nav-item" @click="addMsg('Saving')">Save</div>
    <div class="app-nav-item" @click="addMsg('Loading')">Load</div>
  </div>
</template>

<style>
.app-nav {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 30px;
  border-bottom: 1px solid black;
  text-align: right;
}
.app-nav-item {
  display: inline-block;
  padding: 5px 10px;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
}
.app-nav-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["addMsg", "unlock", "setTab"]),
  },
  computed: {
    ...mapState(["curTab"]),
  },
};
</script>