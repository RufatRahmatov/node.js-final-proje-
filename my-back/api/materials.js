
import Material from '../../models/Material';
import connectDB from '../db/ConnectDB';

export default async function handler(req, res) {
    await connectDB();

    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const materials = await Material.find({});
                res.status(200).json({ success: true, data: materials });
            } catch (error) {
                res.status(500).json({ success: false, message: 'Server Error' });
            }
            break;
        case 'POST':
            try {
                const material = new Material(req.body);
                await material.save();
                res.status(201).json({ success: true, data: material });
            } catch (error) {
                res.status(400).json({ success: false, message: 'Error adding material' });
            }
            break;
        case 'PUT':
            try {
                const { id } = req.query;
                const updatedMaterial = await Material.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true,
                });

                if (!updatedMaterial) {
                    return res.status(404).json({ success: false, message: 'Material not found' });
                }

                res.status(200).json({ success: true, data: updatedMaterial });
            } catch (error) {
                res.status(400).json({ success: false, message: 'Error updating material' });
            }
            break;
        case 'DELETE':
            try {
                const { id } = req.query;
                const deletedMaterial = await Material.findByIdAndDelete(id);

                if (!deletedMaterial) {
                    return res.status(404).json({ success: false, message: 'Material not found' });
                }

                res.status(200).json({ success: true, message: 'Material deleted' });
            } catch (error) {
                res.status(500).json({ success: false, message: 'Error deleting material' });
            }
            break;
        default:
            res.status(405).json({ success: false, message: 'Method Not Allowed' });
            break;
    }
}
