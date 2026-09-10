import Image from "next/image";

export default function GalleryPage() {
  return (
    <main className="bg-slate-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-700 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Medicalogy Healthcare Gallery
        </h1>

        <p className="max-w-4xl mx-auto text-xl">
          Highlights from our workshops, training programs and
          biomedical engineering activities.
        </p>
      </section>

      {/* Event Gallery */}
      <section className="bg-cyan-50 py-16 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-blue-700 text-center mb-4">
            Medical Device Quality Assurance Workshop
          </h2>

          <p className="text-center text-lg text-slate-700 mb-2">
            Free Hands-on Workshop
          </p>

          <p className="text-center text-lg font-semibold text-cyan-700 mb-10">
            5th & 6th September 2026
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">

            <p className="text-lg text-slate-700 text-center mb-10">
              A two-day practical workshop focused on Medical Device
              Quality Assurance, testing concepts, hands-on activities
              and industry-oriented learning.
            </p>

            {/* Workshop Photos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/workshops/qa-day1-1.jpeg"
                  alt="Medical Device QA Workshop Day 1"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/workshops/qa-day1-2.jpeg"
                  alt="Medical Device QA Workshop Day 1"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/workshops/qa-day1-3.jpeg"
                  alt="Medical Device QA Workshop Day 1"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/workshops/qa-day1-4.jpeg"
                  alt="Medical Device QA Workshop Day 1"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/workshops/qa-day1-5.jpeg"
                  alt="Medical Device QA Workshop Day 1"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/workshops/qa-day2-1.jpeg"
                  alt="Medical Device QA Workshop Day 2"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/workshops/qa-day2-2.jpeg"
                  alt="Medical Device QA Workshop Day 2"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/workshops/qa-day2-3.jpeg"
                  alt="Medical Device QA Workshop Day 2"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/workshops/qa-day2-4.jpeg"
                  alt="Medical Device QA Workshop Day 2"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/workshops/qa-day2-5.jpeg"
                  alt="Medical Device QA Workshop Day 2"
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                />
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Gallery Updates */}
      <section className="max-w-7xl mx-auto py-16 px-6">

        <div className="bg-white rounded-2xl shadow-xl p-10 text-center">

          <h2 className="text-4xl font-bold text-blue-700 mb-6">
            Gallery Updates
          </h2>

          <p className="text-lg text-slate-700">
            More workshops, internship programs, biomedical projects,
            medical equipment training sessions and student activities
            will be added here as they are conducted.
          </p>

        </div>

      </section>

    </main>
  );
}