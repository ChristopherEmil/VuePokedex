<template>
    <div class="about">
        <div v-for="poke in pokemonAPI" :key="poke.id">
            <div id="mw-indicator-numeropokemon" class="mw-indicator">
                <a href="/Listapokedex" title="Lista de Pokémon">
                <span id="enlacenumeropokemon" style="font-size:160%; color:#C2BDAD;">#<span style="font-size:140%;">
                    {{poke.id}}</span></span></a></div>
            <h1>{{poke.name[0].toUpperCase() + poke.name.slice(1)}}</h1>

        <div class="bodyconten">
            
                <div class="cuadro_poke variabletipo1 variabletipo2" :class="'type'+poke.types[0].type.name">
                    <div class="ctipo">
                    <div class="nombrepoke">{{poke.name[0].toUpperCase() + poke.name.slice(1)}}</div>
                    <div class="datospoke">
                        <div class="imagen"><a href=""><img :src="poke.sprites.front_default"></a></div>
                    </div>
                    <div class="sec sec-nacional">
                        <div class="h ctipo">
                            <a href="/Listapokedex">Nacional</a>
                        </div>
                        
                        <span v-if="poke.id <= 1">Ninguno</span>
                        <a v-bind:href="'/pagepoke/'+ (poke.id-1)" v-if="poke.id >= 2" >Atras </a>
                        ← 
                        <span></span>
                        <span class="numerodex">{{poke.id}}</span>
                        → 
                        <a v-bind:href="'/pagepoke/'+ (poke.id+1)">siguiente</a>

                    </div>
                    <div class="datos">
                        datos
                    </div>
                    <div class="tabladatos">
                        <table class="h ctipo"  >
                        <tbody>
                        <tr>
                            <th>Tipos</th>
                            <td v-if="poke.types[1] != null" >{{poke.types[0].type.name}}  {{poke.types[1].type.name}}</td>
                            <td v-else>{{poke.types[0].type.name}}</td>
                        </tr>
                        <tr>
                            <th>Habilidad</th>
                            <td>{{poke.abilities[0].ability.name}}</td>
                        </tr>
                        <tr v-if="poke.abilities[1] != null ">
                            <th>hab. Oculta</th>
                            <td>{{poke.abilities[1].ability.name}}</td>
                        </tr>
                        <tr>
                            <th>Peso</th>
                            <td>{{poke.weight}}</td>
                        </tr>
                        <tr>
                            <th>Altura</th>
                            <td>{{poke.height}}</td>
                        </tr>
                    </tbody>
                    </table>

                    </div>
                   
                </div>
             
            </div>
           
        </div>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        </p>
<div class="evo"  v-if="datosEvo[1]?.chain.evolves_to[0]?.evolution_details[0] != null" >
    <h2>Evoluciones</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and types</p>
     
      <div v-for="po1 in this.datosEvo[1]" :key="po1?.id">
        {{po1?.id}}
       
    </div>
   
    <table class="evolu" >
            <tbody>
                 <!-- Nombre -->
                <td>
                    <a href="" class="imagen"><img :src="datosEvo[2]?.sprites.front_default" alt=""></a>
                    <br/>
                    <a v-bind:href="'/pagepoke/'+datosEvo[1]?.chain.species.name" title="variable poke">
                        {{datosEvo[1]?.chain.species.name}}
                    </a>
                </td>
            <div class="evolu222" v-for="(poevo, index) in datosEvo[1]?.chain.evolves_to" :key="index">
                 <!-- Nivel y cosas -->
                 <td v-if="datosEvo[1]?.chain.evolves_to[0] != null">
                     <br/>
                       <span v-if="poevo.evolution_details[0].min_level != null"> 
                        Nivel {{poevo.evolution_details[0].min_level}}</span>
                     
                       <span v-if="poevo.evolution_details[0].item != null"> 
                         {{poevo.evolution_details[0].item.name}} </span>

                         <span v-if="poevo.evolution_details[0].min_happiness != null"> 
                         Amistad {{poevo.evolution_details[0].min_happiness}} + nivel </span>
                            
                </td>
                 <!-- Nombre -->
                <td>
                    <a href="" class="imagen"><img :src="datosEvo[3+index]?.sprites.front_default" alt=""></a>
                    <br/>
                    <a v-bind:href="'/pagepoke/'+poevo.species.name" title="variable poke">
                        {{poevo.species.name}}</a>
                </td>
            </div>
                 <!-- Nivel y cosas -->
                <td v-if="datosEvo[1]?.chain.evolves_to[0].evolves_to[0] != null">
                     <br/>
                            <!-- si es por nivel -->                     
                       <span v-if="datosEvo[1]?.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level != null"> 
                        Nivel {{datosEvo[1]?.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level}}</span>
                     <!-- si es con Objeto -->
                       <span v-if="datosEvo[1]?.chain.evolves_to[0].evolves_to[0].evolution_details[0].item != null"> 
                         {{datosEvo[1]?.chain.evolves_to[0].evolves_to[0].evolution_details[0].item.name}} </span>
                        <!-- Si es con Amitar  -->
                         <span v-if="datosEvo[1]?.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_happiness != null"> 
                         Amistad {{datosEvo[1]?.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_happiness}} + nivel </span>
                        <!-- Si es con intercambio -->
                        <span v-if="datosEvo[1]?.chain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name != null"> 
                          {{datosEvo[1]?.chain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name}}  </span>
                        </td>
                <!-- Nombre -->
                <td v-if="datosEvo[1]?.chain.evolves_to[0].evolves_to[0] != null">
                    <a href="" class="imagen"><img :src="datosEvo[4]?.sprites.front_default" alt="">
                    </a>
                    <br/>
                    <a v-bind:href="'/pagepoke/'+datosEvo[1]?.chain.evolves_to[0].evolves_to[0].species.name" title="variable poke">
                        {{datosEvo[1]?.chain.evolves_to[0].evolves_to[0].species.name}}
                    </a>
                </td>
            </tbody>
        </table> 
