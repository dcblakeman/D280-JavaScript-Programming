const size = prompt();

function drawTriangle(size) { 
   let a = '';
   for(let i = 0; i <= size; i ++) {
      a = a + '\n' + '*'.repeat(i);
   }

   return a;
}

console.log(drawTriangle(size));