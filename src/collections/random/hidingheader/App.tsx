import Lorem1000 from "../../common/components/common/Lorem1000";
import HomeLink from "../../common/components/common/homelink";
import Header, { linkType } from "./Header";

const links: Array<linkType> = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
];

const HidingHeader = () => {
  return (
    <>
      <Header links={links} />
      <Lorem1000 />
      <HomeLink />
    </>
  );
};

export default HidingHeader;
