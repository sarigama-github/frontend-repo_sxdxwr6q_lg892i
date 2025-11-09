import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-purple-100" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-600 px-3 py-1 text-sm font-medium mb-6">
              <Rocket className="h-4 w-4" />
              Launch campaigns that convert
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              Grow faster with a modern advertising partner
            </h1>
            <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-xl">
              We design data-driven campaigns that help brands get noticed, remembered, and chosen. From strategy to scale — we’ve got you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#cta" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-sm transition">
                Get a free strategy call
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition">
                Explore services
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/64?img=${i + 12}`}
                    alt="client"
                    className="h-8 w-8 rounded-full ring-2 ring-white"
                  />
                ))}
              </div>
              <span>Trusted by 300+ ambitious brands</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-200/60 to-purple-200/60 blur-3xl rounded-full" />
            <div className="relative bg-white/70 backdrop-blur border border-white/60 rounded-2xl p-6 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop"
                alt="Campaign dashboard"
                className="rounded-xl object-cover w-full h-72"
              />
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div className="rounded-lg bg-indigo-50 py-3">
                  <div className="text-2xl font-bold text-indigo-700">3.2x</div>
                  <div className="text-xs text-indigo-700/80">Avg. ROAS</div>
                </div>
                <div className="rounded-lg bg-purple-50 py-3">
                  <div className="text-2xl font-bold text-purple-700">+148%</div>
                  <div className="text-xs text-purple-700/80">Traffic</div>
                </div>
                <div className="rounded-lg bg-pink-50 py-3">
                  <div className="text-2xl font-bold text-pink-700">-36%</div>
                  <div className="text-xs text-pink-700/80">CAC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
