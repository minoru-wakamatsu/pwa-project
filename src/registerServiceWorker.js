/* eslint-disable no-console */

import { register } from "register-service-worker";

// import {Queue} from 'workbox-background-sync';
// const queue = new Queue('myQueueName');

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      console.log("New content is available; please refresh.");
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
  });
}

// self.addEventListener('fetch', (event) => {
//   // Add in your own criteria here to return early if this
//   // isn't a request that should use background sync.
//   console.log('addEventListener fetch');
//   if (event.request.method !== 'POST') {
//     return;
//   }

//   const bgSyncLogic = async () => {
//     try {
//       const response = await fetch(event.request.clone());
//       return response;
//     } catch (error) {
//       await queue.pushRequest({request: event.request});
//       return error;
//     }
//   };

//   event.respondWith(bgSyncLogic());
// });
