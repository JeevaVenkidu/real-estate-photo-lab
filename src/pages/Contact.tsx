
import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { GlassMorphismCard } from '../components/GlassMorphismCard';
import { ParticleBackground } from '../components/ParticleBackground';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MessageCircle, Clock, Send, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const Contact: React.FC = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log('Form submitted:', values);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    form.reset();
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@realtyfix.com',
      description: 'Send us your photos anytime'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+1 (555) 123-4567',
      description: 'Quick responses and updates'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Direct line for urgent requests'
    },
    {
      icon: Clock,
      title: 'Availability',
      value: '24/7 Including Holidays',
      description: 'We never stop working for you'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <ParticleBackground intensity="low" />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h1>
          
          <motion.p
            className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to transform your real estate photos? Send us your images and let's create something amazing together.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <GlassMorphismCard key={method.title} delay={index * 0.1}>
                <div className="text-center">
                  <method.icon className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                  <div className="text-cyan-400 font-medium mb-2">{method.value}</div>
                  <p className="text-gray-300 text-sm">{method.description}</p>
                </div>
              </GlassMorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-8 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Send Your Photos for Editing
          </motion.h2>
          
          <GlassMorphismCard>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Full Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field}
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email Address *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="john@example.com" 
                            {...field}
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel"
                            placeholder="+1 (555) 123-4567" 
                            {...field}
                            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Service Needed</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-cyan-400 focus:ring-cyan-400">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="hdr">HDR Photo Editing</SelectItem>
                            <SelectItem value="twilight">Day-to-Dusk Conversion</SelectItem>
                            <SelectItem value="staging">Virtual Staging</SelectItem>
                            <SelectItem value="sky">Sky Replacement</SelectItem>
                            <SelectItem value="removal">Object Removal</SelectItem>
                            <SelectItem value="panorama">Panorama 360</SelectItem>
                            <SelectItem value="multiple">Multiple Services</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project, timeline, and any specific requirements..."
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400 min-h-[100px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-3 font-semibold"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    type="button"
                    variant="outline"
                    className="flex-1 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Files
                  </Button>
                </div>
              </form>
            </Form>
          </GlassMorphismCard>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <GlassMorphismCard>
            <motion.h2
              className="text-2xl font-bold mb-4 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Need Same-Day Service?
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              For urgent listings or last-minute needs, contact us directly
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                💬 WhatsApp Now
              </motion.a>
              <motion.a
                href="tel:+15551234567"
                className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Call Direct
              </motion.a>
            </motion.div>
          </GlassMorphismCard>
        </div>
      </section>
    </div>
  );
};
