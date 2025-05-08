const services = [
  {
    id: 1,
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptas.",
  },
  {
    id: 2,
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptas.",
  },
  {
    id: 3,
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptas.",
  },
];
const Services = () => {
  return (
    <section id="services" className="text-white px-4 py-20">
      <div className="container mx-auto flex flex-col  gap-10 lg:flex-row">
        <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
          <h2 className="uppercase text-6xl font-extrabold sticky top-20">
            services
          </h2>
        </div>
        <div className="md:w-3/4">
          {services.map((service) => (
            <div key={service.id} className="mb-16 flex items-start">
              <div className="text-gray-300 font-bold text-5xl mr-6">
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
