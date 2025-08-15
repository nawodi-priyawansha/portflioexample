import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Award, Calendar, Coffee, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function PortfolioAbout() {
  const stats = [
    { icon: Calendar, value: '5+', label: 'Years Experience' },
    { icon: Award, value: '150+', label: 'Projects Completed' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
    { icon: Heart, value: '200+', label: 'Happy Clients' }
  ];

  const skills = [
    { name: 'WordPress', level: 95 },
    { name: 'PHP', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'WooCommerce', level: 92 },
    { name: 'UI/UX Design', level: 88 }
  ];

  const experiences = [
    {
      period: '2022 - Present',
      role: 'Senior WordPress Developer',
      company: 'Freelance',
      description: 'Leading WordPress development projects for clients worldwide, specializing in custom themes and WooCommerce solutions.'
    },
    {
      period: '2020 - 2022',
      role: 'Full Stack Developer',
      company: 'Digital Agency',
      description: 'Developed and maintained WordPress websites, created custom plugins, and collaborated with design teams.'
    },
    {
      period: '2019 - 2020',
      role: 'Junior WordPress Developer',
      company: 'Tech Startup',
      description: 'Built responsive WordPress themes and learned advanced development techniques working with senior developers.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
            className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full mb-6"
          >
            <span className="text-secondary">👨‍💻 About Me</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            Passionate Developer & Designer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a dedicated WordPress developer with a passion for creating beautiful, functional websites that deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-secondary rounded-3xl blur-2xl opacity-30 transform -rotate-3"></div>
              <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop"
                  alt="Developer Workspace"
                  className="w-full rounded-2xl shadow-lg hover-scale transition-transform duration-500"
                />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-4 text-center border-0 shadow-md hover:shadow-lg transition-all duration-300 hover-lift">
                      <IconComponent className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Content - About Text and Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl text-gray-900">My Journey</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  My passion for web development started 5 years ago when I built my first WordPress website. Since then, I've been constantly learning and evolving, staying up-to-date with the latest technologies and best practices.
                </p>
                <p>
                  I specialize in creating custom WordPress solutions that not only look great but also perform exceptionally well. From simple business websites to complex e-commerce platforms, I bring ideas to life with clean, efficient code.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and tutorials.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl text-gray-900">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-gray-200"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-3xl text-gray-900 text-center">Professional Experience</h3>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8 mb-12`}
              >
                <div className="flex-1">
                  <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg text-gray-900">{exp.role}</h4>
                        <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-secondary">{exp.company}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className="relative">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  {index < experiences.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-200"></div>
                  )}
                </div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}