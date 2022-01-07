## How to run the tests

1. Go into the server directory `cd server`
2. Run `npm install` to install packages
3. Create your environment variable (.env) file (and add your MONGO_URI to the .env vars)
4. Run `npm run dev` to start the server
5. Open a new terminal window and cd back into the `server` file
5. Run `npm run test` to run the tests
6. Done!
---
You may need to change the app variable in test/auth.spec.js depending on where your server is hosted on your local machine