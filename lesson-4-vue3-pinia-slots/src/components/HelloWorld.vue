<template>
  <div ref="divEl">
    <h1>{{ msg }}</h1>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>{{ inputValue }}</p>
      <input :value="inputValue" @input="inputValue = $event.target.value">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue'

withDefaults(
  defineProps<{ msg: string }>(),
  {
    msg: 'msg is empty'
  }
)

const count = ref<number>(0),
  divEl = ref<HTMLElement>(),
  inputValue = ref('Input value');

console.log('beforeCreate | created', divEl.value, count.value)


// setInterval(() => {
//   count.value++
// }, 1000)

onBeforeMount(() => {
  console.log('onBeforeMount', divEl.value, count.value)
})

onMounted(() => {
  console.log('onMounted', divEl.value, count.value)
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate', count.value)
})

onUpdated(() => {
  console.log('onUpdated', count.value)
})
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
