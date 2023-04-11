<template>
  <div class="app-body app-loc">
    <h2 id="locName">{{ loc.name }}</h2>
    <div id="locArt">{{ loc.art }}</div>
    <div id="locText">{{ loc.text }}</div>
    <div id="dirButtons">
      <button id="wBtn" v-if="loc.dir.west" @click="moveDir('w')">W</button>
      <button id="nBtn" v-if="loc.dir.north" @click="moveDir('n')">N</button>
      <button id="sBtn" v-if="loc.dir.south" @click="moveDir('s')">S</button>
      <button id="eBtn" v-if="loc.dir.east" @click="moveDir('e')">E</button>
    </div>
    <input id="txtKey" type="text" placeholder="ANSWER" v-model="txtKey" />
  </div>
</template>

<style>
</style>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return { txtKey: "" };
  },
  computed: {
    ...mapState(["loc"]),
  },
  methods: {
    ...mapActions(["setLoc"]),
    moveDir(dir) {
      switch (dir) {
        case "n":
          this.setLoc({ loc: this.loc.dir.north, key: this.txtKey });
          break;
        case "s":
          this.setLoc({ loc: this.loc.dir.south, key: this.txtKey });
          break;
        case "e":
          this.setLoc({ loc: this.loc.dir.east, key: this.txtKey });
          break;
        case "w":
          this.setLoc({ loc: this.loc.dir.west, key: this.txtKey });
          break;
      }
    },
  },
};
</script>

<style>
#dirButtons {
  position: relative;
  margin-top: 25px;
  left: 500px;
}

#dirButtons button {
  position: absolute;
  padding: 0;
  width: 23px;
}

#wBtn {
  left: 0;
  top: 15px;
}

#nBtn {
  left: 25px;
  top: 0;
}

#sBtn {
  left: 25px;
  top: 30px;
}

#eBtn {
  left: 50px;
  top: 15px;
}

#txtKey {
  position: relative;
  top: 14px;
}
</style>