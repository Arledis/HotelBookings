<template>
  <div id="app">
    <header>
      <h1>Hotel Breakdown</h1>
        <booking-form/>
    </header>
      <booking-grid :bookings="bookings"/>
  </div>

</template>

<script>
import BookingForm from './components/BookingForm.vue';
import BookingGrid from './components/BookingGrid.vue';
import BookingsService from './services/BookingsService.js';
import { eventBus } from './main.js';

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

}
* {
  margin-top: 0;
  padding: 0;
}
html {
  height: 100%;
}

header {
  background: url('./assets/paris.png');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
h1 {
  text-align: center;
  color: white;
  font-size: 70px;

}

/* body::after {
 content: “”;
 background: url('./assets/hotel.png');
 opacity: 0.15;
 top: 0;
 left: 0;
 bottom: 0;
 right: 0;
 position: fixed;
 z-index: -1;
 background-size: 100%;
 background-repeat: no-repeat;
} */
</style>
