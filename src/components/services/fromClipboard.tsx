export const fromClipboard = ()=> new Promise (function(accept:any,reject:any) {
    navigator.clipboard.readText()
  .then(text => {
    accept(JSON.parse(text));
  })
  .catch(err => {
    reject(err);
  });
})