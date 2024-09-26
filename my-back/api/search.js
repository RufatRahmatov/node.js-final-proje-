import connectDB from '../db/ConnectDB';
import Product from '../../../models/Product';

export default async function handler(req, res) {
    await connectDB();

    const { query } = req.query;

    try {
        const products = await Product.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { brand: { $regex: query, $options: 'i' } },
                { tags: { $regex: query, $options: 'i' } }
            ]
        });

        res.status(200).json({ success: true, products });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
