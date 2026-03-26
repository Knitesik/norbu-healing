const features = [
  'Lift Installed (6 capacity).',
  'Luxury rain shower heads.',
  'Hair-Dryers.',
  'Laundry Services',
  'WIFI: Rooms with high-Speed internet.',
  'Indoor Restaurant and Outdoor Caffe',
  'Spa Healing and Wellness Services.',
  'Salon Facility.',
  'Sauna and Steam Facilities with Gender Separate Room.',
  'Wheel Chair facility for Priority (PWD).',
  'Food: We serve Continental, Local, Indian, Western & Oriental Cuisine.',
  'Bar & Lounge',
  'Vehicle Parking Outdoor.',
  'Staff: Friendly/Polite/Well Trained/Experienced and Professional.',
  'Mini Conference Hall.',
]
export default function HotelFeatures() {
  return (
    <div className={'grid bg-primary p-14 lg:grid-cols-3'}>
      <div className={'col-span-2 text-primary-foreground'}>
        <h2 className={'font-bold text-5xl mb-8'}>Hotel Features</h2>
        <ul className={'grid lg:grid-cols-2 gap-4 list-disc ml-4'}>
          {features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
