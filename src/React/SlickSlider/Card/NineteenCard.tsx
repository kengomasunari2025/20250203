import Modal from "../Modal/Modal";
import LibatyLpClose from "../Modal/CloseModal/libatyLp-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const NineteenCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[18];
  const Link = Links[13];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={LibatyLpClose} alt="作品紹介" />
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
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            株式会社liberty bridgeの<br/>
            既存LPの修正に携わらせて<br/>
            いただきました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={19} />
      </div>
    </div>
  );
};

export default NineteenCard;
