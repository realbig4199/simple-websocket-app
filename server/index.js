// 설치한 ws 모듈로 Websocket 라이브러리 임포트
const WebSocket = require("ws");
// Server 객체를 생성하고 포트를 7071로 설정
// 변수명을 Web Socket Server의 약자인 wss로 설정
const wss = new WebSocket.Server({ port: 7071 });

// on 메서드 : 이벤트 핸들러를 등록하는 메서드
// connection 이벤트 : 클라이언트가 서버에 연결되었을 때 발생하는 이벤트
wss.on("connection", (ws) => {
  // 연결된 클라이언트에게 connected 메시지를 전송
  ws.send("connected");
  // message 이벤트 : 클라이언트로부터 메시지를 받았을 때 발생하는 이벤트
  ws.on("message", (messageFromClient) => {
    // 클라이언트로부터 받은 메시지를 JSON 형태로 파싱
    const message = JSON.parse(messageFromClient);
    console.log(message);
  });
});
