import Container from "./Container";

const Header = () => {
  return (
    <header className="w-fill flex justify-center">
      <Container>
        <div className="flex justify-between items-center py-2 w-full">
          {/* logo */}
          <div className="bg-blue">
            <div className="">
              <img className="w-10" src="" alt="" />
              <p>LOGO</p>
            </div>
          </div>
          {/* navbar */}
          <nav className="flex gap-2">
            <p>search</p>
            <p>cart</p>
            <p>profile</p>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
