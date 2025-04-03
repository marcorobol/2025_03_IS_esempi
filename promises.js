// Promise.resolve(123).then( v => console.log('resolved to', v) );
// console.log(Promise.resolve(123));
// console.log(Promise.reject(123));

const wait = (ms) => new Promise( res => setTimeout(()=>res(ms+'ms'), ms) );

const p1 = wait(100)
.then( v => console.log('p1 resolved to', v) )
.then( v => wait(1000) )
.then( v => console.log('p2 resolved to', v) )

console.log("Program ended");
