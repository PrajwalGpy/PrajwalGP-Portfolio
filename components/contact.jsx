import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contacts" className="">
      <div className="relative flex flex-col justify-center gap-y-4 p-4 px-6">
        <h3 className="text-xl font-semibold text-gray-100">Contacts</h3>

        <div className="flex flex-col justify-between gap-y-4">
          <a
            href="https://github.com/PrajwalGpy"
            target="_blank"
            className="group"
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-x-2 text-accent/70 md:group-hover:text-accent">
                <FaGithub className="w-4 h-4" />
                Github
              </div>
              <span className="opacity-70 transition md:group-hover:opacity-100">
                ↗
              </span>
            </div>
          </a>
          <div className="border-b border-accent/15" />
          <a
            href="https://www.linkedin.com/in/prajwalgopalpoojary/"
            target="_blank"
            className="group"
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-x-2 text-accent/70 md:group-hover:text-accent">
                <FaLinkedinIn className="w-4 h-4" />
                LinkedIn
              </div>
              <span className="opacity-70 transition md:group-hover:opacity-100">
                ↗
              </span>
            </div>
          </a>
          <div className="border-b border-accent/15" />
          <a
            href="mailto:prajwalgpa@gmail.com"
            target="_blank"
            className="group"
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-x-2 text-accent/70 md:group-hover:text-accent">
                <SiGmail className="w-4 h-4" />
                prajwalgpa@gmail.com
              </div>
            </div>
          </a>

          <div className="border-b border-accent/15" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
