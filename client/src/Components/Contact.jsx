import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Contact() {
  const { isAuthenticated, user } = useAuth();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isAuthenticated) return;

    // The original project does not include a contact-message API.
    // Keep the existing client-side confirmation without implying email delivery.
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <main className="container mx-auto my-10 p-8 bg-gray-100 shadow-lg rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="mb-8 md:mb-0">
          <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-700 mb-4">
            Have a question or want to share your thoughts about wildlife?
            We would love to hear from you.
          </p>
          <ul className="text-gray-700">
            <li className="flex items-center mb-4"><span className="font-semibold mr-2">Address:</span>123 Street, City, Country</li>
            <li className="flex items-center mb-4"><span className="font-semibold mr-2">Phone:</span>+1234567890</li>
            <li className="flex items-center"><span className="font-semibold mr-2">Email:</span>example@google.com</li>
          </ul>
        </section>

        <section className="bg-gray-100 rounded-lg p-6">
          {submitted && (
            <div className="mb-4 rounded-md border border-green-300 bg-green-50 px-4 py-3 text-green-800" role="status">
              Thank you, {user?.name || 'friend'}! Your form was submitted.
            </div>
          )}

          {!isAuthenticated && (
            <div className="mb-5 rounded-lg border border-yellow-300 bg-yellow-50 p-4 text-yellow-900">
              <h2 className="font-bold mb-1">Log in to send a message</h2>
              <p className="text-sm mb-3">You can browse the website freely. Please log in or create an account before submitting the contact form.</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/login" className="contact-auth-link">Log in</Link>
                <Link to="/signin" className="contact-auth-link contact-auth-link-secondary">Create account</Link>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <fieldset disabled={!isAuthenticated} className={!isAuthenticated ? 'opacity-60' : ''}>
              <legend className="sr-only">Contact form</legend>
              <div className="mb-4">
                <label htmlFor="contact-name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input
                  type="text" id="contact-name" name="name" autoComplete="name"
                  defaultValue={user?.name || ''}
                  className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-green-700"
                  placeholder="Your name" minLength="2" required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="contact-email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email" id="contact-email" name="email" autoComplete="email"
                  defaultValue={user?.email || ''}
                  className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-green-700"
                  placeholder="Your email" required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="contact-message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                  id="contact-message" name="message" rows="5" minLength="10"
                  className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-green-700"
                  placeholder="Your message" required
                />
              </div>
              <button
                type="submit"
                disabled={!isAuthenticated}
                className="bg-yellow-500 hover:bg-yellow-600 disabled:cursor-not-allowed disabled:opacity-60 text-white font-bold py-2 px-4 rounded transition"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </section>
      </div>
    </main>
  );
}