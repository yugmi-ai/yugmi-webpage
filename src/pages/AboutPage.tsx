import React from 'react';

const AboutPage = () => {
  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About{' '}
              <span className="text-gray-300">
                Yugmi
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Building the intelligence layer for the world's infrastructure
            </p>
          </div>

          {/* Mission */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              To create living digital twins that think, learn, and evolve with critical infrastructure,
              making our built environment smarter, safer, and more sustainable for future generations.
            </p>
          </div>

          {/* Vision */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              A future where every piece of infrastructure has its own intelligent digital twin,
              creating a network of connected, self-aware systems that continuously optimize
              performance, predict needs, and adapt to changing conditions.
            </p>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Intelligence',
                  desc: 'We believe AI should augment human expertise, not replace it'
                },
                {
                  title: 'Reliability',
                  desc: 'Infrastructure demands systems that work when it matters most'
                },
                {
                  title: 'Collaboration',
                  desc: 'The best solutions emerge from diverse perspectives and partnerships'
                },
                {
                  title: 'Progress',
                  desc: 'We continuously push the boundaries of what\'s possible'
                }
              ].map((value, idx) => (
                <div key={idx} className="text-center p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Sections Placeholder */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-xl bg-gray-900/30 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Leadership</h3>
              <p className="text-gray-400">Coming Soon</p>
            </div>
            <div className="p-8 rounded-xl bg-gray-900/30 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Partners</h3>
              <p className="text-gray-400">Coming Soon</p>
            </div>
            <div className="p-8 rounded-xl bg-gray-900/30 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Awards</h3>
              <p className="text-gray-400">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;