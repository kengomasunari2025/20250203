import Modal from "../Modal/Modal";
import jrepClose from "../Modal/CloseModal/jrep-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const TwoCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[1];
  const Link = Links[1];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={jrepClose} alt="作品紹介" />
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
            デザインは既に決まっていて、
            <br />
            後はコーディングのみという状態の
            <br />
            お仕事でした。
            <br />
            初めて社長さんから頂いたお仕事で
            <br />
            コーディング力もない中必死で
            <br />
            デザインの通りに
            <br />
            コーディングしました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={2} />
      </div>
    </div>
  );
};
export default TwoCard;
