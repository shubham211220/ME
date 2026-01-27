export function About() {
  const stats = [
    { number: '12+', label: 'Years Experience' },
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '25+', label: 'Certifications' },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">WHO I AM</p>
            <h2 className="text-4xl md:text-5xl mb-6">About Me</h2>
            <div className="w-1 h-16 bg-black mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I'm a passionate cybersecurity professional dedicated to protecting organizations 
              from digital threats. With over a decade of experience in ethical hacking and 
              penetration testing, I help businesses identify vulnerabilities before malicious 
              actors can exploit them.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              My expertise spans network security, web application security, and security 
              architecture. I hold multiple industry certifications and continuously update 
              my skills to stay ahead of emerging threats.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1763128516808-785e80c1dd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODc1MjczOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cybersecurity Professional"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl mb-2">{stat.number}</div>
              <p className="text-gray-600 uppercase text-sm tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}