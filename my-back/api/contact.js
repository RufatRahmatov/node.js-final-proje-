export default function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, subject, comment } = req.body;


        console.log("Received data:", { name, email, subject, comment });

        res.status(200).json({ message: 'Success' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
