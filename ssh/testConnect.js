const sssh=require('./sshConnect')

const conn=sssh.init()
// conn.then((connection)=>{
//     connection.execCommand('ls')
//     .then((res)=>console.log(res['stdout']))
// })
async function hallo(){
    return await conn.then()
}

module.exports={
    test:async function(tmp){
        let t=await hallo().then((res)=>res.execCommand(tmp))
        //console.log(test)
        return t
    }
}
//연결은 한번만 하는게 목표