// components/ContactForm.tsx
import React from 'react';

const ContactForm = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-heading text-typography mb-4">Contact Us</h2>
      <form className="flex flex-col gap-4 max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="px-4 py-2 border rounded" />
        <input type="email" placeholder="Your Email" className="px-4 py-2 border rounded" />
        <textarea placeholder="Your Message" className="px-4 py-2 border rounded h-32"></textarea>
        <button type="submit" className="bg-secondary text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
