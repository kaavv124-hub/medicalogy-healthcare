

export default function AboutPage() {
  return (
    <>
      

      <main className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">
              About Medicalogy Healthcare
            </h1>

            <p className="text-xl">
              Connecting Healthcare with Technology
            </p>

            <p className="mt-4 max-w-3xl mx-auto text-lg">
              Delivering innovative biomedical engineering solutions,
              healthcare technology services, training programs, and
              professional support for hospitals, students, and healthcare
              professionals.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">

          <h2 className="text-4xl font-bold text-blue-700 mb-6">
            Who We Are
          </h2>

          <p className="text-gray-700 text-lg leading-8 mb-6">
            Welcome to Medicalogy Healthcare, where biomedical engineering
            expertise meets innovation, quality, and affordability.
          </p>

          <p className="text-gray-700 text-lg leading-8 mb-6">
            We are committed to transforming healthcare through reliable
            biomedical engineering services, technical solutions,
            professional training programs, healthcare technology support,
            and industry-oriented educational initiatives.
          </p>

          <p className="text-gray-700 text-lg leading-8">
            Our goal is to bridge the gap between healthcare technology and
            engineering education while supporting hospitals, healthcare
            facilities, researchers, students, and healthcare professionals
            through practical and innovative solutions.
          </p>

        </section>

        {/* Medical + Technology */}
        <section className="bg-cyan-50 py-16">

          <div className="max-w-6xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-bold text-cyan-700 mb-6">
              Why Medicalogy?
            </h2>

            <p className="text-2xl font-semibold text-blue-700 mb-6">
              Medical + Technology = Medicalogy
            </p>

            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-8">
              The name Medicalogy represents the perfect combination of
              Healthcare and Technology. Our mission is to integrate
              healthcare expertise with modern engineering solutions to
              improve patient care, equipment management, training,
              innovation, and healthcare accessibility.
            </p>

          </div>

        </section>

        {/* Vision & Mission */}
        <section className="bg-slate-100 py-16">

          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-lg">

              <h2 className="text-3xl font-bold text-cyan-600 mb-4">
                Vision
              </h2>

              <p className="text-gray-700 leading-8">
                To become a trusted leader in biomedical engineering and
                healthcare technology solutions by delivering innovative,
                affordable, and high-quality services that contribute to
                improved healthcare outcomes and technological advancement.
              </p>

            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">

              <h2 className="text-3xl font-bold text-blue-700 mb-4">
                Mission
              </h2>

              <ul className="text-gray-700 leading-8 list-disc ml-5">
                <li>Deliver reliable biomedical engineering services.</li>
                <li>Support hospitals through technical expertise.</li>
                <li>Train future biomedical engineers.</li>
                <li>Promote healthcare innovation.</li>
                <li>Provide industry-oriented learning opportunities.</li>
                <li>Bridge healthcare and technology.</li>
              </ul>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}