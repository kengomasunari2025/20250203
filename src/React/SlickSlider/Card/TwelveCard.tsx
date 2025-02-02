import Modal from "../Modal/Modal";
import itPlusClose from "../Modal/CloseModal/it-plus-close.png";
import Titles from "../Infomation/Titles";
import Links from "../Infomation/Links";

const TwelveCard = () => {
  const smallTextStyle = {
    fontSize: "11px",
    lineHeight: "14px",
  };
  const Title = Titles[11];
  const Link = Links[11];
  return (
    <div className="card card-width d-inline-block">
      <div>
        <img className="w-100" src={itPlusClose} alt="作品紹介" />
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
            私が学生時代にWEB制作の
            <br />
            アルバイトでお世話になった
            <br />
            会社のHPです。
            <br />
            このHPは元々あったのですが
            <br />
            以前は少し違う見た目を
            <br />
            していて
            <br />
            WEB制作の知識が全くない
            <br />
            社員さんや社長さんの
            <br />
            ここはもっとこうしてほしい
            <br />
            などの要望の通りに
            <br />
            修正をしたり、
            <br />
            WordPressの新規記事投稿の
            <br />
            作成や、一部ページの作成など
            <br />
            保守運用、修正、一部作成を
            <br />
            しました。
          </div>
        </div>
      </div>
      <div className="text-center py-3">
        <Modal id={12} />
      </div>
    </div>
  );
};
export default TwelveCard;
