import database from './database.js'

// 임시 선언 구간. 나중에 정식으로 서버에서 id 받는 기능을 만들어야 할 듯.
var id = 0xc0ffee
// type는 어떻게 할까?
//

export function sendEmotion (type) {
  database.ref('/').set({
    sender: id,
    type: type,
    timestamp: Date.now().toJSON()
  })
}

export function refresh () {
  // 아마도 파이어베이스에서 전체 감정 목록을 받아오는 기능.
}
