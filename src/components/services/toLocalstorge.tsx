export const saveToLocalstroage = (key:string,value:any,override?:boolean) => new Promise(function(accept,){
    if(typeof key != "string") {
        throw Error('key must be a string but got ' + typeof key)
    }
    if(key === undefined || value === undefined) {
        throw Error('expected two argument but got one. example: saveToLocalstroage(key,value)')

    }
    if(localStorage.getItem(key) != null) {
       
        if(!(override===undefined || override === false)) {
            // by default override is true. to make it false pass true 
            console.log('this key already exist')
            return;
        }
    }
    localStorage.setItem(key, JSON.stringify(value));
    accept(true);
}
) 
