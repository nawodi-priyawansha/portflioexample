import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Scissors, Zap, Sparkles, Smile } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Scissors,
      title: 'Haircut',
      description: 'Precision cuts tailored to your style and face shape. From classic to contemporary, our stylists deliver perfection.',
      price: 'From $35',
      features: ['Consultation', 'Wash & Cut', 'Styling', 'Hot Towel Finish'],
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=300&h=200&fit=crop'
    },
    {
      icon: Zap,
      title: 'Head Massage',
      description: 'Rejuvenating scalp massage to relieve stress and promote hair health. Pure relaxation and therapeutic benefits.',
      price: 'From $25',
      features: ['Deep Tissue Massage', 'Essential Oils', 'Pressure Point Therapy', '30 Minutes'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop'
    },
    {
      icon: Sparkles,
      title: 'Grooming',
      description: 'Complete grooming package including beard trim, mustache styling, and eyebrow shaping for the modern gentleman.',
      price: 'From $45',
      features: ['Beard Trim', 'Mustache Style', 'Eyebrow Shape', 'Hot Towel Treatment'],
      image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=300&h=200&fit=crop'
    },
    {
      icon: Smile,
      title: 'Facial And Cleanup',
      description: 'Deep cleansing facial treatment to refresh and revitalize your skin. Leave feeling renewed and confident.',
      price: 'From $55',
      features: ['Deep Cleansing', 'Exfoliation', 'Face Mask', 'Moisturizing'],
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=200&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
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
            Our Premium Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of professional grooming services designed to help you look and feel your absolute best.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  {/* Service Image */}
                  <div className="relative mb-6 rounded-xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-full">
                      <IconComponent className="h-6 w-6 text-amber-600" />
                    </div>
                  </div>

                  {/* Service Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price and CTA */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg text-amber-600">{service.price}</span>
                      </div>
                      <Button 
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}