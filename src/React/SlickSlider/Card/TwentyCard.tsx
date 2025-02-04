import Modal from "../Modal/Modal";
import ReactClose from "../Modal/CloseModal/react-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const TwentyCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[19];
  const Link = Links[14];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={ReactClose} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
        <div>
          <a className="hover" href={Link.link}>
            実際のサイトリンクはこちら
          </a>
        </div>
        <div className="pb-3">
          <ul className="fw-bold" id="ul">
            <li>・React</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            このポートフォリオサイトです。<br/>
            独学で調べながらReactで作りました。<br/>
            VSコードから直接GitHubにpushしたり、<br/>
            buildしてGitHubにあげたものを<br/>
            netlifyで公開しました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={20} />
      </div>
    </div>
  );
};

export default TwentyCard;
