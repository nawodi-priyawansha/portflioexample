import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Palette, Users, Star } from 'lucide-react';
import exampleImage from 'figma:asset/9355ba7fa127355ed3a2d03e107a46ed8dee398a.png';

export default function ArtHeroSection() {
  const stats = [
    { icon: Palette, value: '10,000+', label: 'Artworks' },
    { icon: Users, value: '5,000+', label: 'Artists' },
    { icon: Star, value: '50+', label: 'Exhibitions' }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-stone-50 via-rose-50/30 to-amber-50/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute top-0 right-0 w-1/2 h-full bg-no-repeat bg-contain bg-right-top"
          style={{ backgroundImage: `url(${exampleImage})` }}
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-stone-200/50"
                >
                  <span className="text-sm text-stone-600">✨ Discover Contemporary Art</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl lg:text-7xl leading-tight text-stone-900"
                >
                  Where Art
                  <span className="block text-transparent bg-gradient-to-r from-rose-400 via-amber-500 to-orange-400 bg-clip-text">
                    Comes Alive
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg text-stone-600 max-w-lg leading-relaxed"
                >
                  Explore a curated collection of contemporary artworks from emerging and established artists. 
                  Discover pieces that speak to your soul and transform your space.
                </motion.p>
              </div>
              
              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  size="lg" 
                  className="group bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 rounded-xl"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-stone-300 text-stone-700 hover:bg-stone-50 px-8 py-4 rounded-xl"
                >
                  Featured Artists
                </Button>
              </motion.div>
              
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-200/50"
              >
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      className="text-center"
                    >
                      <IconComponent className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                      <div className="text-2xl text-stone-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-stone-600">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
            
            {/* Right Content - Artistic Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Illustration */}
                <div className="relative z-10">
                  <img
                    src={exampleImage}
                    alt="Botanical Art Illustration"
                    className="w-full max-w-lg mx-auto opacity-90"
                  />
                </div>
                
                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/4 -left-8 w-16 h-16 border border-amber-200/50 rounded-full"
                />
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-1/4 -right-6 w-12 h-12 bg-gradient-to-br from-rose-200 to-amber-200 rounded-full blur-sm opacity-60"
                />
                
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-3/4 left-1/4 w-8 h-8 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full blur-sm opacity-50"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
    </section>
  );
}