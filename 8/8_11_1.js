function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  try {
  	return primitiveMultiply(a, b);
  } catch(e) {
  	if(e instanceof MultiplicatorUnitFailure) {
    	console.log(" Wrong");
    }
    else {
    	throw e;
    }
  }
}

console.log(reliableMultiply(8, 8));


//official code here

// function MultiplicatorUnitFailure() {}
//
// function primitiveMultiply(a, b) {
//   if (Math.random() < 0.5)
//     return a * b;
//   else
//     throw new MultiplicatorUnitFailure();
// }
//
// function reliableMultiply(a, b) {
//   for (;;) {
//     try {
//       return primitiveMultiply(a, b);
//     } catch (e) {
//       if (!(e instanceof MultiplicatorUnitFailure))
//         throw e;
//     }
//   }
// }
