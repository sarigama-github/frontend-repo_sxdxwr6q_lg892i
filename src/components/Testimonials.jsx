const testimonials = [
  {
    quote:
      "They deliver results. Our cost per acquisition dropped 38% while revenue grew. The team felt like an extension of ours.",
    name: "Ava Thompson",
    role: "VP Marketing, Northbay",
    avatar: "https://i.pravatar.cc/100?img=24",
  },
  {
    quote:
      "The clarity we got from their analytics and testing program changed the game for us.",
    name: "Daniel Lee",
    role: "Founder, Finly",
    avatar: "https://i.pravatar.cc/100?img=33",
  },
  {
    quote:
      "We hit our growth targets three quarters in a row. Efficient, friendly, and strategic.",
    name: "Sofia Martinez",
    role: "CMO, Brite",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50/60">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">What clients say</h2>
        <p className="mt-2 text-gray-600 text-center max-w-2xl mx-auto">
          Real outcomes from real partnerships.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <blockquote className="text-gray-700">“{t.quote}”</blockquote>
              <div className="mt-4 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full" />
                <figcaption>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.role}</div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
