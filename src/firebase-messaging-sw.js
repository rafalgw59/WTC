// importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js');

import { initializeApp } from 'firebase/app'
import { getMessaging, getToken, onMessage } from 'firebase/messaging'
import { environment } from './environments/environment'

console.log('test')
initializeApp(environment.firebaseConfig)

const messaging = getMessaging(environment.firebaseConfig)
let token = getToken(messaging, {
    vapidKey:
        'BHfrj5JYrjCkjqCQpsgXiZd0KguQ08iSJx9T5demScfObbUF5vMhYa4z0T3Kp8A7dRBjZqUIbWwX9C8O9mo5uvI',
})
    .then((currentToken) => {
        if (currentToken) {
            // Send the token to your server and update the UI if necessary
            // ...
        } else {
            // Show permission request UI
            console.log(
                'No registration token available. Request permission to generate one.'
            )
            // ...
        }
    })
    .catch((err) => {
        console.log('An error occurred while retrieving token. ', err)
        // ...
    })

// background message
onBackgroundMessage(messaging, (payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    )
    // przygotowuje wiadomosc
    const notificationTitle = 'Dummy title'
    const notificationOptions = {
        body: 'Dummy body',
        icon: './favicon.ico',
    }
    webpush: {
        fcmOptions: {
            // link, zeby po kliknieciu na notyfikacje wracal do strony
            link: 'https://zegarek.cc/pl'
        }
    }

    // zeby sie pojawiła notyfikacja
    self.registration.showNotification(notificationTitle, notificationOptions)
})

// foreground
onMessage(messaging, (payload) => {
    console.log('Message received: ', payload)
    // WIP
})
