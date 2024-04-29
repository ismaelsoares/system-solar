import { Planet } from "./components/Planet";

export function App() {
  const createStars = () => {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";

      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      container?.appendChild(star);
    }
  };
  createStars();
  return (
    <div className="text-very-small w-[40em] h-[40em] relative">
      <Planet
        name="sun"
        img="sun.png"
        className="absolute flex items-center justify-center top-[15em] left-[15em] w-[10em] h-[8em] rounded-[50%] shadow-[0 0 3em rgb(255, 128, 0)]"
      />
    </div>
  );
}
