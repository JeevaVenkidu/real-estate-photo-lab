
import React from 'react';
import { motion } from 'framer-motion';
import { GlassMorphismCard } from '../components/GlassMorphismCard';
import { ParticleBackground } from '../components/ParticleBackground';

export const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Basic Editing',
      price: '$0.35',
      unit: 'per image',
      description: 'Perfect for quick touch-ups and basic enhancements',
      features: [
        'Basic color correction',
        'Brightness & contrast adjustment',
        'Cropping & straightening',
        'Light object removal',
        '8-12 hour turnaround'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'HDR Professional',
      price: '$0.45',
      unit: 'per image',
      description: 'Advanced HDR processing for stunning results',
      features: [
        'Professional HDR processing',
        'Multiple exposure blending',
        'Advanced color enhancement',
        'Shadow/highlight balancing',
        '8-12 hour turnaround'
      ],
      popular: true,
      color: 'from-cyan-500 to-purple-500'
    },
    {
      name: 'Twilight Magic',
      price: '$3.00',
      unit: 'per image',
      description: 'Transform day photos into stunning twilight scenes',
      features: [
        'Day to dusk conversion',
        'Interior lighting effects',
        'Sky enhancement',
        'Warm ambient lighting',
        '12-24 hour turnaround'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Virtual Staging',
      price: '$15.00',
      unit: 'per room',
      description: 'Complete virtual furniture and decor placement',
      features: [
        'Modern furniture placement',
        'Style-appropriate decor',
        'Natural lighting integration',
        'Multiple style options',
        '24-48 hour turnaround'
      ],
      popular: false,
      color: 'from-pink-500 to-red-500'
    }
  ];

  const bulkDiscounts = [
    { range: '10-24 images', discount: '5%' },
    { range: '25-49 images', discount: '10%' },
    { range: '50-99 images', discount: '15%' },
    { range: '100+ images', discount: '20%' }
  ];

  const subscriptionPlans = [
    {
      name: 'Starter',
      price: '$49',
      unit: 'per month',
      images: '150 basic edits',
      savings: 'Save 15%',
      features: [
        '150 basic image edits',
        'Priority support',
        'Same-day processing',
        'Bulk upload tools'
      ]
    },
    {
      name: 'Professional',
      price: '$129',
      unit: 'per month',
      images: '300 HDR edits',
      savings: 'Save 25%',
      features: [
        '300 HDR image edits',
        'Priority support',
        'Same-day processing',
        'Dedicated account manager',
        'Free revisions'
      ]
    },
    {
      name: 'Agency',
      price: '$299',
      unit: 'per month',
      images: 'Unlimited basic + 200 HDR',
      savings: 'Save 35%',
      features: [
        'Unlimited basic edits',
        '200 HDR edits',
        'White-label solutions',
        'API access',
        'Custom branding',
        '24/7 priority support'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Transparent Pricing
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional photo editing at affordable prices. No hidden fees, no surprises. 
            Choose pay-per-image or save with our subscription plans.
          </motion.p>
        </div>
      </section>

      {/* Pay-Per-Image Pricing */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Pay-Per-Image Pricing
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, index) => (
              <GlassMorphismCard key={plan.name} delay={index * 0.1}>
                <div className="text-center relative">
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-1`}>
                    {plan.price}
                  </div>
                  <div className="text-gray-400 text-sm mb-4">{plan.unit}</div>
                  <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    className={`w-full bg-gradient-to-r ${plan.color} text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </GlassMorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Discounts */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Volume Discounts
          </motion.h2>
          
          <GlassMorphismCard>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {bulkDiscounts.map((discount, index) => (
                <div key={discount.range} className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">{discount.range}</div>
                  <div className="text-3xl font-bold gradient-text">{discount.discount}</div>
                  <div className="text-gray-400 text-sm">discount</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 pt-6 border-t border-white/20">
              <p className="text-gray-300 mb-4">
                Save even more with our volume discounts. The more images you send, the more you save!
              </p>
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Calculate Savings
              </motion.button>
            </div>
          </GlassMorphismCard>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Monthly Subscription Plans
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan, index) => (
              <GlassMorphismCard key={plan.name} delay={index * 0.1}>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <div className="text-4xl font-bold gradient-text mb-1">{plan.price}</div>
                  <div className="text-gray-400 text-sm mb-2">{plan.unit}</div>
                  <div className="bg-green-500/20 text-green-400 text-sm px-3 py-1 rounded-full inline-block mb-4">
                    {plan.savings}
                  </div>
                  <div className="text-cyan-400 font-medium mb-6">{plan.images}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Choose Plan
                  </motion.button>
                </div>
              </GlassMorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Easy Payment Options
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassMorphismCard>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-white">Accepted Payment Methods</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-2xl">💳</span>
                    <span className="text-gray-300">Credit/Debit Cards</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-2xl">🏦</span>
                    <span className="text-gray-300">PayPal</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-2xl">💸</span>
                    <span className="text-gray-300">Wise (Transferwise)</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-2xl">🏪</span>
                    <span className="text-gray-300">Bank Transfer</span>
                  </div>
                </div>
              </div>
            </GlassMorphismCard>
            
            <GlassMorphismCard delay={0.2}>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-white">Free Trial Details</h3>
                <div className="space-y-3">
                  <div className="text-green-400 font-medium">3-5 Free Sample Edits</div>
                  <div className="text-gray-300 text-sm">No credit card required</div>
                  <div className="text-gray-300 text-sm">See our quality before you pay</div>
                  <div className="text-gray-300 text-sm">Same professional standards</div>
                  <motion.button
                    className="mt-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Free Trial
                  </motion.button>
                </div>
              </div>
            </GlassMorphismCard>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Pricing FAQ
          </motion.h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How do volume discounts work?",
                answer: "Volume discounts are applied automatically based on the total number of images in your order. The discount applies to all images in that order."
              },
              {
                question: "Can I mix different service types in one order?",
                answer: "Yes! You can combine different editing services in a single order. Each service type is priced individually, and volume discounts apply to the total image count."
              },
              {
                question: "What's included in the free trial?",
                answer: "You'll receive 3-5 professional edits of your choice completely free. No credit card required, no strings attached. It's our way of showing you our quality."
              },
              {
                question: "Are there any hidden fees?",
                answer: "No hidden fees ever. Our pricing is completely transparent. You only pay for the services you order at the prices listed."
              }
            ].map((faq, index) => (
              <GlassMorphismCard key={index} delay={index * 0.1}>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </GlassMorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <GlassMorphismCard>
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Try our services risk-free with 3-5 complimentary edits
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button
                className="glass-morphism text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact for Custom Quote
              </motion.button>
            </motion.div>
          </GlassMorphismCard>
        </div>
      </section>
    </div>
  );
};
