import { defineComponent, h, onMounted, VNode, watch } from "vue";
import EasierScroll from 'easier-scroll'

export default defineComponent({
  inheritAttrs: false,
  props: {
    scrollPercentX: {
      type: Number,
      default: 0
    },
    scrollPercentY: {
      type: Number,
      default: 0
    },
    isHiddenScrollbar: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { slots }) {
    let allSlots: VNode[] = slots.default!()
    if (allSlots.length !== 1) {
      throw new Error(`Easier Scroll's slot expect only 1 root element as scroll container`)
    }

    let el
    let config
    const wrap: VNode = allSlots[0]
    const assign = Object.assign

    onMounted(() => {
      config = EasierScroll(el.el, {
        hidden: false
      })
      assign(config, props)
    })

    watch(() => props, (val) => {
      assign(config, val)
    }, {
      deep: true
    })
      
    return () => {
      el = h(wrap)
      return el
    }
  }
})