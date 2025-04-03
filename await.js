const sleep = (ms) => new Promise( res => setTimeout(()=>res(ms+'ms'), ms) );

// sleep(100)
// .then( v => console.log('p1 resolved to', v) )
// .then( v => sleep(1000) )
// .then( v => console.log('p2 resolved to', v) )

async function myFn () {
    let v = await sleep(100)
    console.log('p1 resolved to', v)
    v = await sleep(1000)
    console.log('p2 resolved to', v)
}
myFn();
console.log("Program ended");
myFn();

