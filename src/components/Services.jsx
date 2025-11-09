import { BarChart3, Megaphone, LineChart, Search } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'Campaign Strategy',
    desc: 'Full-funnel media planning tailored to your audience and goals.'
  },
  {
    icon: Search,
    title: 'SEO & Content',
    desc: 'Own the intent. Technical SEO and content engines that rank.'
  },
  {
    icon: BarChart3,
    title: 'Paid Media',
    desc: 'Google, Meta, TikTok, and programmatic with relentless optimization.'
  },
  {
    icon: LineChart,
    title: 'Analytics & CRO',
    desc: 'Dashboards, attribution, and experiments that move the needle.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What we do</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              A cross-disciplinary team that builds campaigns end-to-end — from research to creative to optimization.
            </p>
          </div>
          <a href="#work" className="hidden md:inline-block text-indigo-600 font-medium hover:text-indigo-700">See our work →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group p-6 rounded-2xl border border-gray-200 hover:border-indigo-300 hover:shadow-md transition bg-white">
              <div className="h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
