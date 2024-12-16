import { useState } from 'react'

function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic
    alert('Message sent!')
  }

  return (
    <section className="max-w-md mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea 
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border rounded h-32"
          required
        />
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact