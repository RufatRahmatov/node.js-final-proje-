const express = require('express');
const { getMaterials, addMaterial, deleteMaterial } = require('../controllers/cardMaterial');

const router = express.Router();


router.get('/materials', getMaterials);

router.post('/materials', addMaterial);

router.delete('/materials/:id', deleteMaterial);

module.exports = router;
