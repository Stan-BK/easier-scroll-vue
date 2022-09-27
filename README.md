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

app.use(EasierScroll)
app.mount('#app')

```
```HTML
<easier-scroll>
  <div> // require one root element, easier-scroll will deal with it as a scroll container
    <div> // only allow one children for container
      ...
    </div>
  </div>
</easier-scroll>

<easier-scroll>
  <your-component></your-component> // you can also extract inner content as a component
</easier-scroll>
```