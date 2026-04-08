const faqs = [
  {
    question: 'Do I need to book in advance?',
    answer:
      'While walk-ins are welcome, we recommend booking in advance to ensure your preferred time slot and therapist are available.',
  },
  {
    question: 'How long does a typical treatment take?',
    answer:
      'Most treatments range from 60 to 90 minutes. We recommend arriving 15 minutes early for your consultation and to settle into the relaxation space.',
  },
  {
    question: 'Are treatments suitable for everyone?',
    answer:
      'Our therapists conduct a health consultation before each session to ensure the treatment is safe and appropriate. Please inform us of any medical conditions or allergies.',
  },
  {
    question: 'What should I wear to my appointment?',
    answer:
      'Comfortable clothing is recommended. We provide robes and slippers for all treatments, and your privacy is ensured throughout your session.',
  },
  {
    question: 'Can I combine multiple treatments?',
    answer:
      'Absolutely. We offer combination packages and our therapists can recommend treatment sequences that complement each other for maximum benefit.',
  },
  {
    question: 'What products do you use?',
    answer:
      'We exclusively use natural, professional-grade products sourced for their therapeutic qualities. All products are free from harsh chemicals.',
  },
]

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-12">
        <p>FAQ</p>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="space-y-3">
            <h3 className="font-bold text-lg text-foreground">{faq.question}</h3>
            <p className="text-sm leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
