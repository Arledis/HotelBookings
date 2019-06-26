<template lang="html">
<div id="bookingsGrid">
  <div class="booking" v-for="booking in bookings">
    <h2>{{booking.name}}</h2>
    <p>{{booking.email}}</p>
    <label for="">CheckedIn</label>
    <input v-if="booking.checkedIn" checked="checked" type="checkbox" id="checkedIn">
    <div class="">
      <button v-on:click="handleDelete(booking._id)">Delete Booking</button>
    </div>
    </div>
</div>
</template>

<script>
import {eventBus} from '../main.js'
import BookingsService from '../services/BookingsService.js'

export default {
  name: "booking-grid",
  props: ["bookings"],

  mounted(){
    eventBus.$on('booking-added', (booking) => {
      this.bookings.push(booking)
    })
    eventBus.$on('booking-deleted', (id) => {
      let index = this.bookings.findIndex(booking => booking._id === id)
      this.bookings.splice(index, 1)
    });
  },
  methods: {
    handleDelete(id) {
      BookingsService.deleteBooking(id)
      .then(res => eventBus.$emit('booking-deleted', id));
    }
  }
}
</script>

<style lang="css" scoped>

#bookingsGrid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}

h2 {
	padding: 0;
	margin: 0;
}

.booking {
	width: 30%;
	background: radial-gradient(circle, rgba(80,120,140,1) 0%, rgba(153,172,191,1) 72%);
	margin-bottom: 20px;
	padding: 25px;
}

button {
	color: #fff;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: rgb(10,56,79);
}
</style>
