const express = require('express');
const jwt = require('jsonwebtoken');
const { db } = require('../models/db');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();