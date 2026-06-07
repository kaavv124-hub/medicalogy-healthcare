export default function ServicesPage() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Our Services
        </h1>

        <p className="max-w-4xl mx-auto text-xl">
          Comprehensive Biomedical Engineering Solutions for Hospitals,
          Healthcare Institutions, Students, and Research Organizations.
        </p>
      </section>

      {/* Critical Care Equipment */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-10 text-center">
          Critical Care & Biomedical Equipment Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-cyan-100">
            <h3 className="text-2xl font-bold text-cyan-700 mb-4">
              Ventilator
            </h3>
            <p className="text-slate-700 leading-7">
              Installation, preventive maintenance, troubleshooting,
              calibration support and breakdown services.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-cyan-100">
            <h3 className="text-2xl font-bold text-cyan-700 mb-4">
              Patient Monitor
            </h3>
            <p className="text-slate-700 leading-7">
              Performance verification, repair support,
              calibration and maintenance services.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-cyan-100">
            <h3 className="text-2xl font-bold text-cyan-700 mb-4">
              Defibrillator
            </h3>
            <p className="text-slate-700 leading-7">
              Preventive maintenance, inspection,
              calibration and technical support.
            </p>
          </div>

        </div>
      </section>

      {/* Diagnostic Equipment */}
      <section className="bg-cyan-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-blue-700 mb-10 text-center">
            Diagnostic Equipment Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-cyan-100">
              <h3 className="text-xl font-bold text-cyan-700">
                ECG Machine
              </h3>

              <p className="text-slate-700 mt-3">
                Installation, calibration, maintenance and troubleshooting support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-cyan-100">
              <h3 className="text-xl font-bold text-cyan-700">
                EEG Machine
              </h3>

              <p className="text-slate-700 mt-3">
                Preventive maintenance, technical support and performance verification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-cyan-100">
              <h3 className="text-xl font-bold text-cyan-700">
                EMG Machine
              </h3>

              <p className="text-slate-700 mt-3">
                Calibration support, repair services and equipment inspection.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* AMC / CMC */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-10">
          AMC / CMC Services
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-cyan-700 mb-6">
              Annual Maintenance Contract (AMC)
            </h3>

            <ul className="space-y-3 text-slate-700 text-lg">
              <li>✔ Preventive Maintenance</li>
              <li>✔ Equipment Inspection</li>
              <li>✔ Performance Verification</li>
              <li>✔ Breakdown Support</li>
              <li>✔ Documentation Support</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-3xl font-bold text-blue-700 mb-6">
              Comprehensive Maintenance Contract (CMC)
            </h3>

            <ul className="space-y-3 text-slate-700 text-lg">
              <li>✔ Labour Included</li>
              <li>✔ Spare Parts Support</li>
              <li>✔ Emergency Breakdown Visits</li>
              <li>✔ Equipment Performance Monitoring</li>
              <li>✔ Annual Service Reports</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Software Services */}
      <section className="bg-cyan-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-blue-700 text-center mb-10">
            Software & Technical Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-cyan-700 mb-3">
                Medical Device Software
              </h3>

              <p className="text-slate-700 leading-7">
                Python, MATLAB, LabVIEW and healthcare software application development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-cyan-700 mb-3">
                Biomedical Data Analysis
              </h3>

              <p className="text-slate-700 leading-7">
                ECG, EEG, EMG signal processing and AI-based healthcare solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-cyan-700 mb-3">
                Embedded Medical Systems
              </h3>

              <p className="text-slate-700 leading-7">
                ESP32, Arduino, IoT Healthcare Devices and Biomedical Instrumentation.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Why Choose Medicalogy Healthcare?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold text-cyan-700 mb-3">
              Biomedical Expertise
            </h3>

            <p className="text-slate-700">
              Experienced support for biomedical equipment, healthcare technology and technical services.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold text-cyan-700 mb-3">
              Affordable Solutions
            </h3>

            <p className="text-slate-700">
              Cost-effective AMC, CMC and technical support solutions for hospitals and institutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold text-cyan-700 mb-3">
              Industry-Oriented Training
            </h3>

            <p className="text-slate-700">
              Internships, workshops and skill development programs for biomedical engineering students.
            </p>
          </div>

        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Need Equipment Service or Technical Support?
        </h2>

        <p className="mb-8 text-lg">
          Contact Medicalogy Healthcare Today
        </p>

        <a
          href="/contact"
          className="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl font-bold"
        >
         Contact Us
</a>
      </section>

    </main>
  );
}