// To use ES module in nodejs we first have to define "type": "module" in package.json

// const express = require('express');
import express from 'express';

import resHandler from './response-handler.js';

const app = express();

app.get('/', resHandler);


app.listen(3000, console.log('started'));