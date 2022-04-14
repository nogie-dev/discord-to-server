# discord-to-server

## deploy-command.js

---

<aside>
💡 Slash Command 등록 과정

</aside>

1. commands directory 아래에 있는 fileName을 가져옴
2. 반복문을 이용해 각 command file을 import 하여 object 형식의 데이터를 json 형식으로 바꾼 후  command list에 push 해줌
3. applicationGuildCommands를 통해 discord API로 전송

```json
**API Server로 보내는 commands list**

[
  {
    name: 'ping',
    description: 'response pong',
    options: [],
    default_permission: undefined
  },
  {
    name: 'server',
    description: 'response server information',
    options: [],
    default_permission: undefined
  }
]
```

- 각 command file의 Data 부분만 API Server로 전송
    - excute의 경우 command file에서 자체 처리
<br><br><br>
## index.js command setting

---

<aside>
💡 효율적인 command loading 방식

</aside>

1. commands directory 아래에 있는 fileName을 가져옴
2. 반복문을 이용해 command의 name과 command file import 한 결과를 **key:value** matching을 함
3. command를 꺼내올 때 get으로 value를 가져옴
4. 사실상 command file의 명령어 명과 excute 함수로 처리함

```jsx
//console.log(client.commands.get('ping'))
//value
{
  data: ae {
    options: [],
    name: 'ping',
    description: 'response pong',
    defaultPermission: undefined
  },
  excute: [AsyncFunction: excute]
}
```

```jsx
//console.log(client.commands)
//key:value table
Collection(2) [Map] {
  'ping' => {
    data: ae {
      options: [],
      name: 'ping',
      description: 'response pong',
      defaultPermission: undefined
    },
    excute: [AsyncFunction: excute]
  },
  'server' => {
    data: ae {
      options: [],
      name: 'server',
      description: 'response server information',
      defaultPermission: undefined
    },
    excute: [AsyncFunction: excute]
  }
}
```