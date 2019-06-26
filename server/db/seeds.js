use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Mickey Mouse",
    email: "mickeymouse@disneyworld.com",
    checkedIn: true
  },
  {
    name: "Goofy",
    email: "goofy@disneyworld.com",
    checkedIn: false
  },
  {
    name: "Donald Duck",
    email: "donald.duck@disneyworld.com",
    checkedIn: true
  }
])
