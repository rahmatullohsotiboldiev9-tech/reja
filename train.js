Task - B 

unction countDigits(str) {
  let count = 0;
  for (let char of str) {
    if (char >= '0' && char <= '9') {
      count++;
    }
  }
  return count;
}

console.log(countDigits("ad2a54y79 wet0sfgb9")); // 7








////// CALLBACK FUNCTIONS
/*console.log("Jack Ma maslahatlari");
const list = [
  "yahshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
];

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });
  }
    
}
console.log('passed here 0');
maslahatBering(55, (err, data) => {
  if (err) console.log("ERROR:", err);
  console.log("javob:", data);
});
console.log('passed here 1');*/


//// ASYNC FUNCTION

/*console.log("Jack Ma maslahatlari");
const list = [
  "yahshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
];

async function maslahatBering(a,) {
  if (typeof a !== "number") throw new err("insert a number",);
  else if (a <= 20) returnlist[0];
  else if (a > 20 && a <= 30) returnlist[1];
  else if (a > 30 && a <= 40) returnlist[2];
  else if (a > 40 && a <= 50) returnlist[3];
  else if (a > 50 && a <= 60) returnlist[4];
  else {

  return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(list[5]);
  }, 5000);
});
  
    }
    
}*/


// call via then/catch
// console.log("passed here 0");
// maslahatBering(65)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// asyn/await
//async function run() {
  //let javob = await maslahatBering(25);
 // console.log(javob);
 //javob = await maslahatBering(70);
  //console.log(javob);
  //javob = await maslahatBering(41);
  //console.log(javob);
//run();



// Mit Assignment-A

/*function countLetter(letter, word, callback) {
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            count++;
        }
    }

    callback(count);
}

countLetter("e", "engineer", function(count) {
    console.log(count);
});*/
