import React, {useState} from "react";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    year: "",
    interest: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your interest! We will contact you soon.");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#BD9f67] mb-4 animate-fade-in text-center">
            Join Us
          </h1>
          <p className="text-slate-300 text-center mb-8">
            Become a part of Codeshack and enhance your technical journey
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-slate-800/50 p-8 rounded-lg border border-[#BD9f67]/20"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-[#BD9f67] focus:outline-none focus:ring-2 focus:ring-[#BD9f67]/20 transition-all duration-300 text-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-[#BD9f67] focus:outline-none focus:ring-2 focus:ring-[#BD9f67]/20 transition-all duration-300 text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-[#BD9f67] focus:outline-none focus:ring-2 focus:ring-[#BD9f67]/20 transition-all duration-300 text-white"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Branch *
                  </label>
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-[#BD9f67] focus:outline-none focus:ring-2 focus:ring-[#BD9f67]/20 transition-all duration-300 text-white"
                  >
                    <option value="">Select Branch</option>
                    <option value="CSE">Computer Science</option>
                    <option value="ISE">Information Science</option>
                    <option value="ECE">Electronics & Communication</option>
                    <option value="EEE">Electrical & Electronics</option>
                    <option value="ME">Mechanical</option>
                    <option value="CV">Civil</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Year *
                  </label>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-[#BD9f67] focus:outline-none focus:ring-2 focus:ring-[#BD9f67]/20 transition-all duration-300 text-white"
                  >
                    <option value="">Select Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Area of Interest *
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-[#BD9f67] focus:outline-none focus:ring-2 focus:ring-[#BD9f67]/20 transition-all duration-300 text-white"
                >
                  <option value="">Select Interest</option>
                  <option value="GLUG">GLUG (GNU/Linux Users Group)</option>
                  <option value="TechHub">TechHub</option>
                  <option value="Both">Both</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-[#BD9f67] text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-[#A88A5C] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
