#!/bin/bash
apt update -y
apt install -y nodejs npm mongodb

# Simple Node.js app
mkdir /nodeapp
cat <<EOF > /nodeapp/index.js
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello from Azure VM!'));
app.listen(3000, () => console.log('Listening on port 3000'));
EOF

cd /nodeapp
npm init -y
npm install express

# Start app
nohup node index.js &
