import { defineComponent, h, onMounted, VNode } from "vue";
import EasierScroll from 'easier-scroll'

export default defineComponent({
  setup(props, { slots }) {
    let allSlots: VNode[] = slots.default!()
    if (allSlots.length !== 1) {
      throw new Error(`Easier Scroll's slot expect only 1 root element as scroll container`)
    }

    let el
    const wrap: VNode = allSlots[0]

    onMounted(() => {
      EasierScroll(el.el)
    })
    
    return () => {
      // return h('h1', 'hhh')
      el = h(wrap)
      return el
    }
  }
})