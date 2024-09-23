/---------------------------------------------------------------

  function multiply(a){
    if(arguments.length > 1){
        return [...arguments].reduce((acc,curr)=> acc*=curr)
    }
 return function(b){
   return b !== undefined ? multiply(a*b) : a
 }
}

 multiply(2)(4)();

console.log(multiply(2,4) , multiply(2)(4)(8)())

  /------------------------------------------------------------


function partialargs(...initialargs){
   return function(...args){
     if(args.length == 0){
         return [...initialargs].reduce((acc, curr)=> acc+ curr)
     }
     
     return partialargs(...initialargs, ...args)
   }
}

console.log(partialargs(1,2)(3)())
