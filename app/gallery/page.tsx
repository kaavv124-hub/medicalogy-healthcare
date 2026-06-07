export default function GalleryPage() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Medicalogy Healthcare Gallery
        </h1>

        <p className="max-w-4xl mx-auto text-xl">
          Exploring Innovation, Learning, Training and Biomedical Engineering Excellence.
        </p>
      </section>

      {/* Gallery Categories */}
      <section className="max-w-7xl mx-auto py-16 px-6">

        <h2 className="text-4xl font-bold text-blue-700 text-center mb-12">
          Gallery Categories
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <h3 className="font-bold text-xl text-cyan-700">
              Internship Training
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <h3 className="font-bold text-xl text-cyan-700">
              Medical Equipment Training
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <h3 className="font-bold text-xl text-cyan-700">
              PCB Level Service
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <h3 className="font-bold text-xl text-cyan-700">
              Medical Device Design
            </h3>
          </div>

        </div>

      </section>

      {/* Future Gallery */}
      <section className="bg-cyan-50 py-16 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-blue-700 text-center mb-10">
            Project & Training Gallery
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-10 text-center">

            <p className="text-lg text-slate-700 mb-6">
              Student projects, internship activities, medical equipment training,
              workshops, seminars and innovation activities will be updated here.
            </p>

            <div className="border-2 border-dashed border-slate-300 rounded-xl p-16 text-slate-500">
              Gallery Images Coming Soon...
            </div>

          </div>

        </div>

      </section>

      {/* Updates Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">

        <div className="bg-white rounded-2xl shadow-xl p-10 text-center">

          <h2 className="text-4xl font-bold text-blue-700 mb-6">
            Gallery Updates
          </h2>

          <p className="text-lg text-slate-700">
            Internship batches, workshops, biomedical projects,
            medical device training sessions and student activities
            will be regularly updated here.
          </p>

        </div>

      </section>

    </main>
  );
}