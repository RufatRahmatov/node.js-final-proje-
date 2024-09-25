// controllers/cardMaterial.js
const Material = require('../models/Material');


const getMaterials = async (req, res) => {
    try {
        const materials = await Material.find();
        res.json(materials);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching materials' });
    }
};


const addMaterial = async (req, res) => {
    const { name, description, color } = req.body;

    try {
        const newMaterial = new Material({
            name,
            description,
            color,
        });

        const material = await newMaterial.save();
        res.json(material);
    } catch (error) {
        res.status(500).json({ message: 'Error adding material' });
    }
};

module.exports = { getMaterials, addMaterial };
