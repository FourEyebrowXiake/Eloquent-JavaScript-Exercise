function withBoxUnlocked(body) {
  try {
    box.unlock();
  	body();
  } finally {
  	box.lock();
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);


// official code here
//
// function withBoxUnlocked(body) {
//   var locked = box.locked;
//   if (!locked)
//     return body();
//
//   box.unlock();
//   try {
//     return body();
//   } finally {
//     box.lock();
//   }
// }
