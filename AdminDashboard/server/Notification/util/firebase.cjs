const admin = require("firebase-admin");
const config = require("./key.cjs");
const serviceAccount = JSON.parse(JSON.stringify(config.config));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;