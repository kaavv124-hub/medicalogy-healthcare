export default function BlogsPage() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Biomedical Engineering Blogs & Resources
        </h1>

        <p className="max-w-4xl mx-auto text-xl">
          Explore Biomedical Engineering Careers,
          Medical Devices, AI in Healthcare,
          Research Trends and Educational Resources.
        </p>
      </section>

      {/* YouTube Channel */}
      <section className="bg-cyan-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-blue-700 text-center mb-4">
            Medicalogy Healthcare YouTube Channel
          </h2>

          <p className="text-center text-slate-700 mb-12 text-lg">
            Watch Biomedical Engineering Tutorials, Career Guidance,
            Medical Device Training, Startup Awareness Sessions and
            Industry-Oriented Learning Videos.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Video 1 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/career_1tumb.png"
                alt="Biomedical Career Guidance"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-blue-700">
                  Biomedical Engineering Career Guidance
                </h3>

                <a
                  href="https://youtu.be/zyaIpxsSmxU?si=26g-MukdM-4fjIfm"
                  target="_blank"
                  className="inline-block bg-red-600 text-white px-5 py-2 rounded-xl"
                >
                  ▶ Watch Video
                </a>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/govjob_3tumb.png"
                alt="Government Jobs"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-blue-700">
                  Government Job Opportunities
                </h3>

                <a
                  href="https://youtu.be/jy7kK05XT_E?si=9h0ffzZGTX65x8xd"
                  target="_blank"
                  className="inline-block bg-red-600 text-white px-5 py-2 rounded-xl"
                >
                  ▶ Watch Video
                </a>
              </div>
            </div>

            {/* Video 3 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/master_5tumb.png"
                alt="Masters Abroad"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-blue-700">
                  Masters Abroad for Biomedical Engineers
                </h3>

                <a
                  href="https://youtu.be/Dcs4sH4f_Oc?si=qkeQAoCVSSwXDwQx"
                  target="_blank"
                  className="inline-block bg-red-600 text-white px-5 py-2 rounded-xl"
                >
                  ▶ Watch Video
                </a>
              </div>
            </div>

            {/* Video 4 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/mdd_2tumb.png"
                alt="Medical Device Design"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-blue-700">
                  Medical Device Design Career Guide
                </h3>

                <a
                  href="https://youtu.be/bviVL6m3YUk?si=1F9nyNUClnXIVECs"
                  target="_blank"
                  className="inline-block bg-red-600 text-white px-5 py-2 rounded-xl"
                >
                  ▶ Watch Video
                </a>
              </div>
            </div>

            {/* Video 5 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/startup_4tumb.png"
                alt="Biomedical Startup"
                className="w-full"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-blue-700">
                  Start Your Biomedical Startup
                </h3>

                <a
                  href="https://youtu.be/kixdq9SDN7Q?si=pfUm_tIKECPNeZEz"
                  target="_blank"
                  className="inline-block bg-red-600 text-white px-5 py-2 rounded-xl"
                >
                  ▶ Watch Video
                </a>
              </div>
            </div>

          </div>

          {/* Articles Section */}
<div className="mt-16 bg-white rounded-2xl shadow-xl p-10">

  <h2 className="text-3xl font-bold text-blue-700 text-center mb-4">
    Upcoming Biomedical Engineering Articles
  </h2>

  <p className="text-center text-slate-600 mb-8">
    Technical blogs, career guidance articles, project tutorials,
    startup stories and biomedical engineering insights will be
    published here soon.
  </p>

  <div className="border-2 border-dashed border-slate-300 rounded-xl p-12 text-center text-slate-500">
    Articles Coming Soon...
  </div>

</div>

{/* YouTube Button */}
<div className="text-center mt-10">
  <a
    href="https://youtube.com/@medicalogy_healthcare?si=J0AIqf33wrVrohzv"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-blue-700 text-white px-8 py-4 rounded-xl font-bold"
  >
    Visit Our YouTube Channel
  </a>
</div>


        </div>
      </section>

    </main>
  );
}