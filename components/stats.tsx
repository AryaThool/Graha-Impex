export default function Stats() {
  const stats = [
    { number: "10+", label: "Years of Experience" },
    { number: "50K+", label: "Happy Customers" },
    { number: "100+", label: "Cities Covered" },
    { number: "99.9%", label: "On-Time Delivery" },
  ]

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Trusted by thousands of customers worldwide for reliable logistics solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
