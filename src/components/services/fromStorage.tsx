export const getFromLocalstroage = (key:string)=> new Promise(function(accept,reject){
    let result = localStorage.getItem(key) || ''
    if(result === null) {
        console.log('wrong key');
        reject(null);
    }
    accept(JSON.parse(result));
}) 