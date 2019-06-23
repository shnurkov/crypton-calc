import ExchangeRates from '../components/exchange-rates/exchange-rates'
import Calc from '../components/calc/calc'
import api from '../rates.json'
export default {
  name: 'app',
  data: function () {
    return {
      rates: api
    }
  },
  components: {
    ExchangeRates,
    Calc
  }
}
