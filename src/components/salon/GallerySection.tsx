const galleryImages = [
  {
    src: 'https://htj-client.b-cdn.net/norbu-healing/IMG_4306.JPG.jpeg',
    alt: 'Hair styling session',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://htj-client.b-cdn.net/norbu-healing/IMG_4305.JPG.jpeg',
    alt: 'Skincare treatment',
    span: '',
  },
  {
    src: 'https://htj-client.b-cdn.net/norbu-healing/IMG_4302.JPG.jpeg',
    alt: 'Salon interior',
    span: '',
  },
  {
    src: 'https://htj-client.b-cdn.net/norbu-healing/IMG_4299.JPG.jpeg',
    alt: 'Beauty products',
    span: '',
  },
  {
    src: 'https://htj-client.b-cdn.net/norbu-healing/IMG_4296.JPG.jpeg',
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
          <div key={index} className={`overflow-hidden group ${image.span}`}>
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
