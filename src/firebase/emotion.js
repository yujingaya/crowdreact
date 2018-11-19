import database from './database.js'

export const emotionsRef = database.ref('/emotions')

export function sendEmotion (type) {
  database.ref('/emotions').push({
    sender: '1',
    type: type,
    timestamp: Date.now()
  })
}
