import database from './database.js'

export function sendEmotion (type) {
  database.ref('/').set({
    sender: '1',
    type: type,
    timestamp: '2018-11-09T13:11:01'
  })
}
