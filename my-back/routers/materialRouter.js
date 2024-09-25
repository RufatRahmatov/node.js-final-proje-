// routes/materials.js
const express = require('express');
const { getMaterials, addMaterial } = require('../controllers/cardMaterial');

const router = express.Router();


router.get('/', getMaterials);

router.post('/', addMaterial);

module.exports = router;
