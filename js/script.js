let cars = confirm('хотите купить машину?') 

if(cars) {
  let q = prompt('какую из этих машин вы хотите купить? ( 1.BMW   2.Lacetti  3.Captiva 4.Lamborgini 5.Ferrari )')
  let car1 = 1
  let car2 = 2
  let car3 = 3
  let car4 = 4
  let car5 = 5
  

   if ( q === car1) {
      alert('ваша машина BMW, поздравляю с покупкой')
   } else if (q === car2) {
      alert('ваша машина Lacetti, поздравляю с покупкой')
   } else if (q === car3) {
      alert('ваша машина Captiva, поздравляю с покупкой')
   } else if (q === car4) {
      alert('ваша машина Lamborgini, поздравляю с покупкой')
   } else if (q === car5) {
      alert('ваша машина Ferrari, поздравляю с покупкой')
   }
 
   else {
    alert('go home')
}

} else {
    alert('go home')
}