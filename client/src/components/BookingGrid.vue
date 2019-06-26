<template lang="html">
<div id="bookingsGrid">
  <div class="booking" v-for="booking in bookings">
    <h2>{{booking.name}}</h2>
    <p>{{booking.email}}</p>
    <label for="">CheckedIn</label>
    <input type="checkbox" name="checkedIn" value="checkedIn">
  </div>

</div>
</template>

<script>
import {eventBus} from '../main.js'
import BoookingsService from '../services/BookingsService.js'

export default {
  name: "booking-grid",
  props: ["bookings"],

}
</script>

<style lang="css" scoped>
</style>
