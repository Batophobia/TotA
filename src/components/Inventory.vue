<template>
  <div class="app-body app-inv" v-if="inv != null">
    <div class="app-inv-filters">Filters</div>
    <div class="app-inv-item" :key="p.name" v-for="p in inv">
      <div class="app-inv-item-name">{{ p.name }}</div>
    </div>
  </div>
</template>

<style>
.app-inv-item {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 5px;
  background-color: rgba(255, 255, 200, 0.3);
  border-radius: 10px;
  vertical-align: top;
}
.app-inv-item-name {
  font-weight: bold;
  font-size: 18px;
}
</style>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["inv"]),
  },
};
</script>