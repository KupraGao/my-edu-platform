// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="container mx-auto p-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">კონტაქტი</h1>

      <p className="text-lg mb-4">
        ნებისმიერ კითხვაზე დაგვიკავშირდით — სიამოვნებით დაგეხმარებით.
      </p>

      <div className="space-y-4 text-lg">
        <p>
          📧 Email:{" "}
          <a href="mailto:info@myeduplatform.com" className="text-blue-600 underline">
            info@myeduplatform.com
          </a>
        </p>

        <p>
          📞 ტელეფონი:{" "}
          <a href="tel:+995555123456" className="text-blue-600 underline">
            +995 555 123 456
          </a>
        </p>

        <p>
          📍 მისამართი: თბილისი, საქართველო
        </p>
      </div>

      {/* Contact Form placeholder */}
      <div className="mt-10 p-6 border rounded-lg shadow bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">მოგვწერეთ შეტყობინება</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="თქვენი სახელი"
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            placeholder="ელ. ფოსტა"
            className="w-full p-3 border rounded"
          />
          <textarea
            placeholder="შეტყობინება"
            rows={5}
            className="w-full p-3 border rounded"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            გაგზავნა
          </button>
        </form>
      </div>
    </div>
  );
}
