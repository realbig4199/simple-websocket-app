// 클라이언트는 웹소켓 객체를 통해 서버와 통신

// 웹 소켓 객체를 생성
// url은 서버의 주소와 포트 번호를 입력 + ws 프로토콜을 사용
const ws = new WebSocket("ws://localhost:7071/ws");

// onmessage 이벤트 핸들러
// 서버로부터 메시지를 받을 때마다 실행되는 이벤트 핸들러
// 각 이벤트에 따라 전달되는 인수가 정해져 있음
// onmessage 이벤트 핸들러의 인수는 webSocketMessage
ws.onmessage = (webSocketMessage) => {
  console.log(webSocketMessage);
  // data 프로퍼티에 서버로부터 받은 메시지가 담겨 있음
  console.log(webSocketMessage.data);
};

// onmousemove 이벤트 핸들러
// 마우스 이동 이벤트가 발생할 때마다 실행되는 이벤트 핸들러
// 각 이벤트에 따라 전달되는 인수가 정해져 있음
// onmousemove 이벤트 핸들러의 인수는 event
document.body.onmousemove = (event) => {
  // event는 마우스 이동 이벤트 객체를 나타내며
  // clientX, clientY 프로퍼티에 마우스 커서의 x, y 좌표가 담겨 있음
  const messageBody = {
    x: event.clientX,
    y: event.clientY,
  };
  // WebSocket은 문자열 데이터를 주고 받으므로, 객체를 JSON 문자열로 변환
  ws.send(JSON.stringify(messageBody));
};
