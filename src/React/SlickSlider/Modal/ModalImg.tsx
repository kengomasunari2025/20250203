import BaseballOpen from "./OpenModal/baseball-open.png";
import JrepOpen from "./OpenModal/jrep-open.png";
import KikkakeOpen from "./OpenModal/kikkake-open.png";
import KikkakeshopOpen from "./OpenModal/kikkakeShop-open.png";
import NextOpen from "./OpenModal/Next-open.png";
import WebZerIchiOpen from "./OpenModal/ZeroIchi-open.png";
import LibatyOpen from "./OpenModal/libaty-open.png";
import EyecareOpen from "./OpenModal/eyecarelabo-open.png";
import VieHuitOpen from "./OpenModal/vie-huit-open.png";
import ZeroWanOpen from "./OpenModal/zeroOne-open.png";
import ItPlusOpen from "./OpenModal/it-plus-open.png";
import OrangeGroupOpen from "./OpenModal/orange-group-open.png";
import ComingSoonOpen from "./OpenModal/comingSoon-open.png";
import ItOne from "./OpenModal/lessonOne-open.png";
import ItTwo from "./OpenModal/lessonTwo-open.png";
import ItThree from "./OpenModal/lessonThree-open.png";
import ItFour from "./OpenModal/lessonFour-open.png";
import ItFive from "./OpenModal/lessonFive-open.png";
import LibatyLp from "./OpenModal/libatyLp-open.png";
import ReactPortfolio from "./OpenModal/react-open.png";

const OpenImages = [
  { id: 1, open: BaseballOpen },
  { id: 2, open: JrepOpen },
  { id: 3, open: KikkakeOpen },
  { id: 4, open: KikkakeshopOpen },
  { id: 5, open: NextOpen },
  { id: 6, open: WebZerIchiOpen },
  { id: 7, open: LibatyOpen },
  { id: 8, open: EyecareOpen },
  { id: 9, open: VieHuitOpen },
  { id: 10, open: ZeroWanOpen },
  { id: 11, open: ComingSoonOpen },
  { id: 12, open: ItPlusOpen },
  { id: 13, open: OrangeGroupOpen },
  { id: 14, open: ItOne },
  { id: 15, open: ItTwo },
  { id: 16, open: ItThree },
  { id: 17, open: ItFour },
  { id: 18, open: ItFive },
  { id: 19, open: LibatyLp },
  { id: 20, open: ReactPortfolio },
];

const ModalImg = ({ id }: { id: string | number }) => {
  const selectedImage = OpenImages.find((image) => image.id === id);
  return selectedImage ? (
    <img
      className="light-box-popup-in-img border border-white border-3 open-scroll"
      src={selectedImage.open}
      alt="作品表示"
    />
  ) : null;
};
export default ModalImg;
