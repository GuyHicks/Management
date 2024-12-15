const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { db } = require('../models/db');

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET;
