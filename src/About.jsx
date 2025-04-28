import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  const teamMembers = [
    {
      name: "Siva S",
      role: "AI Engineer",
      linkedin: "https://www.linkedin.com/in/sivas24/",
      image: "https://avatars.githubusercontent.com/u/93309902?v=4"
    },
    {
      name: "Selvin T",
      role: "Data Scientist",
      linkedin: "https://www.linkedin.com/in/selvin-t-3257a3338/",
      image: "https://media.licdn.com/dms/image/v2/D5603AQE14qaMBf4rZg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731648373800?e=1747267200&v=beta&t=kO9hODA3ONacgopJy_U-wk3t1tf_KvsnfzJCm5xRro4"
    },
    {
      name: "Srinidas P",
      role: "Software Developer",
      linkedin: "https://www.linkedin.com/in/srinidas-p-55a9262b4/",
      image: "https://media.licdn.com/dms/image/v2/D5635AQEAS89fkY3hVA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1730784244356?e=1746464400&v=beta&t=atzYEsh77uCLmVp1UAkdthY_ZcyCitPzAnduN1SattY"
    },
    {
      name: "Abinesh . J",
      role: "Energy Analyst",
      linkedin: "https://www.linkedin.com/in/abinesh-j-354715333/",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHV4MWKMpyyhw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731403419903?e=1747267200&v=beta&t=M34gOgj7oB-_V0zK1WjIxrB2-Gtb41aWlItCiOieRmU"
    },
  ];

  return (
    <div className="h-screen flex flex-col">
      {/* About Section */}
      <section className="flex-1 flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-10 text-center">
        <h2 className="text-4xl font-bold">About Our Team</h2>
        <p className="text-lg mt-4 text-gray-600">
          We are a team of passionate Computer Science students developing AI solutions for sustainable energy.
        </p>

        {/* Team Members */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg text-center">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-gray-300"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 flex items-center justify-center gap-2"
              >
                <FaLinkedin className="text-white bg-blue-600 rounded-full p-1 text-xl" /> LinkedIn Profile
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
