// const clock = document.getElementById('clock') // we can also used this 
 const clock = document.querySelector('#clock')

// setInterval is used to count interval  ( in millisecond) 
// setInterval(function(){}, 1000) syntax 

setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
// console.log(date.toLocaleTimeString()); // only Current time
},100)