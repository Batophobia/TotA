import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import ments from './data/award'
import locations from './data/locations'

export default new Vuex.Store({
  state: {
    ments,
    curTab: "new",
    inv: {},
    loc: { name: '', art: '', text: '', dir: {} },
    key: "",
    messages: []
  },
  mutations: {
    addMsg: (state, msg) => { state.messages.push(msg) }
    , delMsg: (state, idx) => { state.messages.splice(idx, 1); }
    , addItem: (state, item) => {
      if (!state.inv[item]) {
        state.inv[item] = 0;
      }
      state.inv[item].push(item);
    }
    , setTab: (state, tab) => {
      state.curTab = tab;
    }
    , setLoc: (state, locKey) => {
      var loc = locKey.loc;
      var key = locKey.key;
      // Simple deep copy instead of reference
      var tmpLoc = JSON.parse(JSON.stringify(locations[loc]));
      tmpLoc.text = vigenere(tmpLoc.text, key);
      state.loc = tmpLoc;
    }
    , unlock: (state, item) => {
      switch (item) {
      }
    }
    , award: (state, item) => {
      if (state.ments.hasOwnProperty(item)) {
        state.ments[item].unlock = true;
      }
    },
  },
  actions: {
    addMsg: ({ commit }, msg) => { commit('addMsg', msg) }
    , delMsg: ({ commit }, msg) => { commit('delMsg', msg) }
    , unlock: ({ commit }, item) => { commit('unlock', item) }
    , award: ({ commit }, item) => {
      if (ments[item].unlock === false)
        commit('addMsg', `Award: ${ments[item].name}`);
      commit('award', item);
    }
    , setTab: ({ commit }, tab) => { commit('setTab', tab) }
    , setLoc: ({ commit }, locKey) => { commit('setLoc', locKey) }
  },
  getters: {
    awards: () => { return Object.values(ments).filter(award => award.unlock === true) }
    , ttlAwards: () => { return Object.keys(ments).length }
  }
})

function ordA(a) {
  return a.charCodeAt(0) - 65;
}
function vigenere(text, key) {
  if (key == null || key == "") {
    return text;
  }

  var i = 0, b;
  key = key.toUpperCase().replace(/[^A-Z]/g, '');
  return text.toUpperCase().replace(/[A-Z]/g, function (a) {
    b = key[i++ % key.length];
    return String.fromCharCode(((ordA(a) + (26 - ordA(b))) % 26 + 65));
  });
}