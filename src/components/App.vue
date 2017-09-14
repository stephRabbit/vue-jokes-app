<template>
  <div id="app">
    <h1>{{title}}</h1>
    <button
      @click="initJokes"
      class="btn btn-outline-success joke-btn"
    >
      Get Ten Random Jokes
    </button>
    <button
      @click="addJoke"
      class="btn btn-outline-success joke-btn"
    >
      Get Random Joke
    </button>
    <div class="joke-filters">
      <span
        v-for="(type, index) in types"
        :key="index"
      >
        <label>
          <input
            type="checkbox"
            :value="type"
            v-model="checkedTypes"
            checked
          >
          {{type}}
        </label>&nbsp;
      </span>
    </div>
    <div class="row joke-container">
      <!-- {{$store.state}} -->
      <Joke
        v-for="(joke, index) in $store.state.jokes"
        v-show="checkedTypes.includes(joke.type)"
        :index="index"
        :joke="joke"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import Joke from './Joke.vue';

  export default {
    name: 'app',
    data() {
      return {
        title: 'Vue Jokes',
        types: ['general', 'knock-knock', 'programming'],
        checkedTypes: ['general', 'knock-knock', 'programming']
      }
    },
    methods: mapActions([
      'initJokes',
      'addJoke'
    ]),
    components: {
      Joke
    }
  };
</script>

