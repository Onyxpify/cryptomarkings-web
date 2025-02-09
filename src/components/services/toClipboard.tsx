export const toClipboard = (text:any)=> new Promise(function(accept:any,reject:any) {
    navigator.clipboard
    .writeText(JSON.stringify(text))
    .then(()=> {
        accept(true)
    })
    .catch(()=> {
        reject(false)
    })
})