import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import "../style/Contact.css";


const Contact = () => {


  return (
    <section id="contact" className="py-20 px-6 md:px-10 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-accent/10 text-accent mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Contact Me</h2>
          <p className="text-lg  max-w-2xl mx-auto text-description">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>

          <p className="text-lg  max-w-2xl mx-auto text-description">
            Feel free to reach out through any of the following channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className='contact_info mb-4'>
            <div className="space-y-5 ">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text_social">Email</p>
                  <a href="mailto:hello@jhondoe.com" className="font-medium hover:text-accent transition-colors">
                    devgabrielezito@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text_social">Phone</p>
                  <a href="tel:+15551234567" className="font-medium hover:text-accent transition-colors">
                    (+39) 329 436 9945
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-medium mb-4">Find me on</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Dripgl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center  hover:text-accent hover:bg-accent/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriele-zito-987452217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center  hover:text-accent hover:bg-accent/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Contact;