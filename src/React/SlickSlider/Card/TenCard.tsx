import Modal from "../Modal/Modal";
import zeroOne from "../Modal/CloseModal/ZeroOne-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const TenCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[9];
  const Link = Links[9];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={zeroOne} alt="作品紹介" />
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
            ゼロワンという商品の
            <br />
            販売用LPです。
            <br />
            こちらは参考デザインのLPがあって
            <br />
            そのLPのデザインに沿って
            <br />
            一度情報や画像を当てはめて
            <br />
            作った後
            <br />
            要望に沿って修正して作成しました。
            <br />
            社長さんがこのデザインを
            <br />
            とてもよく気に入ってくださり
            <br />
            元々別の見た目をしていた
            <br />
            パワーグレードのLPも
            <br />
            これと同じ見た目になりました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={10} />
      </div>
    </div>
  );
};
export default TenCard;
