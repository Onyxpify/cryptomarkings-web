import jwt from 'jsonwebtoken';

export const hashIt = (data)=> new Promise(function(accept,reject){
    jwt.sign('chile', 'privateKey', { algorithm: 'RS256' }, function(err, token) {
        if(err) {
            accept(false);
        }else{
            accept(token)
        }
      });
});

