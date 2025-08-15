import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Eye } from 'lucide-react';

export default function PortfolioProjects() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Fashion Store',
      category: 'WooCommerce',
      description: 'A modern fashion e-commerce website built with WooCommerce, featuring custom product filters, wishlist functionality, and advanced checkout process.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'SASS'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Custom Product Filters', 'Wishlist System', 'Advanced Checkout', 'Mobile Responsive']
    },
    {
      id: 2,
      title: 'Corporate Business Website',
      category: 'Web Development',
      description: 'Professional corporate website with custom theme development, advanced contact forms, and integrated CRM system.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['WordPress', 'PHP', 'React', 'REST API', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Custom Theme', 'CRM Integration', 'Contact Forms', 'SEO Optimized']
    },
    {
      id: 3,
      title: 'Restaurant Booking Platform',
      category: 'UI/UX + Development',
      description: 'Complete restaurant booking platform with table reservation system, menu management, and customer reviews.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      technologies: ['WordPress', 'Custom Plugin', 'Vue.js', 'PayPal API'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Table Booking', 'Menu Management', 'Payment Gateway', 'Review System']
    },
    {
      id: 4,
      title: 'Health & Wellness Blog',
      category: 'UI/UX Design',
      description: 'Beautiful and clean blog design focused on health and wellness content with custom post types and advanced search.',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop',
      technologies: ['WordPress', 'Custom Theme', 'ACF', 'Elementor'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Custom Post Types', 'Advanced Search', 'Newsletter Integration', 'Social Sharing']
    },
    {
      id: 5,
      title: 'Real Estate Portal',
      category: 'WooCommerce',
      description: 'Comprehensive real estate portal with property listings, advanced search filters, and agent management system.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      technologies: ['WordPress', 'Custom Plugin', 'Google Maps API', 'AJAX'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Property Listings', 'Map Integration', 'Agent Profiles', 'Advanced Filters']
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'WooCommerce':
        return 'bg-primary text-white';
      case 'Web Development':
        return 'bg-secondary text-white';
      case 'UI/UX Design':
        return 'bg-tertiary text-gray-800';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            className="inline-flex items-center px-4 py-2 bg-tertiary/10 rounded-full mb-6"
          >
            <span className="text-tertiary">💼 My Work</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in WordPress development, UI/UX design, and WooCommerce solutions.
          </p>
        </motion.div>

        {/* Featured Project Slider */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              {/* Project Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-30 transform rotate-3"></div>
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  
                  {/* Preview Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-white/90 hover:bg-white text-gray-900 shadow-lg"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge className={`${getCategoryColor(projects[currentProject].category)} px-3 py-1`}>
                    {projects[currentProject].category}
                  </Badge>
                  
                  <h3 className="text-3xl text-gray-900">
                    {projects[currentProject].title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {projects[currentProject].description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="text-gray-900">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentProject].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover-scale cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-gray-900">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {projects[currentProject].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <Button 
                    className="bg-gradient-primary hover:opacity-90 text-white border-0 hover-lift"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10 hover-lift"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevProject}
              className="p-3 rounded-full hover-lift"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {/* Project Indicators */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject 
                      ? 'bg-primary w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextProject}
              className="p-3 rounded-full hover-lift"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl text-gray-900 text-center">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setCurrentProject(index)}
                className="cursor-pointer"
              >
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover-lift group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <Badge className={`${getCategoryColor(project.category)} text-xs mb-2`}>
                      {project.category}
                    </Badge>
                    <h4 className="text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}