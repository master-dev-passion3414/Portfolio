"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode, FiFolder, FiArrowRight } from "react-icons/fi";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", label: "All" },
    { id: "education", label: "Education" },    
    { id: "legal", label: "Law" },    
    { id: "healthcare", label: "Healthcare" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "realestate", label: "Real Estate" },
  ];
  
  const projects = [
    {
      id: 1,
      title: "Sean Cappello Fitness",
      description: "Created a personal fitness website that presents coaching as a personalized experience, highlighting individual training, nutrition, accountability, and sustainable results for adults looking to improve their health and fitness.",
      image: "/images/project 1.jpg",
      imageAlt: "Sean Cappello Fitness - Healthcare Fitness Platform",
      github: "#",
      demo: "https://seancappellofitness.com/",
      category: "healthcare",
      tags: ["Fitness", "Personal Training", "Health & Wellness", "Coaching", "Personal Brand"],
      featured: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Midwest Sleep Remedies",
      description: "Designed a clean and reassuring healthcare website that simplifies information about sleep support services and helps patients understand their treatment options before getting in touch.",
      image: "/images/project 2.jpg",
      imageAlt: "Midwest Sleep Remedies- WordPress Healthcare Website",
      github: "#",
      demo: "https://midwestsleepremedies.com/",
      category: "healthcare",
      tags: ["Healthcare", "Sleep Medicine", "Medical Services", "Patient Experience", "WordPress"],
      featured: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Oddmuse Luxury Womenwear DTC Brand",
      description: "Created a ecommerce fashion experience that puts the clothing and photography at the center, with a clean layout and intuitive navigation designed to make the collections feel premium and easy to explore.",
      image: "/images/project 3.jpg",
      imageAlt: "Oddmuse Luxury Womenwear Brand",
      github: "#",
      demo: "https://oddmuse.co.uk/en-us",
      category: "ecommerce",
      tags: ["Fashion", "Ecommerce", "Luxury", "DTC Brand"],
      featured: true,
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "OC Family Law & Divorce",
      description: "Designed a professional and approachable website for a family law practice, organizing complex legal services into a clear experience that helps visitors quickly understand their options and take the next step.",
      image: "/images/project 4.jpg",
      imageAlt: "OC Family Law & Divorce - Law Firm Website",
      github: "#",
      demo: "https://ocfamilylawanddivorce.com/",
      category: "legal",
      tags: ["Legal", "Family Law", "Divorce", "Professional Services", "Lead Generation"],
      featured: true,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "New Jersey Divorce Attorney",
      description: "Built a clear and trustworthy legal website that makes divorce-related information easier to navigate, helping potential clients quickly find relevant services and information.",
      image: "/images/project 5.jpg",
      imageAlt: "New Jersey Divorce Attorney - Attorney Website",
      github: "#",
      demo: "https://www.newjerseydivorceattorney.com/",
      category: "legal",
      tags: ["Legal", "Divorce Law", "Attorney Website", "Lead Generation"],
      featured: true,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Seattle Home Search",
      description: "Built a real estate experience that combines property search with a personal realtor brand, allowing visitors to explore homes while also learning about the agent and the services available to them.",
      image: "/images/project 6.jpg",
      imageAlt: "Seattle Home Search - Seattle Home Rental Marketplace",
      github: "#",
      demo: "https://www.seattlehomesearch.com/",
      category: "realestate",
      tags: ["Real Estate", "Property Search", "Real Estate Agent", "Property Listings", "Lead Generation"],
      featured: true,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 7,
      title: "Cool Towel",
      description: "Created a product-focused ecommerce experience for a cooling towel brand, using the founder's story, product benefits, and active lifestyle imagery to make a simple product more memorable and engaging.",
      image: "/images/project 7.jpg",
      imageAlt: "Cool Towel - Ecommerce Market",
      github: "#",
      demo: "https://cooltowel.com/",
      category: "ecommerce",
      tags: ["Property Management", "SaaS", "SMS Integration", "Bengali"],
      featured: true,
      color: "from-teal-500 to-green-500"
    },
    {
      id: 8,
      title: "Synthesis Tutor",
      description: "Redesigned an interactive education experience focused on personalized math learning, making complex features easier to understand while creating a more engaging and approachable experience for students and parents.",
      image: "/images/project 8.jpg",
      imageAlt: "Synthesis Tutor - Child Education Platform",
      github: "#",
      demo: "https://www.synthesis.com/tutor",
      category: "education",
      tags: ["Education", "E-Learning", "Personalized Learning", "Product Design"],
      featured: true,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 9,
      title: "GRH Kratom",
      description: "Designed a clean and informative ecommerce experience that focuses on product discovery, education, and transparency, helping customers navigate the store and better understand the products.",
      image: "/images/project 9.jpg",
      imageAlt: "GRH Kratom - Ecommerce Gummy Platform",
      github: "#",
      demo: "https://grhkratom.com/",
      category: "ecommerce",
      tags: ["Ecommerce", "Wellness", "Gummy", "Product Education"],
      featured: true,
      color: "from-pink-500 to-rose-500"
    },
        {
      id: 10,
      title: "Add-A-Pearl",
      description: "Created an emotional ecommerce experience for personalized pearl jewelry, explaining the concept clearly while highlighting how each pearl can become part of a meaningful family tradition.",
      image: "/images/project 10.jpg",
      imageAlt: "Add-A-Pearl - Ecommerce Pearl Website",
      github: "#",
      demo: "https://www.addapearl.com/",
      category: "ecommerce",
      tags: ["Ecommerce", "Jewelry", ,"Personalization"],
      featured: true,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 11,
      title: "Big Dog Pet Foods",
      description: "Redesigned the ecommerce experience for a raw pet food brand with a large product range, making it easier for pet owners to explore products, understand their benefits, and find the right food for their pets.",
      image: "/images/project 11.jpg",
      imageAlt: "Big Dog Pet Foods - Pet Market",
      github: "#",
      demo: "https://www.bigdogpetfoods.com/",
      category: "ecommerce",
      tags: ["Ecommerce", "Pet Care", "Discovery"],
      featured: true,
      color: "from-pink-500 to-rose-500"
    },
        {
      id: 12,
      title: "SouthView Cosmetic Dentistry",
      description: "Built a premium dental website that combines modern visual design with patient-focused information, showcasing cosmetic treatments, advanced technology, and the practice's personalized approach to care.",
      image: "/images/project 12.jpg",
      imageAlt: "SouthView Cosmetic Dentistry - Dentist Website",
      github: "#",
      demo: "https://www.southviewdentistrycharlotte.com/",
      category: "healthcare",
      tags: ["Healthcare", "Cosmetic Dentistry", "Luxury UX"],
      featured: true,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 13,
      title: "My Favorite Tale",
      description: "Created a warm and engaging ecommerce experience for personalized children's books, making it easy for parents to understand the customization process and turn their child's story into a memorable keepsake.",
      image: "/images/project 13.jpg",
      imageAlt: "My Favorite Tale - Education Ecommerce Platform",
      github: "#",
      demo: "https://www.myfavoritetale.com/",
      category: "education",
      tags: ["Ecommerce", "Personalization", "Children's Books", "Gift Platform", "Storytelling", "UX/UI Design"],
      featured: true,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 14,
      title: "Onefinestay",
      description: "Designed a premium travel and property discovery experience that showcases luxury homes and destinations through immersive photography, curated collections, and an easy-to-navigate booking journey.",
      image: "/images/project 14.jpg",
      imageAlt: "Onefinestay - Luxury Vacation Rental, Luxury Villa & Home Rentals Platform",
      github: "#",
      demo: "https://www.onefinestay.com/",
      category: "realestate",
      tags: ["Real Estate", "Luxury Travel", "Vacation Rentals", "Hospitality", "Booking Experience"],
      featured: true,
      color: "from-pink-500 to-rose-500"
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">Client Projects</span>
          <h2 className="heading-lg text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="paragraph text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
            A collection of professional projects including SaaS platforms, e-commerce solutions, educational websites, and developer tools. Each project demonstrates advanced functionality and modern design principles.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-full p-1.5 shadow-md border border-gray-100 dark:border-gray-700 flex flex-wrap justify-center gap-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-2 ${
                project.featured ? 'ring-2 ring-blue-500/20' : ''
              }`}
            >
              <div className="relative h-56 w-full overflow-hidden">
                {/* Project Image */}
                <div className="relative h-full w-full">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay on top of the image for better text visibility */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded-full shadow-lg">
                      Featured
                    </span>
                  </div>
                )}
                
                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-colors duration-300 shadow-lg"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <FiGithub size={16} />
                    </a>
                  )}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-colors duration-300 shadow-lg"
                    aria-label={`View live demo for ${project.title}`}
                  >
                    <FiExternalLink size={16} />
                  </a>
                </div>
                
                {/* Tags overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white shadow-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white shadow-md">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Project details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Footer */}
                <div className="flex justify-between items-center pt-2 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <FiFolder className="mr-2" size={14} />
                    <span className="text-sm font-medium capitalize">{project.category.replace('_', ' ')}</span>
                  </div>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group/link hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    View Live
                    <FiArrowRight className="ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300" size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <a 
            href="https://github.com/master-dev-passion3414" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <FiGithub className="mr-2" size={18} />
            View More Projects on GitHub
            <FiArrowRight className="ml-2" size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;