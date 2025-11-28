import { useState } from "react";
import { Calendar, Clock, User, MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";

export function YourSchedule() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const doctors = [
    {
      id: 'dr-smith',
      name: 'Dr. Sarah Smith',
      specialty: 'Breast Oncologist',
      experience: '15 years',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80',
      availableDays: ['Monday', 'Wednesday', 'Friday']
    },
    {
      id: 'dr-johnson',
      name: 'Dr. Michael Johnson',
      specialty: 'Radiologist',
      experience: '12 years',
      rating: '4.8',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&q=80',
      availableDays: ['Tuesday', 'Thursday', 'Saturday']
    },
    {
      id: 'dr-williams',
      name: 'Dr. Emily Williams',
      specialty: 'Breast Surgeon',
      experience: '18 years',
      rating: '4.9',
      image: 'https://images.unsplash.com/photo-1594824475520-b49842339f43?auto=format&fit=crop&w=150&q=80',
      availableDays: ['Monday', 'Tuesday', 'Friday']
    }
  ];

  const appointmentTypes = [
    { value: 'screening', label: 'Breast Cancer Screening', duration: '45 mins' },
    { value: 'consultation', label: 'Initial Consultation', duration: '60 mins' },
    { value: 'followup', label: 'Follow-up Appointment', duration: '30 mins' },
    { value: 'genetic', label: 'Genetic Counseling', duration: '90 mins' },
    { value: 'mammogram', label: 'Mammogram Screening', duration: '30 mins' },
    { value: 'ultrasound', label: 'Breast Ultrasound', duration: '45 mins' }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  if (isBooked) {
    return (
      <div className="py-12 bg-gradient-to-b from-white to-[#FDE2E4]/20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3BAFA9] to-[#2E8B8B] rounded-3xl mb-6 shadow-xl">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl mb-6 text-[#2C2C2C]">
              Appointment Confirmed!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your appointment has been successfully booked. You will receive a confirmation email shortly.
            </p>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-[#E91E63]" />
                    <span><strong>Date:</strong> {selectedDate}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-[#E91E63]" />
                    <span><strong>Time:</strong> {selectedTime}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-[#E91E63]" />
                    <span><strong>Doctor:</strong> {doctors.find(d => d.id === selectedDoctor)?.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#E91E63]" />
                    <span><strong>Type:</strong> {appointmentTypes.find(t => t.value === appointmentType)?.label}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-8">
              <Button 
                onClick={() => setIsBooked(false)}
                className="bg-gradient-to-r from-[#E91E63] to-[#FF6F91] hover:from-[#C2185B] hover:to-[#E55A87] text-white px-8 py-3 rounded-xl"
              >
                Book Another Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gradient-to-b from-white to-[#FDE2E4]/20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#E91E63] to-[#FF6F91] rounded-3xl mb-6 shadow-xl">
            <Calendar className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 text-[#2C2C2C]">
            Schedule Your Appointment
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Book your breast cancer screening or consultation with our experienced specialists. Take the first step towards your health and peace of mind.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Doctor Selection */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-[#2C2C2C]">Select Your Doctor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  {doctors.map((doctor) => (
                    <Card 
                      key={doctor.id}
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedDoctor === doctor.id 
                          ? 'ring-2 ring-[#E91E63] bg-[#FDE2E4]/30' 
                          : 'hover:shadow-md'
                      }`}
                      onClick={() => setSelectedDoctor(doctor.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-16 h-16 rounded-xl object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-[#2C2C2C] mb-1">{doctor.name}</h3>
                            <p className="text-[#E91E63] mb-2">{doctor.specialty}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span>{doctor.experience} experience</span>
                              <Badge variant="secondary" className="bg-[#3BAFA9] text-white">
                                ⭐ {doctor.rating}
                              </Badge>
                            </div>
                            <div className="mt-2">
                              <span className="text-sm text-gray-500">Available: </span>
                              <span className="text-sm">{doctor.availableDays.join(', ')}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Appointment Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#2C2C2C]">Appointment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleBookAppointment} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="appointmentType">Appointment Type</Label>
                      <Select value={appointmentType} onValueChange={setAppointmentType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select appointment type" />
                        </SelectTrigger>
                        <SelectContent>
                          {appointmentTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label} ({type.duration})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select value={selectedTime} onValueChange={setSelectedTime}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any specific concerns or information you'd like to share..."
                      className="h-24"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={!selectedDoctor || !appointmentType || !selectedDate || !selectedTime}
                    className="w-full bg-gradient-to-r from-[#E91E63] to-[#FF6F91] hover:from-[#C2185B] hover:to-[#E55A87] text-white py-3 rounded-xl text-lg disabled:opacity-50"
                  >
                    Book Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#FDE2E4] to-[#C7A4C4]/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#2C2C2C] mb-4">Why Schedule Regular Screenings?</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#E91E63] rounded-full mt-2"></div>
                    <span>Early detection saves lives - 99% survival rate when caught early</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#E91E63] rounded-full mt-2"></div>
                    <span>Mammograms can detect cancer 2 years before you can feel it</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-[#E91E63] rounded-full mt-2"></div>
                    <span>Regular screenings reduce death risk by 20-40%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#2C2C2C] mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="h-4 w-4 text-[#E91E63]" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="h-4 w-4 text-[#E91E63]" />
                    <span>appointments@breastcare.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="h-4 w-4 text-[#E91E63]" />
                    <span>123 Healthcare Center Dr<br />Medical District, CA 90210</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-[#3BAFA9] to-[#2E8B8B] text-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Our patient coordinators are here to help you schedule and prepare for your appointment.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full bg-white text-[#3BAFA9] hover:bg-gray-100"
                >
                  Call Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}