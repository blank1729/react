import { useEffect, useState } from "react";
import Container from "../components/Container";
import { projects } from "../data/projects";
import { projectType } from "../types/types";
import SkillTag from "../components/home/SkillTag";
import ProjectCard from "../components/home/projectCard";

// You can access each project like this:
console.log(projects[0]); // Outputs the first project

const Home = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Array<projectType>>(
    []
  );

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
          <div className="flex gap-1 flex-wrap">
            {/* skills */}
            {skills.map((skill) => (
              <SkillTag skill={skill} handleChange={handleChange} />
            ))}
          </div>

          {/* projects */}
          <div className="grid md:grid-cols-3 gap-1 my-8">
            {filteredProjects.map((p) => (
              <ProjectCard project={p} />
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Home;
