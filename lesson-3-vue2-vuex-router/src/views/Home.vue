<template>
  <div class="home">
    <div>{{ initPageText }}</div>
    <HelloWorld msg="Hello Vue 2 + Vite" @changeData="changeData($event)" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      initPageText: 'Home page'
    }
  },
  methods: {
    changeData($event) {
      this.initPageText = $event
    }
  }
}
</script>
