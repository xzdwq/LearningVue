## 1 Простой пример на VueJS 2
### Инициализируем проект на Vite и VueJS 2

- О сборщике Vite, почему не медленный и устаревший Webpack

`mkdir vue2`
`cd vue2`

```bush
npm init vite .
  - Package name: package.json
  - Select a framework: vue
```
---

Обновляем `package.json` на:

```json
{
  "name": "package.json",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^2.7.10"
  },
  "devDependencies": {
    "vite": "^3.0.9",
    "vite-plugin-vue2": "^2.0.2",
    "vue-template-compiler": "^2.7.10"
  }
}
```
---

Обновляем `vite.config.js` на:

```js
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2'

export default defineConfig({
  server: { port: 5173 },
  plugins: [vue2()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
```
---

Обновляем `src/main.js` на:

```js
import App from './App.vue'
import Vue from 'vue'

new Vue(App).$mount('#app')
```
---

Обновляем `src/App.vue` на:

```js
<template>
  <div id="app">
    <img src="@/assets/logo.png" alt="Vue logo" />
    <HelloWorld msg="Hello Vue 2 + Vite" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```
---

Обновляем `src/componenst/HelloWorld.vue` на:

```js
<template>
  <div>
    <h1>{{ msg }}</h1>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
      |
      <a href="https://vuejs.org/" target="_blank">Vue 2 Docs</a>
    </p>

    <button type="button" v-on:click="countIncrement">count is: {{ count }}</button>
    <p>{{ inputValue }}</p>
    <input v-bind:value="inputValue" v-on:input="changeInputValue">
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
      count: 0,
      inputValue: 'Input value'
    }
  },
  methods: {
    countIncrement() {
      this.count += 1;
    },
    changeInputValue(event) {
      // this.inputValue = event.target.value;
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
```
---

```bush
npm i
mpm run dev
  - http://localhost:5173/
```
---

- О `index.html` и монтировании в блок div с id = app (показать в main.js где именно происходит монтирование)
- О структуре построения проекта (SingleFileComponent) и компонентов
  - Блоки `<template>`, `<script>`, `<style>`
  - Участок интерполяции {{ }}
  - scoped для блока `<style>` (применение стилей только для компонента в котором он объявлен)
- О пропсах из `App.js` в `HelloWorld.vue` (как передаются)
- О хуках жизненного цикла на примере `HelloWorld.vue`
- О иммутабельности пропсов, почему лучше этого не делать
- О двустороннем связывании v-bind на примере `input` в `HelloWorld.vue`
  - О обновлении в интерполяции блока `<p>` значения из `input` только через метод
- О расширении для Chrome `Vue.js devtools`