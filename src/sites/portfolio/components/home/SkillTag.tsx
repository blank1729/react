interface SkillTagProps {
  skill: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SkillTag = ({ skill, handleChange }: SkillTagProps) => {
  return (
    <div>
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
    </div>
  );
};

export default SkillTag;
