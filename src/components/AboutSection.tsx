import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Award, Users, Clock, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function AboutSection() {
  const achievements = [
    { icon: Award, title: '15+ Years', description: 'Professional Experience' },
    { icon: Users, title: '2,500+', description: 'Satisfied Customers' },
    { icon: Clock, title: '24/7', description: 'Booking Available' },
    { icon: Star, title: '4.9/5', description: 'Customer Rating' }
  ];

  const team = [
    {
      name: 'Marcus Thompson',
      role: 'Master Barber & Owner',
      experience: '15 years',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'David Rodriguez',
      role: 'Senior Stylist',
      experience: '8 years',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face'
    },
    {
      name: 'James Wilson',
      role: 'Grooming Specialist',
      experience: '6 years',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            About StyleCraft
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            For over 15 years, we've been dedicated to providing exceptional grooming services that help our clients look and feel their absolute best. Our passion for the craft and commitment to excellence sets us apart.
          </p>
        </motion.div>

        {/* Story and Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-gray-900">Our Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                StyleCraft began as a vision to create more than just a barbershop—we wanted to build a sanctuary where men could relax, rejuvenate, and rediscover their confidence. What started as a small neighborhood shop has grown into a trusted destination for discerning gentlemen.
              </p>
              <p>
                Our team of skilled professionals combines traditional barbering techniques with modern styling trends, ensuring every client receives a personalized experience that exceeds expectations.
              </p>
              <p>
                We believe that great grooming is an investment in yourself, and we're honored to be part of your journey to looking and feeling your absolute best.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-3xl blur-2xl transform -rotate-3" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&h=400&fit=crop"
              alt="StyleCraft Barbershop Interior"
              className="relative z-10 w-full rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <IconComponent className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-2xl text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl text-gray-900 text-center mb-12">Meet Our Expert Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-amber-100"
                    />
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-3 py-1 rounded-full text-xs">
                      {member.experience}
                    </div>
                  </div>
                  <h4 className="text-xl text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-amber-600 mb-2">{member.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}