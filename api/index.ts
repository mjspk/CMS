import  server  from './src/server';

server.launchServer().then(() => {
    console.log('Server launched');
}).catch((error) => {
    console.log(error);
});