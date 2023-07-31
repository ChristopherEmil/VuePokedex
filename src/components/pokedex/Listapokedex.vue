<template id="grid-template">
  <div class="row">
    <div class="col-md-12">
      <h1>Lista de Pokedex</h1>

      <input
        type="text"
        v-model="buscar"
        class="form-control hola"
        placeholder="Ejemplo: Charmander"
      />
      <input type="checkbox" id="1gen" value="1gen" v-model="prueba1" />
      <label for="1gen">1º Gen</label>
      <input type="checkbox" id="2gen" value="2gen" v-model="prueba2" />
      <label for="2gen">2º Gen</label>
      <input type="checkbox" id="3gen" value="3gen" v-model="prueba3" />
      <label for="3gen">3º Gen</label>
    </div>
  </div>
  <div class="primeragen" v-if="prueba1 && items.length > 0">
    <h3>1 GEN</h3>
    <table class="table">
      <tr>
        <th scope="col" v-for="campo in columnasAgenda" :key="campo">
          {{ campo }}
        </th>
      </tr>

      <tr v-for="p in items" v-bind:key="p.name">
        <td v-if="p.id < 152">{{ p.id }}</td>
        <td v-if="p.id < 152">
          <a v-bind:href="'/pagepoke/' + p.id">{{ p.name }}</a>
        </td>
        <td v-if="p.id < 152">
          <span :class="'img' + p.types[0].type.name"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
          >
          <span :class="'img' + p.types[1]?.type.name"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
          >
        </td>
        <td v-if="p.id < 152"><img :src="p.sprites.front_default" /></td>
        <!-- <td v-if="p.id < 152"><img :src="p.sprites.front_shiny"></td> -->
      </tr>
    </table>
  </div>
  <div class="primeragen" v-if="prueba2">
    <h3>2 GEN</h3>
    <table class="table">
      <tr>
        <th scope="col" v-for="campo in columnasAgenda" :key="campo">
          {{ campo }}
        </th>
      </tr>
      <tr v-for="p in items" v-bind:key="p.id">
        <td v-if="p.id > 151 && p.id <= 251">{{ p.id }}</td>
        <td v-if="p.id > 151 && p.id <= 251">
          <a v-bind:href="'/pagepoke/' + p.id">{{ p.name }}</a>
        </td>
        <td v-if="p.id > 151 && p.id <= 251">
          <span :class="'img' + p.types[0].type.name"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
          >
          <span :class="'img' + p.types[1]?.type.name"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
          >
        </td>
        <td v-if="p.id > 151 && p.id <= 251">
          <img :src="p.sprites.front_default" />
        </td>
        <!-- <td v-if="p.id > 151"><img :src="p.sprites.front_shiny"></td> -->
      </tr>
    </table>
  </div>

  <div class="primeragen" v-if="prueba3">
    <h3>3 GEN</h3>
    <table class="table">
      <tr>
        <th scope="col" v-for="campo in columnasAgenda" :key="campo">
          {{ campo }}
        </th>
      </tr>
      <tr v-for="p in items" v-bind:key="p.id">
        <td v-if="p.id > 251 && p.id <= 386">{{ p.id }}</td>
        <td v-if="p.id > 251 && p.id <= 386">
          <a v-bind:href="'/pagepoke/' + p.id">{{ p.name }}</a>
        </td>
        <td v-if="p.id > 251 && p.id <= 386">
          <span :class="'img' + p.types[0].type.name"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
          >
          <span :class="'img' + p.types[1]?.type.name"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
          >
        </td>
        <td v-if="p.id > 251 && p.id <= 386">
          <img :src="p.sprites.front_default" />
        </td>
        <!-- <td v-if="p.id > 151"><img :src="p.sprites.front_shiny"></td> -->
      </tr>
    </table>
  </div>
</template>


<script>
import "@/components/pokedex/prueba.js";

import "@/assets/tipospoke.css";
export default {
  data() {
    return {
      pokemons: [],
      infopoke: [],
      poke: {},
      columnasAgenda: ["ID", "Nombre", "Tipos", "Sprit" /* 'Sprit Shiny' */],
      buscar: "",
      checkListDex: [],
      prueba1: true,
      prueba2: true,
      prueba3: true,
    };
  },

  computed: {
    items() {
      return this.infopoke.filter((item) => {
        return item.name.toLowerCase().includes(this.buscar.toLowerCase());
      });
    },
  },

  mounted() {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=386")
      .then((res) => res.json())
      .then((res) => (this.pokemons = res))
      .then((res) => {
        for (let i = 0; i < this.pokemons.results.length; i++) {
          fetch(
            "https://pokeapi.co/api/v2/pokemon/" + this.pokemons.results[i].name
          )
            .then((res) => res.json())
            .then((res) => this.infopoke.push(res));
        }
      });

    console.log(this.infopoke);
  },
  methods: {},
};
</script>

<style>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

.table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
  color: black;
}

.table th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 20px;
}

.table td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
.hola {
  margin-bottom: 10px;
}

.primeragen table tr td img {
  width: 35%;
  height: 35%;
}
</style>