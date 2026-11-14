importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyAdK7SrmltojLLMZLoq4Yrhv1sy0ohWQMc",
  authDomain: "anjana-khata.firebaseapp.com",
  databaseURL: "https://anjana-khata-default-rtdb.firebaseio.com",
  projectId: "anjana-khata",
  storageBucket: "anjana-khata.firebasestorage.app",
  messagingSenderId: "812686172144",
  appId: "1:812686172144:web:7a2db5e4fd50e675fa8735"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title || "नयाँ सन्देश आयो!";
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'wife.jpg'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});