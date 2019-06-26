<template lang="">
  <form v-on:submit="handleSubmit" method="post" id="booking-form">
    <h2>Register Booking</h2>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input v-model="name" type="text" id="name" required/>
    </div>
    <div class="formWrap">
      <label for="email">Email:</label>
      <input v-model="email" type="text" id="email" required/>
    </div>
    <div class="formWrap">
      <label for="CheckedIn">CheckedIn</label>
      <input v-model="checkedIn" type="checkbox" id="checkedIn">
    </div>
    <input type="submit" id="Save" value="Save">
  </form>
</template>

<script>
import { eventBus } from '../main.js'
import BookingsService from '../services/BookingsService.js'

export default {
  name: "booking-form",
  data(){
    return{
      name: "",
      email: "",
      checkedIn: null
    }
  },
  methods: {
    handleSubmit(e){
      e.preventDefault()
      const booking = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      }
      BookingsService.postBooking(booking)
      .then(res => eventBus.$emit('booking-added', res));

      this.name = this.email = "";
      this.checkedIn = false
    }
  }
}

</script>

<style lang="css" scoped>
h2 {
	margin: 10px 0;
	padding: 0;
}

form {
	width: 35%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}

label {
	min-width: 100px;
	display: inline-block;
}

.formWrap {
	margin-bottom: 10px;
}

#Save{
  	color: #fff;
  	border: none;
  	font-size: 18px;
  	padding: 10px;
  	margin-top: 10px;
  	background: rgb(10,56,79);
}
</style>
