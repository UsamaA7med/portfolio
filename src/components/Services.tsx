const services = [
  {
    id: 1,
    name: "Frontend Development",
    description:
      "build and maintain responsive web applications using React, Next.js, and Tailwind CSS.",
  },
  {
    id: 2,
    name: "backend Development",
    description: "build restful APIs using Node.js, Express.js, and MongoDB.",
  },
  {
    id: 3,
    name: "SEO Optimization",
    description:
      "Enhancing your website's visibility and ranking on search engines through strategic keyword integration and technical optimization",
  },
];
const Services = () => {
  return (
    <section id="services" className="text-white px-4 py-20">
      <div className="container mx-auto flex flex-col  gap-10 lg:flex-row">
        <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
          <h2 className="uppercase text-purple-300 text-6xl font-extrabold sticky top-20">
            services
          </h2>
        </div>
        <div className="md:w-3/4">
          {services.map((service) => (
            <div key={service.id} className="mb-16 flex items-start">
              <div className="text-purple-300 font-bold text-5xl mr-6">
                {service.id}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