</div>
  
    </div>

    
        </div>
    
  </template>


<script>
import "@/assets/tipospoke.css";
export default {
    data(){

return{
    pokemonAPI:[],
    datosEvo:[],
    UrlEvo:"",
    evoname:[],


};

},


computed: {
    items() {
      
    },
    
  }, 


 mounted(){
    fetch("https://pokeapi.co/api/v2/pokemon/"+this.$route.params.id)
     .then((res)=>res.json())
    .then((res)=> this.pokemonAPI.push(res))
    //.then((res)=> console.log(this.pokemonAPI))
    if(this.pokemonAPI){
    fetch("https://pokeapi.co/api/v2/pokemon-species/"+this.$route.params.id)
    .then((res1)=>res1.json())
    .then((res1)=> this.datosEvo.push(res1))
    .then((res1)=> {
       // console.log(this.datosEvo[0].evolution_chain.url)
        fetch(this.datosEvo[0].evolution_chain.url)
        .then((res2)=>res2.json())
        .then((res2)=> this.datosEvo.push(res2))
        .then((res2)=> {
            //para la evoluciones de Eevvee
           
            if(this.datosEvo[1].chain.species.name){
                this.evoname.push(this.datosEvo[1].chain.species.name)
                console.log("existe")
                if(this.datosEvo[1].chain.evolves_to[0]?.species.name){
                    for(let i=0; i<this.datosEvo[1].chain.evolves_to.length; i++){

                        this.evoname.push(this.datosEvo[1].chain.evolves_to[i].species.name)
                //console.log(this.datosEvo[1].chain.evolves_to[i].species.name)
                }
              

                console.log("existe2")
                        if(this.datosEvo[1].chain.evolves_to[0].evolves_to[0]?.species.name){
                    console.log("existe3")
                           this.evoname.push(this.datosEvo[1].chain.evolves_to[0].evolves_to[0].species.name)

                        }
                }
            } 
           
           
      // this.evoname.push(this.datosEvo[1].chain.species.name,this.datosEvo[1].chain.evolves_to[0].species.name, this.datosEvo[1].chain.evolves_to[0].evolves_to[0].species.name)
      console.log(this.evoname)  
      for(let i=0; i < this.evoname.length; i++){
            fetch("https://pokeapi.co/api/v2/pokemon/"+this.evoname[i])
            .then((res)=>res.json())
           .then((res)=> this.datosEvo.push(res))
           /*  .then((res)=> console.log(this.datosEvo[i+2])) */
        } 
    })
}
   
    )
    }
    else {
        console.log("dato vacio")
    }
  //  console.log(this.datosEvo[4])
  
    },
methods:{
    hola(){
        console.log(this.datosEvo[1].chain) 
    }
}
  }
</script>

  <style>
 /*  @media (min-width: 1024px) {
    .about {
       min-height: 100vh;
      display: flex;
      align-items: center; 
    }
  } */
  .mw-indicator {
    display: -moz-inline-block;
    display: inline-block;
    line-height: 1.5em;
    font-size: 95%;
    margin-left: 95%;
}
   .cuadro_poke{
    width: 240px;
    float: right;
    text-align: center;
    color: black;
    
   
  }
  .imagen{
    background-color: white;
  }

  .bodyconten .cuadro_poke {
    padding: 8px 4px;
    border-radius: 10px;
}
.bodyconten .cuadro_poke div .tabladatos {
    background-color: white;

}
.bodyconten .cuadro_poke div table  {
    display: table;
    border-collapse: separate;
    box-sizing: border-box;
    text-indent: initial;
    border-spacing: 2px;
    border-color: grey;
}
.datospoke{
    overflow: hidden;
    width: 100%;
    margin: 4px 0;
    padding: 8px 0;
    background: white;
    color: black;
    border-radius: 8px; 
}
.evo{
    margin-right: 240px;
}
 /* .cuadro_poke{
    
    
  }

.cuadro_poke .datospoke{
    overflow: hidden;
    width: 100%;
    margin: 4px 0;
    padding: 8px 0;
    background: white;
    color: black;
    border-radius: 8px;
}
.bodyconten .cuadro_poke table {
    width: 100%;
    border-collapse: collapse;
    margin: auto;
    display: table;
}
.bodyconten .cuadro_poke table th {
 font-size: 15px;
 color: white;
} */
  </style>
