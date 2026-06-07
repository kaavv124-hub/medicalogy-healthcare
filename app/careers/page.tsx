export default function CareersPage() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Medicalogy Healthcare Careers
        </h1>

        <p className="max-w-4xl mx-auto text-xl">
          Build Your Future in Biomedical Engineering
          <br />
          <br />
          Internships • Training • Career Opportunities • Industry Exposure
        </p>
      </section>

      {/* Current Opportunities */}
      <section className="max-w-7xl mx-auto py-16 px-6">

        <h2 className="text-4xl font-bold text-blue-700 text-center mb-12">
          Current Opportunities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-cyan-700 mb-4">
              Biomedical Engineering Intern
            </h3>

            <ul className="space-y-2 text-slate-700">
              <li>✔ Duration: 15 / 30 Days</li>
              <li>✔ Online & Offline Mode</li>
              <li>✔ Biomedical Engineering Students</li>
              <li>✔ Certificate Provided</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-cyan-700 mb-4">
              Medical Equipment Training Intern
            </h3>

            <ul className="space-y-2 text-slate-700">
              <li>✔ Hands-On Learning</li>
              <li>✔ Troubleshooting Training</li>
              <li>✔ Equipment Exposure</li>
              <li>✔ Skill Development</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-cyan-700 mb-4">
              Biomedical Project Intern
            </h3>

            <ul className="space-y-2 text-slate-700">
              <li>✔ Project Development</li>
              <li>✔ Research Support</li>
              <li>✔ Innovation Activities</li>
              <li>✔ Technical Guidance</li>
            </ul>
          </div>

        </div>

      </section>

      {/* Future Opportunities */}
      <section className="bg-cyan-50 py-16 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-blue-700 text-center mb-10">
            Future Biomedical Career Opportunities
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-8">

            <div className="grid md:grid-cols-2 gap-4 text-slate-700">

              <p>✔ Biomedical Service and Sales Engineer</p>
              <p>✔ Quality Analyst</p>
              <p>✔ Regulatory Affairs Associate</p>
              <p>✔ Medical Device Designer</p>
              <p>✔ Clinical Engineer</p>
              <p>✔ Biomedical Research Assistant</p>
              <p>✔ Embedded Systems Developer</p>
              <p>✔ Healthcare Data Analyst</p>
              <p>✔ Medical Equipment Trainer</p>
              <p>✔ Application Specialist</p>
              <p>✔ Product Specialist</p>
              <p>✔ Technical Support Engineer</p>
              <p>✔ Hospital Equipment Coordinator</p>

            </div>

          </div>

        </div>

      </section>

      {/* Why Join */}
      <section className="max-w-7xl mx-auto py-16 px-6">

        <h2 className="text-4xl font-bold text-blue-700 text-center mb-10">
          Why Join Medicalogy Healthcare?
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-8">

          <div className="grid md:grid-cols-2 gap-4 text-slate-700">

            <p>✔ Practical Learning Environment</p>
            <p>✔ Hands-On Training</p>
            <p>✔ Biomedical Core Domain Exposure</p>
            <p>✔ Project Development Support</p>
            <p>✔ Startup Guidance</p>
            <p>✔ Career Guidance</p>
            <p>✔ Industry-Oriented Learning</p>
            <p>✔ Certificate of Completion</p>

          </div>

        </div>

      </section>

      {/* Apply Section */}
      <section className="bg-cyan-50 py-16 px-6">

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10 text-center">

          <h2 className="text-4xl font-bold text-blue-700 mb-6">
            Interested to Join?
          </h2>

          <p className="text-lg text-slate-700 mb-8">
            Internship opportunities, project participation,
            training programs and future job openings can be
            applied through our contact channels.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=medicalogyhealthcare@gmail.com&su=Career%20Application"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 text-white px-8 py-4 rounded-xl font-bold"
           >
            Apply by Gmail
          </a>

        </div>

      </section>

      {/* Coming Soon */}
      <section className="max-w-7xl mx-auto py-16 px-6">

        <div className="bg-white rounded-2xl shadow-xl p-10 text-center">

          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Upcoming Opportunities
          </h2>

          <p className="text-slate-700 mb-6">
            Full-Time Jobs • Part-Time Opportunities • Campus Ambassadors •
            Workshop Coordinators • College Coordinators
          </p>

          <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-slate-500">
            Career Opportunities Coming Soon...
          </div>

        </div>

      </section>

    </main>
  );
}