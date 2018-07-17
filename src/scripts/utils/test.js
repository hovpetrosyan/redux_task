import APIcall from './requestUtils';
const APIcall = require('./requestUtils');
APIcall(fetch,'http://localhost:3000/api/todo','post',{data:'hello world'}).then((data) => console.log(data));
