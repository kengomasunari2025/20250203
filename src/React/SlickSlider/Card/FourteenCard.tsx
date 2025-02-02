import Modal from "../Modal/Modal";
import ItOneClose from "../Modal/CloseModal/lessonOne-close.png";
import Titles from "../Infomation/Titles";

const FourteenCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[13];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={ItOneClose} alt="作品紹介" />
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">{Title.title}</h5>
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
            以前いた会社の
            <br />
            ITのカリキュラム一つ目の作品です。
            <br />
            実際に公開されていないので
            <br />
            リンクはありませんが
            <br />
            詳細ボタンから画像1ページ分のみ
            <br />
            ご覧ください。
            <br />
            デザインは決められていて
            <br />
            その決められたデザインを
            <br />
            コーディングする内容だったので
            <br />
            比較的簡単にすぐ終えることができ、
            <br />
            周りの新卒の同期は
            <br />
            2025年1月現在も終わっていない
            <br />
            人もいる中、自分はこの
            <br />
            カリキュラム1〜5を
            <br />
            1ヶ月半で終わらせました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={14} />
      </div>
    </div>
  );
};

export default FourteenCard;
