const Material = require('../models/Material');

const getMaterials = async (req, res) => {
    try {
        const materials = await Material.find();
        res.json(materials);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching materials' });
    }
};

const deleteMaterial = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedMaterial = await Material.findByIdAndDelete(id);
        if (!deletedMaterial) {
            return res.status(404).json({ message: 'Material not found' });
        }
        res.json({ message: 'Material deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting material', error });
    }
};



const addMaterial = async (req, res) => {
    const { name, brand, price, discountPrice, colors, sizes, tags, material, availability, imageUrl, createdAt } = req.body;


    try {
        const newMaterial = new Material({
            name,
            brand,
            price,
            discountPrice,
            colors,
            sizes,
            tags,
            material,
            availability,
            imageUrl,
            createdAt
        });

        const savedMaterial = await newMaterial.save();
        res.status(201).json(savedMaterial);
    } catch (error) {
        console.error('Error adding material:', error);
        res.status(500).json({ message: 'Error adding material', error });
    }
};

module.exports = { getMaterials, addMaterial, deleteMaterial };
