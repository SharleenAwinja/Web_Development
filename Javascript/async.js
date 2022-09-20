function testPromise(a) {
    return new Promise((resolve, reject) => {
        if(a % 2 === 0) {
            resolve("Divisible by 2");
        } else {
            reject("Not divisible by 2");
        }
    })
}

testPromise(7).then(result => {
    console.log(`Result: ${result}`);
}).catch(error => {
    console.log(`Error: ${error}`);
})

function mySync() {
    setTimeout(() => {
        console.log("a");
    }, 2000);
    setTimeout(() => {
        console.log("b");
    }, 2000);
    setTimeout(() => {
        console.log("c");
    }, 2000);
    
}

mySync();