import { motion } from "motion/react";
import { BiArrowBack } from "react-icons/bi";
const Contact = () => {
  return (
    <section
      id="contact"
      className="overflow-x-clip text-white container mx-auto px-4 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex w-full justify-center items-center flex-col lg:flex-row gap-16"
      >
        <div className="space-y-12 w-full lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-7xl font-bold text-gray-300"
          >
            Get in <span className="text-purple-500">touch</span>
          </motion.h2>
          <motion.div
            className="space-y-8  glass p-8 rounded-2xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Phone</p>
              <a
                href="tel:+201153086221"
                className="text-2xl font-semibold transition duration-300 flex items-center gap-2 hover:text-purple-400"
              >
                +201153086221
                <span className="text-gray-500">
                  <BiArrowBack />
                </span>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Email</p>
              <a
                className="text-2xl font-semibold transition duration-300 flex items-center gap-2 hover:text-purple-400"
                href="mailto:osamaahmedwork1@gmail.com"
              >
                Email
                <span className="text-gray-500">
                  <BiArrowBack />
                </span>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Office</p>
              <address className="text-xl not-italic leading-relaxed">
                <span className="text-gray-500">Cairo, Egypt</span>
              </address>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full lg:w-1/2 h-[400px] rounded-2xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6894.764868070535!2d31.0527637!3d30.2261689!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1746556638295!5m2!1sar!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
