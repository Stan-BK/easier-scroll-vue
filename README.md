# easier-scroll-vue
easiser-scroll in Vue

more detail see <https://github.com/Stan-BK/easier-scroll#readme>
# Install
```
npm install easier-scroll-vue
```
# Usage
```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import EasierScroll from 'easier-scroll-vue'
const app = createApp(App)

// Easier-Scroll component will be registered as a global component, you can use it directly in template
app.use(EasierScroll)
app.mount('#app')

```
```html
// template.vue

<script setup>
const X = ref(0)
const Y = ref(0)
const isHidden = ref(true)
</script>
```
```HTML
// template.vue

<template>
  // can access scrollLeft/scrollTop/scrollbarVisibility by reactive value
  <easier-scroll :scrollPercentX="X" :scrollPercentY="Y" :isHiddenScrollbar="hidden">
    <div> // require one root element, easier-scroll will deal with it as a scroll container
      <div> // only allow one root children for container
        ...
      </div>
    </div>
  </easier-scroll>

  <easier-scroll>
    <your-component></your-component> // you can also extract inner content as a component
  </easier-scroll>
</template>
```