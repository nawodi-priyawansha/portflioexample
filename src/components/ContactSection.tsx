import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Clock, Calendar, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Main Street', 'Downtown District', 'City, State 12345']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['(555) 123-4567', 'Call or Text']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@stylecraft.com', 'bookings@stylecraft.com']
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 9AM-8PM', 'Saturday: 8AM-6PM', 'Sunday: 10AM-5PM']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Contact form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to experience the StyleCraft difference? Book your appointment today or reach out with any questions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white mb-6">Contact Information</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                        <IconComponent className="h-8 w-8 text-amber-400 mb-4" />
                        <h4 className="text-lg text-white mb-2">{info.title}</h4>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-300 text-sm">{detail}</p>
                          ))}
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-xl text-white">Quick Actions</h4>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Online
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="flex-1 border-white/30 text-white hover:bg-white/10"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
              <div className="flex items-center mb-6">
                <MessageSquare className="h-6 w-6 text-amber-400 mr-3" />
                <h3 className="text-xl text-white">Send us a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-white">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <div>
                  <Label htmlFor="service" className="text-white">Preferred Service</Label>
                  <Input
                    id="service"
                    placeholder="Haircut, Head Massage, Grooming, etc."
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your preferred appointment time or any special requests..."
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 min-h-[100px]"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                >
                  Send Message & Book Appointment
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}