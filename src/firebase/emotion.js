import database from './database.js'

// 사용할지 고민 중.
/*
const emotionType = {
  a = 0,
  b = 1,
  c = 2,
  d = 3,
  e = 4,
  f = 5
}
*/

// 임시 선언 구간. 나중에 정식으로 서버에서 id 받는 기능을 만들어야 할 듯.
var id = 0xc0ffee
// type는 어떻게 할까?
//

const rootRef = database.ref('/')


export function sendEmotion (type) {
  rootRef.set({
    sender: id,
    type: type,
    timestamp: Date.now().toJSON()
  })
}

export function refresh () {
  // 아마도 파이어베이스에서 전체 감정 목록을 받아오는 기능.
  // 해야 할 것: 원격 파이어베이스 DB를 받아와서 내부 변수에 저장.
  // 주기적으로 실행되어야 함
  // 관건: 너무 비효율적으로 돌지 않게 하기 - 하지만 어차피 과목 프로젝트 레벨에선 사실 좀 혼잡해도 될 것 같음.
  
}

export function () {
  
}
