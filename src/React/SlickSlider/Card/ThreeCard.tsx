import Modal from "../Modal/Modal";
import kikkakeClose from "../Modal/CloseModal/kikkake-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const ThreeCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[2];
  const Link = Links[2];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={kikkakeClose} alt="作品紹介" />
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
            <li>・WordPress</li>
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            まず先に参考サイトと
            <br />
            載せたい画像と情報を
            <br />
            GoogleDocumentで 送っていただき、
            <br />
            その参考サイトの
            <br />
            デザインに情報や画像を
            <br />
            当てはめてコーディングをして、
            <br />
            その後「ここはこうしてほしい」
            <br />
            などの要望に沿う形で
            <br />
            修正を加えていき
            <br />
            完成した作品です。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={3} />
      </div>
    </div>
  );
};
export default ThreeCard;
