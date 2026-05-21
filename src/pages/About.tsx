import { Calendar, Code, MapPin, Sparkles } from "lucide-react";

const About = () => {
  const skills = {
    frontend: [
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "React.js", level: "Intermediate" },
      { name: "Next.js", level: "Intermediate" },
    ],
    styling: [
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Sass", level: "Advanced" },
      { name: "DaisyUI", level: "Advanced" },
    ],
    tools: [
      { name: "Firebase", level: "Intermediate" },
      { name: "Git & GitHub", level: "Advanced" },
    ],
  };

  const highlights = [
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Ferghana, Uzbekistan",
    },
    { icon: <Calendar size={20} />, label: "Age", value: "20 years old" },
    {
      icon: <Code size={20} />,
      label: "Specialty",
      value: "Frontend Engineer",
    },
    {
      icon: <Sparkles size={20} />,
      label: "Additional skills",
      value: "AI + Backend Integration",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 md:pb-20 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional, and user-friendly
            web experiences
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="text-purple-400 mb-3">{item.icon}</div>
              <p className="text-gray-500 text-sm mb-1">{item.label}</p>
              <p className="text-white font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-cyan-400">Who I Am</h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Hello! I am Bahodirkhon Mahmudov, a 20-year-old Frontend Developer
              from Fergana, Uzbekistan. I develop modern, minimalist, and
              user-friendly responsive web applications
            </p>
            <p>
              My experience in web development started with a passion for
              creating I have mastered technologies such as React.js and
              Next.js, I use CSS and Tailwind CSS to bring designs to life
            </p>
          </div>
        </div>
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4 text-purple-400">
                Frontend
              </h4>
              <div className="space-y-4">
                {skills.frontend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-linear-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">
                Styling
              </h4>
              <div className="space-y-4">
                {skills.styling.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-linear-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4 text-pink-400">
                Tools & More
              </h4>
              <div className="space-y-4">
                {skills.tools.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
