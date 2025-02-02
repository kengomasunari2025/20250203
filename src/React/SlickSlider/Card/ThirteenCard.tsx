import Modal from "../Modal/Modal";
import orangeGroupClose from "../Modal/CloseModal/orange-group.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const ThirteenCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[12];
  const Link = Links[12];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={orangeGroupClose} alt="作品紹介" />
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
            大学時代にお世話になった
            <br />
            株式会社ITプラスの子会社にあたる
            <br />
            自動車の事業のHPです。
            <br />
            このHPも保守運用や修正、
            <br />
            一部作成をしました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={13} />
      </div>
    </div>
  );
};
export default ThirteenCard;
