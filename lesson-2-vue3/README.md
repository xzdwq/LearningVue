## 2 Простой пример на VueJS 3 в аналогии с VueJS 2
### Инициализируем проект на Vite и VueJS 3 + TS

`mkdir vue3`
`cd vue3`

```bush
npm create vite@latest . -- --template vue-ts
```
---
Обновляем `vite.config.js` на:

```js
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  server: { port: 5173 },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
```
---
Обновляем `src/App.vue` на:

```js
<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

```
---

Обновляем `src/componenst/HelloWorld.vue` на:
```js
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
```
---

```bush
npm i
mpm run dev
  - http://localhost:5173/
```
---

- О сохранившемся принципе монтирования в id = app (main.js само монтирование)
- О сохранившейся структуре проекта и компонентов
  - Блоки `<template>`, `<script>`, `<style>`
  - Участок интерполяции {{ }}
  - scoped для блока `<style>` (применение стилей только для компонента в котором он объявлен)
  - О SFC методе написания скриптов (`<script setup>`), который избавляет от необходимости оборачивать в `export default`
- О новом методе объявления пропсов `withDefaults`, `defineProps` и типизации
- О том что иммутабельность пропсов все так же плохо (и всегда будет плохо)
- О двустороннем связывании `:value` на примере `input` в `HelloWorld.vue`
  - О обновлении в интерполяции блока `<p>` значения из `input` только через метод
- О реактивной ссылке `ref` (замена обращения через this во Vue2 к данным)
- О хуках жизненного цикла
  - Во vue 3 пропала необходимость в beforeCreate и created, они отрабатывают на уровне скрипта