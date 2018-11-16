import database from './database.js'

// 임시 선언 구간. 나중에 정식으로 서버에서 id 받는 기능을 만들어야 할 듯.
const id = Math.floor(Math.random() * 200)

const rootRef = database.ref('/')

export function sendEmotion (type) {
  const now = new Date(Date.now())
  rootRef.push({
    sender: id,
    type: type,
    timestamp: now.toISOString()
  }).then((snapshot) => refresh())
  // TODO: 안정성 개선, 감정 데이터 제대로 보내졌는지 확인해 보기?
}

export function refresh () {
  // 아마도 파이어베이스에서 전체 감정 목록을 받아오는 기능.
  // 해야 할 것: 원격 파이어베이스 DB를 받아와서 내부 변수에 저장.
  // 주기적으로 실행되어야 함
  // 관건: 너무 비효율적으로 돌지 않게 하기 - 하지만 어차피 과목 프로젝트 레벨에선 사실 좀 혼잡해도 될 것 같음.
  // 일단은 성능 너무 걱정 않고 임시 구현으로 매번 전부 리로드하는 비효율적인 구조로 만들었음.
  rootRef.once('value', (snapshot) => {
    const recent = new Date(Date.now() - recentThreshold)
    const ssjson = snapshot.toJSON()
    emotions.length = recentEmotions.length = 0
    for (const key in ssjson) {
      ssjson[key].sender = Number.parseInt(ssjson[key].sender)
      ssjson[key].timestamp = Date.parse(ssjson[key].timestamp)
      emotions.push(ssjson[key])
      if (ssjson[key].timestamp > recent) recentEmotions.push(ssjson[key])
    }
  })

  console.log(emotions)
  console.log(recentEmotions)
}

export const emotions = []
export const recentEmotions = []
export const recentThreshold = 300000 // 최근의 기준은 몇 밀리세컨드? 지금 값인 30만은 5분을 의미함

export function initialize () {
  const rootRef = database.ref('/')
  rootRef.on()
}
