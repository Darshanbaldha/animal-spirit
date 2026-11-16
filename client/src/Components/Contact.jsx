import { useState } from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        event.currentTarget.reset();
    };

    return (
        <main className="container mx-auto my-10 p-8 bg-gray-100 shadow-lg rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-gray-700 mb-4">
                        Have a question or want to share your thoughts about wildlife?
                        We'd love to hear from you.
                    </p>
                    <ul className="text-gray-700">
                        <li className="flex items-center mb-4">
                            <span className="font-semibold mr-2">Address:</span>
                            123 Street, City, Country
                        </li>
                        <li className="flex items-center mb-4">
                            <span className="font-semibold mr-2">Phone:</span>
                            +1234567890
                        </li>
                        <li className="flex items-center">
                            <span className="font-semibold mr-2">Email:</span>
                            example@google.com
                        </li>
                    </ul>
                </section>

                <form onSubmit={handleSubmit} className="bg-gray-100 rounded-lg p-6">
                    {submitted && (
                        <div className="mb-4 rounded-md border border-green-300 bg-green-50 px-4 py-3 text-green-800" role="status">
                            Thank you for contacting us! Your form was submitted successfully.
                        </div>
                    )}

                    <div className="mb-4">
                        <label htmlFor="contact-name" className="block text-gray-700 font-bold mb-2">Name</label>
                        <input
                            type="text"
                            id="contact-name"
                            name="name"
                            autoComplete="name"
                            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                            placeholder="Your Name"
                            minLength="2"
                            required
                            onChange={() => submitted && setSubmitted(false)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="contact-email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="contact-email"
                            name="email"
                            autoComplete="email"
                            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                            placeholder="Your Email"
                            required
                            onChange={() => submitted && setSubmitted(false)}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="contact-message" className="block text-gray-700 font-bold mb-2">Message</label>
                        <textarea
                            id="contact-message"
                            name="message"
                            rows="5"
                            minLength="10"
                            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
                            placeholder="Your Message"
                            required
                            onChange={() => submitted && setSubmitted(false)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </main>
    );
}
