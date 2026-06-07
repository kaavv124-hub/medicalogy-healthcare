export default function HomePage() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-6xl font-bold mb-6">
            Medicalogy Healthcare
          </h1>

          <p className="text-2xl font-semibold mb-6">
            Connecting Healthcare with Technology
          </p>

          <p className="max-w-4xl mx-auto text-lg mb-10">
            Biomedical Training • Medical Equipment Services •
            Medical Device Design • Healthcare Innovation •
            Career Development
          </p>

          <a
            href="/about"
            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold"
          >
            Learn More About Us
          </a>

        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
            Explore Medicalogy Healthcare
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <a href="/about" className="bg-white p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-cyan-700">About Us</h3>
            </a>

            <a href="/services" className="bg-white p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-cyan-700">Services</h3>
            </a>

            <a href="/internships" className="bg-white p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-cyan-700">Internships</h3>
            </a>

            <a href="/projects" className="bg-white p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-cyan-700">Projects</h3>
            </a>

            <a href="/blogs" className="bg-white p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-cyan-700">Blogs</h3>
            </a>

            <a href="/gallery" className="bg-white p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-cyan-700">Gallery</h3>
            </a>

            <a href="/careers" className="bg-white p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-cyan-700">Careers</h3>
            </a>

            <a href="/contact" className="bg-white p-8 rounded-2xl shadow-xl text-center hover:scale-105 transition">
              <h3 className="text-2xl font-bold text-cyan-700">Contact</h3>
            </a>

          </div>

        </div>
      </section>

      {/* Mission */}
      <section className="bg-cyan-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-blue-700 mb-8">
            Our Mission
          </h2>

          <p className="text-xl text-slate-700">
            To bridge the gap between healthcare and technology by
            empowering biomedical engineers with practical training,
            innovation opportunities, industry exposure and
            healthcare technology solutions.
          </p>

        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
            Why Choose Medicalogy Healthcare?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
              <h3 className="font-bold text-xl text-cyan-700">
                Industry-Oriented Training
              </h3>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
              <h3 className="font-bold text-xl text-cyan-700">
                Biomedical Projects
              </h3>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
              <h3 className="font-bold text-xl text-cyan-700">
                Healthcare Technology Support
              </h3>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
              <h3 className="font-bold text-xl text-cyan-700">
                Career Development
              </h3>
            </div>

          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Explore Biomedical Opportunities?
          </h2>

          <p className="text-xl mb-10">
            Join Medicalogy Healthcare and be a part of the future of healthcare technology.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="/internships"
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold"
            >
              Join Internship
            </a>

            <a
              href="/contact"
              className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold"
            >
              Contact Us
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}