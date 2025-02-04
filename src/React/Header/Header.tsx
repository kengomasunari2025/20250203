import HeaderLogo from "../../assets/react.svg";

const Header = () => {
  return (
    <>
      <header className="bg-dark fixed-top">
        <div className="d-flex align-items-start">
          <div className="py-2 py-md-3 ps-5">
            <a
              className="hover"
              href="https://kengo-react-portfolio.netlify.app/"
            >
              <img className="" src={HeaderLogo} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
