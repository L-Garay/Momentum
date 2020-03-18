import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let base = window.location.host.includes("localhost:8080")
  ? "//localhost:3000/"
  : "/";

let api = axios.create({ baseURL: base + "api/" });

export default new Vuex.Store({
  state: {
    pokemon: [],
    userPreferences: {
      name: "",
      militaryTimeSelected: false,
      setName: true
    },
    photo: null
  },
  mutations: {
    setPokemon(state, pokemon) {
      state.pokemon = pokemon;
    },
    setUser(state, user) {
      state.userPreferences = user;
    },
    setPhoto(state, photo) {
      state.photo = photo;
    }
  },
  actions: {
    async getAll({ commit, dispatch }) {
      let res = await api.get("values");
      commit("setPokemon", res.data);
    },
    async getPhoto({ commit, dispatch }) {
      let res = await api.get("values/photo");
      commit("setPhoto", res.data);
      console.log("PHOTO", res.data);
    },
    async setUser({ commit, dispatch }, user) {
      await api.post("users", user);
      dispatch("getUser");
    },
    async getUser({ commit, dispatch }) {
      let res = await api.get("users");
      commit("setUser", res.data);
      return res.data;
    }
  },
  modules: {}
});
