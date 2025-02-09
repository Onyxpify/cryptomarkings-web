export const toClipboard = (text)=> new Promise(function(accept,reject) {
    navigator.clipboard
    .writeText(JSON.stringify(text))
    .then(resp=> {
        accept(true)
    })
    .catch(err=> {
        reject(false)
    })
})