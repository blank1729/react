import HomeLink from "../../common/components/common/homelink";
import "./article.css";
const Article = () => {
  return (
    <>
      <div className="py-2 px-4 sm:px-8 md:px-12 lg:px-[20%]" id="navbar">
        <span className="title">TITLE</span>
        <span className="nav-elements">
          <span className="ele">Home</span>
          <span className="ele">Shit</span>
          <span className="ele">about</span>
        </span>
      </div>
      <div id="main">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed voluptates
        dolores dignissimos omnis, quas vel sunt nostrum, molestias repellat
        aspernatur doloribus minus excepturi laborum quos totam quod non placeat
        in eaque! Aperiam atque animi, voluptatum, mollitia pariatur odit
        officia itaque qui quisquam perspiciatis provident. Hic deserunt
        molestias blanditiis a, similique laboriosam rem voluptas placeat atque
        saepe dolor dolore facilis quod? Amet ipsam voluptatibus nulla
        perferendis exercitationem velit non, quasi, quo eveniet repellendus
        minus harum quibusdam incidunt! Maxime, accusamus aperiam quia saepe
        provident harum exercitationem dolores fugiat facilis itaque enim magnam
        consequuntur tenetur quaerat cupiditate, neque ipsam tempore nobis ut
        recusandae!
      </div>
      <HomeLink />
    </>
  );
};

export default Article;
