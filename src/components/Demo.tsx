import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Terminal, Mail, Phone } from 'lucide-react';

const Demo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const isFormValid = formData.name && formData.email && formData.company;

  return (
    <section id="demo" className="py-24 bg-black grid-pattern">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="animate-fade-in-up">
            <div className="font-mono text-sm tracking-wide text-gray-400 mb-4">
              &gt; INITIALIZE_DEMO
            </div>
            
            <h2 className="text-4xl md:text-6xl font-mono font-bold mb-8">
              <span className="text-white">SYSTEM</span>
              <br />
              <span className="text-white">ACCESS</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light">
              Schedule a 30-minute technical demonstration. See live automation workflows 
              and integration capabilities tailored to your business requirements.
            </p>

            <div className="space-y-6 mb-12">
              {[
                'Custom AI agent configuration',
                'Live system integration demo',
                'Real-time lead capture simulation',
                'Technical architecture review'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <Terminal className="w-5 h-5 text-white mr-4 flex-shrink-0" />
                  <span className="text-gray-300 font-light">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 font-mono text-sm">
              <div className="p-4 border border-white/10">
                <div className="text-gray-400 mb-1">DURATION:</div>
                <div className="text-white">30_MINUTES</div>
              </div>
              <div className="p-4 border border-white/10">
                <div className="text-gray-400 mb-1">COMMITMENT:</div>
                <div className="text-white">NONE_REQUIRED</div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative animate-fade-in-up delay-300">
            <div className="border border-white/20 p-8 bg-white/5 backdrop-blur-sm">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-mono font-bold text-white mb-2">
                      REQUEST_ACCESS()
                    </h3>
                    <p className="font-mono text-sm text-gray-400 tracking-wide">
                      AUTHENTICATION_REQUIRED
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs tracking-wide text-gray-400 mb-2">
                        FULL_NAME:
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-transparent border border-white/20 text-white font-mono text-sm focus:border-white focus:outline-none transition-colors duration-300"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block font-mono text-xs tracking-wide text-gray-400 mb-2">
                        EMAIL_ADDRESS:
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-transparent border border-white/20 text-white font-mono text-sm focus:border-white focus:outline-none transition-colors duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs tracking-wide text-gray-400 mb-2">
                        COMPANY_NAME:
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-transparent border border-white/20 text-white font-mono text-sm focus:border-white focus:outline-none transition-colors duration-300"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block font-mono text-xs tracking-wide text-gray-400 mb-2">
                        PHONE_NUMBER:
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-transparent border border-white/20 text-white font-mono text-sm focus:border-white focus:outline-none transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs tracking-wide text-gray-400 mb-2">
                      INDUSTRY_SECTOR:
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-transparent border border-white/20 text-white font-mono text-sm focus:border-white focus:outline-none transition-colors duration-300"
                    >
                      <option value="" className="bg-black">SELECT_OPTION</option>
                      <option value="fitness" className="bg-black">FITNESS_CENTERS</option>
                      <option value="healthcare" className="bg-black">HEALTHCARE_CLINICS</option>
                      <option value="beauty" className="bg-black">BEAUTY_SALONS</option>
                      <option value="retail" className="bg-black">RETAIL_COMMERCE</option>
                      <option value="real-estate" className="bg-black">REAL_ESTATE</option>
                      <option value="other" className="bg-black">OTHER_SECTOR</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs tracking-wide text-gray-400 mb-2">
                      REQUIREMENTS_NOTES:
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-transparent border border-white/20 text-white font-mono text-sm focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full py-4 font-mono text-sm tracking-wide transition-all duration-300 ${
                      isFormValid
                        ? 'bg-white text-black hover:bg-gray-100 hover-lift border-glow-hover'
                        : 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700'
                    }`}
                  >
                    <span className="flex items-center justify-center">
                      EXECUTE_REQUEST()
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
                  <h3 className="text-2xl font-mono font-bold text-white mb-4">
                    REQUEST_CONFIRMED
                  </h3>
                  <p className="text-gray-400 mb-8 font-light">
                    Demo session scheduled. Technical team will contact you within 24 hours 
                    to confirm system access parameters.
                  </p>
                  <div className="grid grid-cols-2 gap-4 font-mono text-sm">
                    <div className="flex items-center justify-center p-3 border border-white/20">
                      <Mail className="w-4 h-4 mr-2 text-white" />
                      EMAIL_SENT
                    </div>
                    <div className="flex items-center justify-center p-3 border border-white/20">
                      <Phone className="w-4 h-4 mr-2 text-white" />
                      CALL_SCHEDULED
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;