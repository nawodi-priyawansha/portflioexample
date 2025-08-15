import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Code, Palette, ShoppingCart, ArrowRight, Check } from 'lucide-react';

export default function PortfolioServices() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom WordPress themes and plugins built with modern standards and best practices.',
      gradient: 'bg-gradient-primary',
      features: ['Custom WordPress Themes', 'Plugin Development', 'API Integration', 'Performance Optimization'],
      price: 'Starting at $1,500',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-friendly designs that convert visitors into customers.',
      gradient: 'bg-gradient-secondary',
      features: ['User Experience Design', 'Responsive Design', 'Brand Identity', 'Wireframing & Prototyping'],
      price: 'Starting at $800',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop'
    },
    {
      icon: ShoppingCart,
      title: 'WooCommerce',
      description: 'Complete e-commerce solutions that drive sales and grow your business.',
      gradient: 'bg-gradient-tertiary',
      features: ['Store Setup & Configuration', 'Custom Payment Gateways', 'Inventory Management', 'Order Processing'],
      price: 'Starting at $2,000',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6"
          >
            <span className="text-primary">🚀 Services I Offer</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            What I Can Do For You
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From concept to launch, I provide end-to-end WordPress development services that help your business succeed online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full p-0 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden bg-white">
                  {/* Service Image with Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 ${service.gradient} opacity-80`} />
                    <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-full">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute bottom-4 right-4 text-white">
                      <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Button 
                        className="w-full group/btn bg-gray-900 hover:bg-gray-800 text-white border-0 transition-all duration-300"
                        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-primary rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl mb-4">
              Need Something Custom?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific requirements and create a solution that perfectly fits your needs.
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white text-primary border-white hover:bg-gray-50 hover-lift"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Talk About Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}