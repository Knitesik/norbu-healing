const cuisines = [
  {
    name: 'Bhutanese',
    description: 'Traditional dishes including Ema Datshi, Jasha Maru, and Phaksha Paa — prepared with authentic local ingredients.',
  },
  {
    name: 'Indian',
    description: 'A rich selection of North and South Indian favourites, from creamy curries to tandoori specialities.',
  },
  {
    name: 'Continental',
    description: 'Classic European-inspired dishes featuring fresh salads, grilled meats, and pasta prepared with care.',
  },
  {
    name: 'Oriental',
    description: 'Flavours from across Asia — including stir-fries, noodle dishes, and steamed delicacies.',
  },
]

export default function DiningMenu() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-12">
        <p>OUR CUISINE</p>
        <h2>A World of Flavours</h2>
        <p className="max-w-2xl mx-auto">
          Our restaurant offers a diverse menu that caters to every palate —
          from traditional Bhutanese delicacies to international favourites,
          all prepared with fresh, quality ingredients.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cuisines.map((cuisine, index) => (
          <div
            key={index}
            className="p-8 border border-border text-center space-y-4 hover:border-primary/50 transition-colors"
          >
            <h3 className="font-bold text-xl">{cuisine.name}</h3>
            <p className="text-sm">{cuisine.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
