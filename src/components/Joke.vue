<template>
  <div class="col-6">
    <div class="joke-card">
      <div class="card-block">
        <p>
          <strong>
            {{joke.setup}}
          </strong>
        </p>
        <p>
          <i>
            {{joke.punchline}}
          </i>
        </p>
      </div>
      <button class="joke-remove-btn" @click="removeJoke(index)">
        <span>&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: ['joke', 'index'],
    methods: mapActions([
      'removeJoke'
    ])
  }
</script>

