import Field from '../ui/input/input'

export default {
  name: 'calc',
  data: function () {
    return {
      activeTab: 0
    }
  },
  methods: {
    handleTab (tab) {
      this.activeTab = tab
    }
  },
  components: {
    Field
  }
}
