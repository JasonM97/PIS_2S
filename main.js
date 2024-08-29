document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        direccion: document.getElementById('direccion').value,
        message: document.getElementById('message').value,
    };

    try {
        const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
            document.getElementById('contact-form').reset();
        } else {
            alert('Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.');
    }
});
