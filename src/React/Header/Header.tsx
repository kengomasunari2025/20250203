import HeaderLogo from "../../assets/react.svg";

const Header = () => {
  return (
    <header className="bg-dark py-2 py-md-3 ps-5 fixed-top">
      <a className="hover" href="https://kengo-masunari-2025.netlify.app/">
        <img className="" src={HeaderLogo} />
      </a>
    </header>
  );
};
export default Header;
