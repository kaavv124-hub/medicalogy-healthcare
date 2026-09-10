export default function ContactPage() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Contact Medicalogy Healthcare
        </h1>

        <p className="max-w-4xl mx-auto text-xl">
          We are here to assist students, hospitals, healthcare professionals
          and researchers.
        </p>
      </section>

      {/* Contact Details */}
      <section className="max-w-7xl mx-auto py-16 px-6">

        <h2 className="text-4xl font-bold text-blue-700 text-center mb-12">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
            <h3 className="text-3xl font-bold text-cyan-700 mb-6">
              Phone
            </h3>

            <p className="text-2xl font-bold text-slate-800">
              8778756925
            </p>

            <p className="text-2xl font-bold text-slate-800 mt-2">
              9345026558
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
            <h3 className="text-3xl font-bold text-cyan-700 mb-6">
              Email
            </h3>

            <p className="text-base font-bold text-slate-800">
               medicalogyhealthcare@gmail.com
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
            <h3 className="text-3xl font-bold text-cyan-700 mb-6">
              WhatsApp
            </h3>

            <p className="text-2xl font-bold text-slate-800">
              8778756925
            </p>
          </div>

        </div>

      </section>

      {/* Business Hours */}
      <section className="bg-cyan-50 py-16 px-6">

        <div className="flex justify-center">

          <div className="bg-white rounded-2xl shadow-xl p-10 text-center w-full max-w-lg">

            <h2 className="text-4xl font-bold text-blue-700 mb-6">
              Business Hours
            </h2>

            <p className="text-2xl font-semibold text-slate-800 mb-4">
              Monday – Sunday
            </p>

            <p className="text-xl font-bold text-cyan-700 mb-4">
              09:00 AM – 06:00 PM
            </p>

            <p className="text-slate-600">
              Online Support Available 24/7
            </p>

          </div>

        </div>

      </section>

      {/* Location */}
      <section className="max-w-7xl mx-auto py-16 px-6">

        <h2 className="text-4xl font-bold text-blue-700 text-center mb-8">
          Location
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-10 text-center">

          <div className="text-center mb-8">
  <h3 className="text-2xl font-bold text-blue-700 mb-3">
    Medicalogy Healthcare
  </h3>

  <p className="text-lg text-slate-700 leading-relaxed">
    No. 135, Srivari Nagar, Kilkondaiyur, Karalapakkam,<br />
    Thiruninravur, Chennai – 602024, Tamil Nadu, India
  </p>

  <p className="text-slate-600 mt-3">
    For appointments, internships and training programs, please contact us before visiting.
  </p>
</div>

          <div className="w-full overflow-hidden rounded-2xl shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.7846689785824!2d80.02877857484505!3d13.175972587158522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5287a8ab7f0341%3A0x82a0f405855f9932!2sMedicalogy%20Healthcare!5e0!3m2!1sen!2sin!4v1789030876656!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Medicalogy Healthcare Location"
             />
</div>

        </div>

      </section>

    </main>
  );
}