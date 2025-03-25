import React, { useState, useRef, FormEvent } from 'react';
import { Button } from './ui/button.tsx';
import { Input } from './ui/input.tsx';
import { Textarea } from './ui/textarea.tsx';
import { useToast } from '../hooks/use-toast.ts';
import { Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) {
      console.error("Il riferimento al form è nullo!");
      return;
    }

    setIsSubmitting(true);

    const serviceId = 'service_1o3kbkb';
    const templateId = 'template_n4jvym7';
    const publicKey = 'vQ9_BvNFozgrURhll';

    emailjs.sendForm(serviceId, templateId, formRef.current, {
      publicKey: publicKey,
    })
      .then((result) => {
        console.log('Email inviata con successo!', result.text);
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you as soon as possible.",
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Errore nell\'invio dell\'email:', error);
        toast({
          title: "Failed to send message",
          description: "There was an error sending your message. Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };


  return (
    <section id="contact" className="py-20 px-6 md:px-10 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-accent/10 text-accent mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Contact Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-panel rounded-xl p-8 animate-slide-in-from-left" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-display font-semibold mb-6">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type='name'
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="background/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="background/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject of your message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="background/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] background/50"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </>
                )}
              </Button>
            </form>
          </div>

          <div className="space-y-8 lg:pl-10 animate-slide-in-from-right" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-display font-semibold">Connect With Me</h3>

            <p className="text-muted-foreground">
              Feel free to reach out through any of the following channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-5">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
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
                  <p className="text-sm text-muted-foreground">Phone</p>
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
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriele-zito-987452217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;