import ExchangeRates from '../components/exchange-rates/exchange-rates'
import Calc from '../components/calc/calc'
import api from '../rates.json'
export default {
  name: 'app',
  data: function () {
    return {
      rates: api,
      showRates: false
    }
  },
  mounted () {
    if (window.innerHeight > 935) {
      this.showRates = true
    }
  },
  methods: {
    handleOpenCloseRates () {
      this.showRates = !this.showRates
    }
  },
  components: {
    ExchangeRates,
    Calc
  }
}
