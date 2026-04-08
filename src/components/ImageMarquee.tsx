import Marquee from '#/components/ui/image-marquee.tsx'

const images = [
  'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(3).jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/IMG_4301.JPG.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-28%20at%202.56.20%20PM%20(3).jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/IMG_4290.JPG.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.30%20PM%20(1).jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/IMG_4296.JPG.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-28%20at%202.56.20%20PM%20(1).jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/IMG_4293.JPG.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(6).jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/IMG_4304.JPG.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(1).jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/IMG_4288.JPG.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.30%20PM.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/IMG_4299.JPG.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-28%20at%202.56.20%20PM%20(4).jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/IMG_4295.JPG.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(7).jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/IMG_4306.JPG.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(2).jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/IMG_4291.JPG.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-28%20at%202.56.19%20PM.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/IMG_4298.JPG.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(8).jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/IMG_4305.JPG.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(4).jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/IMG_4302.JPG.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-28%20at%202.56.20%20PM.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/IMG_4297.JPG.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.30%20PM%20(3).jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/IMG_4294.JPG.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM%20(5).jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/IMG_4292.JPG.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.30%20PM%20(2).jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/IMG_4289.JPG.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-25%20at%202.04.29%20PM.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/IMG_4300.JPG.jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/WhatsApp%20Image%202026-03-28%20at%202.56.20%20PM%20(2).jpeg',
  'https://htj-client.b-cdn.net/norbu-healing/Untitled.jpg',
]
export default function ImageMarquee() {
  return (
    <div>
      <Marquee images={images} />
    </div>
  )
}
