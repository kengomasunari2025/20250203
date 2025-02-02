import Modal from "../Modal/Modal";
import libertyBridge from "../Modal/CloseModal/libertyBridge-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const SevenCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[6];
  const Link = Links[6];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={libertyBridge} alt="作品紹介" />
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
            <li>・Gmail</li>
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            株式会社Liberty Bridgeの、
            <br />
            RIBRECというサービス専用の
            <br />
            LPです。 元々別の方が作った
            <br />
            画像コーディングの
            <br />
            LPだったのですが
            <br />
            テキストコーディングにしたい
            <br />
            とのことで自分がコーディング
            <br />
            しました。
            <br />
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={7} />
      </div>
    </div>
  );
};
export default SevenCard;
