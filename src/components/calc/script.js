import Field from '../ui/field/field'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
  name: 'calc',
  data: function () {
    return {
      showResults: false,
      activeTab: 0,
      defaultRangeOptions: {
        dotSize: 16,
        width: 'auto',
        height: 12,
        min: 0,
        max: 100,
        tooltip: 'none',
        railStyle: {
          backgroundColor: '#E9EEF2'
        }
      },
      pledge: [
        {
          label: 'BTC',
          value: 0,
          options: {
            dotStyle: {
              backgroundColor: '#FF7A00'
            },
            processStyle: {
              backgroundColor: '#FFA800'
            }
          }
        },
        {
          label: 'ETH',
          value: 0,
          options: {
            dotStyle: {
              backgroundColor: '#516ACC'
            },
            processStyle: {
              backgroundColor: '#7B96FF'
            }
          }

        },
        {
          label: 'TrueUSD',
          value: 0,
          options: {
            dotStyle: {
              backgroundColor: '#E01B44'
            },
            processStyle: {
              backgroundColor: '#FF728F'
            }
          }

        },
        {
          label: 'FVX',
          value: 0,
          options: {
            dotStyle: {
              backgroundColor: '#1A89FF'
            },
            processStyle: {
              backgroundColor: '#33C2FF'
            }
          }

        }
      ]
    }
  },
  methods: {
    handleTab (tab) {
      this.activeTab = tab
    },
    calculate () {
      this.showResults = true
    },
    edit () {
      this.showResults = false
    }
  },
  components: {
    Field,
    VueSlider
  }
}
