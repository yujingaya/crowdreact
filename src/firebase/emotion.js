import database from './database.js'

// rehydrate 해도 좋을듯?
function uuid (a) {
  return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid)
}

const myId = uuid()

export const emotionsRef = database.ref('/emotions')

export function sendEmotion (type) {
  database.ref('/emotions').push({
    sender: myId,
    type: type,
    timestamp: Date.now()
  })
}
