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

    return {
      wrap: allSlots[0],
      config: {
        value: null
      },
      props
    }
  },
  render() {
    return h(this.wrap)
  },
  mounted() {
    this.config.value = EasierScroll(this.$el)
    Object.assign(this.config.value, this.props)
  },
  watch: {
    props: {
      handler(val) {
        Object.assign(this.config.value, val)
      },
      deep: true
    }
  }
})