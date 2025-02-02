import Modal from "../Modal/Modal";
import next from "../Modal/CloseModal/next-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const FiveCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[4];
  const Link = Links[4];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={next} alt="作品紹介" />
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
            こちらは合同会社キッカケが出している
            <br />
            パワーグレードという商品を
            <br />
            売るためのLPになります。
            <br />
            以前は別の見た目をしていましたが
            <br />
            昨年2024年後半ごろに今の見た目に
            <br />
            変更しました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={5} />
      </div>
    </div>
  );
};
export default FiveCard;
