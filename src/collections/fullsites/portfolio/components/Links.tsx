import { Link } from "react-router-dom";

const links = [
  { name: "Home", path: "" },
  { name: "Projects", path: "projects" },
];

const Links = () => {
  return (
    <div className="flex flex-col justify-center items-center text-right">
      <div className="flex flex-col gap-y-4">
        {links.map((link) => {
          return (
            <Link
              className="text-6xl font-bold uppercase hover:underline"
              to={`/portfolio/one/${link.path}`}
              key={link.path}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Links;
