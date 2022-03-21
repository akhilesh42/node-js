function func1(){
    return new promise(function (resolve,reject){
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log('function: your promise has been resolved')
                resolve();
            }
            else {
                console.log('function: your promise has not been resolved')
                reject('sorry not fulfilled');
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("akhil:thanks for resolving")
}). catch (function(error){
    console.log("akhil:very bad bro. Reason: " + error)
})