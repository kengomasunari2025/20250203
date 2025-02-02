import Modal from "../Modal/Modal";
import kikkakeShop from "../Modal/CloseModal/kikkakeShop-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const FourCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[3];
  const Link = Links[3];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={kikkakeShop} alt="作品紹介" />
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
            合同会社キッカケの、
            <br />
            商品を売るための専用のHPです。
            <br />
            こちらも参考にしたシンプルな
            <br />
            ショッピングサイトのページが
            <br />
            送られてきて
            <br />
            それの通りに一度情報や画像を
            <br />
            当てはめて作った後に
            <br />
            要望に沿って修正して作成しました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={4} />
      </div>
    </div>
  );
};
export default FourCard;
