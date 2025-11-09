import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Ready to accelerate your growth?</h3>
            <p className="mt-2 text-white/90 max-w-2xl">
              Book a free 30-minute strategy session. We’ll dive into your goals and outline a plan you can start using right away.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold shadow hover:shadow-md transition">
            Book my call
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
