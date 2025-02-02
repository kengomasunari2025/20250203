import Modal from "../Modal/Modal";
import baseballClose from "../Modal/CloseModal/baseball-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const OneCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[0];
  const Link = Links[0];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={baseballClose} alt="作品紹介" />
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
            人生で初めて自分がコーディングして
            <br />
            公開したHPです。
            <br />
            デザインの要望も何もなく、
            <br />
            「強いていうならシンプルに」と
            <br />
            仰っていました。
            <br />
            依頼してくださった方が親戚で
            <br />
            「好きに作っちゃっていいよ。」
            <br />
            と言われたのでシンプルに作りました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={1} />
      </div>
    </div>
  );
};

export default OneCard;
