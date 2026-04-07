const galleryImages = [
  {
    src: 'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(3).jpeg',
    alt: 'Hair styling session',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(4).jpeg',
    alt: 'Skincare treatment',
    span: '',
  },
  {
    src: 'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(7).jpeg',
    alt: 'Salon interior',
    span: '',
  },
  {
    src: 'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.30%20PM%20(3).jpeg',
    alt: 'Beauty products',
    span: '',
  },
  {
    src: 'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.30%20PM.jpeg',
    alt: 'Nail art display',
    span: 'md:col-span-2',
  },
]

export default function GallerySection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-12">
        <p>OUR WORK</p>
        <h2>Beauty in Every Detail</h2>
        <p className="max-w-2xl mx-auto">
          Browse through our portfolio showcasing the artistry and care that
          goes into every service at Norbu Salon & Beauty.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden group ${image.span}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-60 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
