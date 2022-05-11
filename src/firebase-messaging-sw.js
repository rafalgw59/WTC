importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyD09Ht_Ol3yyZGcib8qgng1AfU4XW7jjBY",
  authDomain: "worktime-clock.firebaseapp.com",
  databaseURL: "https://worktime-clock-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "worktime-clock",
  storageBucket: "worktime-clock.appspot.com",
  messagingSenderId: "163498066265",
  appId: "1:163498066265:web:ba4d046de8aff2de980c48"
});

const messaging = firebase.messaging();
