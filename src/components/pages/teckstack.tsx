import { FaNodeJs, FaReact, FaAws, FaPhp, FaJava, FaGithub, FaJs } from "react-icons/fa";
import {
  SiDotnet,
  SiNextdotjs,
  SiAngular,
  SiFlutter,
  SiVuedotjs,
  SiLaravel,
  SiCodeigniter,
  SiWordpress,
  SiAstro,
  SiMysql,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { BackgroundBeams } from "../ui/background-beams";

export default function TechStack() {
  const technologies = [
    // Frontend Frameworks
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white dark:text-white" /> },
    { name: "Angular", icon: <SiAngular className="text-[#DD0031]" /> },
    { name: "Vue.js", icon: <SiVuedotjs className="text-[#4FC08D]" /> },
    { name: "Astro", icon: <SiAstro className="text-[#FF5D01]" /> },

    // Backend Technologies
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#83CD29]" /> },
    { name: ".NET Core", icon: <SiDotnet className="text-[#512BD4]" /> },
    { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
    { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" /> },
    { name: "CodeIgniter", icon: <SiCodeigniter className="text-[#EE4323]" /> },
    { name: "Java", icon: <FaJava className="text-[#007396]" /> },

    // Mobile Development
    { name: "React Native", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },

    // Databases
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },

    // Cloud & DevOps
    { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },

    // CMS & Platforms
    { name: "WordPress", icon: <SiWordpress className="text-[#21759B]" /> },
  ];

  return (
    <div className="relative w-full flex flex-col items-center text-white font-JosefinSans bg-black py-12">
      <BackgroundBeams />
      <div className="relative z-10 text-center w-full max-w-6xl">
        <h1 className="text-5xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center p-6 mb-5">
          Our Tech Stack
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-6xl">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              {tech.icon}
              <p className="mt-2 text-gray-300 text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
