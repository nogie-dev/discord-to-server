const fs = require('fs')
const path = require('path')
const {NodeSSH} = require('node-ssh')
const { tmpdir } = require('os')
// const EventEmitter = require('events');
// const myEvent = new EventEmitter();	

const ssh = new NodeSSH()

// myEvent.on('haha',()=>{
//     console.log("haha on")
// })

const userconfig={
    host: '172.16.17.6',
    username: 'seoho',
    password:'root',
    privateKey: '/Users/seoho/Desktop/project/discord-to-server/node_modules/ssh2/test/fixtures/id_rsa'
}

//ssh.connect(userconfig)

module.exports={
    init:async function(){
        return await ssh.connect(userconfig)
    },
    execTmpㄹ:async function(msg){
        return await ssh.execCommand(msg)
    }   
}
//최종적으로는 이 파일에 이용자가 원하는 서버 정보 및 본인의 키를 자동으로 기입되게끔 함