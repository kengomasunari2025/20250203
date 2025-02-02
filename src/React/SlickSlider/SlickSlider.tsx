import Cards from "./Card/Cards";

const SlickSlider = () => {
  return (
    <section className="py-5">
      <h1 className="fw-bold text-center">制作実績</h1>
      <div
        className="bg-white"
        style={{ overflowX: "auto", whiteSpace: "nowrap" }}
      >
        <ul id="ul" className="d-inline-flex">
          {Cards.map((item, index) => (
            <li key={index} style={{ display: "inline-block" }}>
              {item.card}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// git config --global user.name "kengomasunari2025"
// git config --global user.email "kengomasunari2025@gmail.com"

export default SlickSlider;
