const sssh=require('./sshConnect')

const conn=sssh.init()
conn.then((connection)=>{
    connection.execCommand('ls')
    .then((res)=>console.log(res['stdout']))
})
//연결은 한번만 하는게 목표