import { useEffect, useState } from "react";
import Container from "../components/Container";

const projects = [
  {
    name: "Expense Tracker",
    skills: ["NextJS", "React-Query", "golang", "Typescript"],
  },
  {
    name: "E-commerce Website",
    skills: ["React", "NodeJS", "MongoDB"],
  },
  {
    name: "Social Media App",
    skills: ["React", "Firebase", "Redux"],
  },
  {
    name: "Task Management System",
    skills: ["Vue.js", "Node.js", "SQL"],
  },
  {
    name: "Travel Planning App",
    skills: ["Angular", "Firebase", "RxJS"],
  },
  {
    name: "Portfolio Website",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Online Learning Platform",
    skills: ["Django", "Python", "PostgreSQL"],
  },
  {
    name: "Weather App",
    skills: ["React Native", "Expo", "APIs"],
  },
  {
    name: "Health and Fitness Tracker",
    skills: ["Swift", "Core Data", "HealthKit"],
  },
  {
    name: "Music Streaming Service",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    name: "Recipe Sharing Platform",
    skills: ["Ruby on Rails", "PostgreSQL", "Heroku"],
  },
  {
    name: "Real-time Chat Application",
    skills: ["Flutter", "Firebase", "WebSocket"],
  },
];

interface project {
  name: string;
  skills: string[];
}

// You can access each project like this:
console.log(projects[0]); // Outputs the first project

const Home = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Array<project>>([]);

  useEffect(() => {
    const allSkills = projects.reduce((accSkills: string[], project) => {
      accSkills.push(...project.skills);
      return skills;
    }, [] as string[]);

    // Remove duplicate skills and create a set of distinct skills
    let distinctSkills = Array.from(new Set(allSkills));
    setSkills(distinctSkills);

    // set default projects to all
    setFilteredProjects(projects);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // event.preventDefault();
    let currSkill = event.target.value;
    if (selectedSkills.includes(currSkill)) {
      let newSkills = selectedSkills.filter((skill) => skill != currSkill);
      setSelectedSkills(newSkills);
    } else {
      setSelectedSkills((prevSkills) => {
        const newSkills = [...prevSkills, event.target.value];
        console.log(event.target.value, newSkills);
        return newSkills;
      });
    }
  };

  useEffect(() => {
    if (selectedSkills.length == 0) {
      setFilteredProjects(projects);
      return;
    }
    let newProjects = projects.filter((project) => {
      return project.skills.some((skill) => selectedSkills.includes(skill));
    });
    setFilteredProjects(newProjects);
  }, [selectedSkills]);

  return (
    <main className="bg-slate-700 text-amber-100">
      <Container>
        {/* hero section */}
        <section className="w-full h-screen grid md:grid-cols-2">
          {/* welcome message */}
          {/* little about myself */}
          {/* social links */}
          {/* hire me button, this will pop up a modal with fake captcha */}
        </section>

        {/* contains projects with skills */}
        <section className="min-h-screen py-10">
          <div className="flex gap-1 flex-wrap overflow-scroll">
            {/* skills */}
            {skills.map((skill) => (
              <label
                key={skill}
                className="rounded-2xl cursor-pointer transition relative flex-shrink-0 hover:bg-blue-400"
              >
                <input
                  type="checkbox"
                  name={skill}
                  value={skill}
                  className="peer hidden"
                  onChange={handleChange}
                />
                <div className="peer-checked:bg-blue-400 w-full h-full px-4 rounded-2xl">
                  {skill}
                </div>
              </label>
            ))}
          </div>

          {/* projects */}
          <div className="grid md:grid-cols-3 gap-1 my-8">
            {filteredProjects.map((p) => (
              <div
                key={p.name}
                className="h-20 bg-red-400 flex justify-center items-center rounded-lg"
              >
                {p.name}
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Home;
