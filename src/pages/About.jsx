import { FaAward, FaUserGraduate } from "react-icons/fa";
import bg1 from "../assets/Images/bg1.jpg"; 

const About = () => {
  return (
    <section id="about" className="flex flex-col lg:flex-row items-center h-[700px]
    justify-center gap-12 px-12 py-16 bg-white text-black">
      
      <div className="w-60 h-60 rounded-lg overflow-hidden shadow-lg">
        <img src={bg1} alt="Oguche Mark" className="w-full h-full sm:h-48 object-cover" />
      </div>

      
      <div className="flex flex-col items-center lg:items-start max-w-2xl text-center lg:text-left">
        <div className="flex gap-6 mb-6">
          <div className="border-2 border-gray-300 px-6 py-4 rounded-lg text-center shadow-md">
            <FaAward className="text-2xl text-black mb-2" />
            <h3 className="font-bold text-lg">Experience</h3>
            <p className="text-gray-600">2+ years</p>
            <p className="text-gray-500">Frontend Development</p>
          </div>
          <div className="border-2 border-gray-300 px-6 py-4 rounded-lg text-center shadow-md">
            <FaUserGraduate className="text-2xl text-black mb-2" />
            <h3 className="font-bold text-lg">Education</h3>
            <p className="text-gray-600">B.Sc. Statistics</p>
            
          </div>
        </div>

        
        <p className="text-gray-600">
            As a passionate Frontend Developer, I specialize in crafting responsive, user-friendly, and visually engaging web applications.  
            With over 2 years of experience, I have honed my skills in modern frameworks like React, ensuring seamless user interactions and  
            high-performance interfaces. My expertise extends to optimizing UI/UX experiences, writing clean and maintainable code,  
            and staying ahead with the latest industry trends to deliver cutting-edge solutions.
        </p>

      </div>
    </section>
  );
};

export default About;
