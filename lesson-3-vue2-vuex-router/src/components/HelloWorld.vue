<template>
  <div>
    <h1>{{ msg }}</h1>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
      |
      <a href="https://vuejs.org/" target="_blank">Vue 2 Docs</a>
    </p>

    <button type="button" v-on:click="countIncrement">count is: {{ count }}</button>
    <p>{{ $store.state.inputValue }}</p>
    <input v-bind:value="$store.state.inputValue" v-on:input="changeInputValue">
    <div style="padding-top: 10px;">
      <button type="button" v-on:click="$emit('changeData', 'New data')">Change parent data</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
      default: 'msg is empty'
    },
  },
  beforeCreate() {
    console.log('beforeCreate', this.count, this.count)
  },
  created() {
    console.log('created', this.$el, this.count)
    // setInterval(() => {
    //   this.count++
    // }, 1000)
  },
  mounted() {
    console.log('mounted', this.$el)
  },
  beforeUpdate() {
    console.log('beforeUpdated', this.count)
  },
  updated() {
    console.log('updated', this.$el)
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    countIncrement() {
      this.count += 1;
    },
    changeInputValue(event) {
      this.$store.commit('setInputValue', event.target.value)
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
