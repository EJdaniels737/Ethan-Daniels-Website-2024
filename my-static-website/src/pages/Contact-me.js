import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/mkgnqnnq', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setFormStatus('Failed to send message. Please try again later.');
            }
        } catch (error) {
            setFormStatus('An error occurred. Please try again.');
        }
    };

    return (
        <section>
            <h1>Contact Me</h1>
            <p>
                I would love to hear from you! Whether you have a question, an opportunity, 
                or just want to connect, feel free to reach out. You can contact me via:
            </p>
            <ul>
                <li><strong>Email:</strong> <a href="mailto:Ejohndaniels@gmail.com">Ejohndaniels@gmail.com</a></li>
                <li><strong>Name:</strong> Ethan J Daniels</li>
                <li><strong>Cell:</strong> <a href="tel:+19524849850">952.484.9850</a></li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ethanjohndaniels" target="_blank" rel="noopener noreferrer">Ethan Daniels | LinkedIn</a></li>
            </ul>
            <p>
                Alternatively, you can use the form below to send me a message directly.
            </p>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>

            {formStatus && <p>{formStatus}</p>}
        </section>
    );
}

export default Contact;
