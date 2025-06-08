import React from 'react';

const AboutMe = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">👨‍💻 About Me</h2>
      <p className="text-gray-700 mb-6">
        Hi, I'm <span className="font-semibold">Sarvesh Deshpande</span>, a passionate and results-driven <span className="font-semibold">Full Stack Developer</span> currently working as a <span className="font-semibold">System Engineer</span> at <span className="font-semibold">Tata Consultancy Services (TCS)</span> since <span className="font-semibold">September 4, 2023</span>.
      </p>

      <p className="text-gray-700 mb-6">
        With a solid foundation in both frontend and backend technologies, I specialize in building scalable, user-friendly, and high-performance web applications. At TCS, I’ve had the opportunity to work on real-world enterprise projects, collaborate with cross-functional teams, and contribute to both UI/UX improvement and API integration.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
        <div><strong>💻 Role:</strong> Full Stack Developer</div>
        <div><strong>🏢 Company:</strong> TCS</div>
        <div><strong>📅 Experience:</strong> Sept 2023 - Present</div>
        <div><strong>🛠️ Tech Stack:</strong> React.js, Node.js, Express, MongoDB, SQL, REST APIs</div>
        <div><strong>🧠 Soft Skills:</strong> Teamwork, Problem-solving, Clean Code Practices, Agile Methodology</div>
        <div><strong>🧩 Tools:</strong> Git, Postman, VS Code, JIRA</div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">My Mission:</h3>
        <p className="text-gray-700">
          To keep growing as a developer, mastering real-time systems, microservices, and DevOps, and to contribute meaningfully to every project I touch.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
