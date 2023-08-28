import { projectType } from "../../types/types";

const ProjectCard = ({ project }: { project: projectType }) => {
  return (
    <div
      key={project.name}
      className="h-20 bg-red-400 flex justify-center items-center rounded-lg"
    >
      {project.name}
    </div>
  );
};

export default ProjectCard;
