const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: 'http://127.0.0.1:5501'
}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/contactDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const contactSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    telefono: String,
    direccion: String,
    message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contact', async (req, res) => {
    const { nombre, email, telefono, direccion, message } = req.body;

    try {
        const newContact = new Contact({ nombre, email, telefono, direccion, message });
        await newContact.save();
        res.status(200).send('Datos guradados correctamente');
    } catch (error) {
        res.status(500).send('Error al guardar los datos');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
