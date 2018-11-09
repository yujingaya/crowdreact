import firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp({
  apiKey: 'AIzaSyCFCb2D9uVpYyiiAwTiRN7YSyv851qq3j0',
  databaseURL: 'https://crowdreact-78b63.firebaseio.com',
  projectId: 'crowdreact-78b63'
})

export default firebase.database()
