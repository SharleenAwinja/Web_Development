function testPromiseA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("a");
    }, 5000);
  });
}

function testPromiseB() {
  return new Promise((resolve, reject) => {
    resolve("b");
  });
}

function testPromiseC() {
  return new Promise((resolve, reject) => {
    resolve("c");
  });
}

/*testPromiseA().then((result) => {
  console.log(result);
  return testPromiseB();
}).then((result) => {
    console.log(result);
    return testPromiseC();
}).then((result) => {
    console.log(result);
});*/

async function functionZ() {
    try {
    const firstResult = await testPromiseA();
    console.log(firstResult);
    const secondResult = await testPromiseB();
    console.log(secondResult);
    const thirdResult = await testPromiseC();
    console.log(thirdResult);
    console.log("All completed"); 
    return Promise.resolve("Finished");
    } catch(error) { 
        console.log(error);
        return Promise.reject("Error encountered")
    }
    
    
}



function functionAll() {
functionZ().then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});
console.log("Done");
}

functionAll();