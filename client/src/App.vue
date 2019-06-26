<template>
  <div id="app">
    <h1>Bookings</h1>
    <booking-grid :bookings="bookings"/>
  </div>
</template>

<script>
import BookingForm from './components/BookingForm.vue'
import BookingGrid from './components/BookingGrid.vue'
import BookingsService from './services/BookingsService.js'

export default {
  name: 'app',
  data() {
    return {
      bookings: []
    }
  },
  components: {
    'booking-form': BookingForm,
    'booking-grid': BookingGrid

  },
  mounted (){
    fetch('http://localhost:3000/api/bookings')
    .then(res => res.json())
    .then(bookings => this.bookings = bookings)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
