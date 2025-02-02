import Modal from "../Modal/Modal";
import eyecarelabo from "../Modal/CloseModal/eyecarelabo-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const EightCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[7];
  const Link = Links[7];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={eyecarelabo} alt="作品紹介" />
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
            <li>・FileZila</li>
            <li>・HTML</li>
            <li>・CSS</li>
            <li>・jQuery</li>
          </ul>
        </div>
      </div>
      <div className="px-3">
        <div className="container border py-2">
          <div style={smallTextStyle}>
            画像コーディングの一部のみ
            <br />
            コーディングさせていただきまいた。
            <br />
            このLPを作った方が
            <br />
            コーディングができない方で
            <br />
            一部どうしてもコーディングが必要
            <br />
            な箇所があり、
            <br />
            その部分だけお手伝いしました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={8} />
      </div>
    </div>
  );
};
export default EightCard;
