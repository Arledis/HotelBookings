const baseUrl = 'http://localhost:3000/api/bookings/'

export default {
  getBookings(){
    return fetch(baseUrl)
    .then(res => res.json())
  },
  postBooking(playload){
    return fetch(baseUrl,{
      method: 'POST',
      body: JSON.stringify(playload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  deleteBooking(id){
    return fetch(baseUrl + id, {
      method: 'DELETE'
    })
  }
}
