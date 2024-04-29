export function App() {
  return (
    <div
      id="system-solar"
      className="relative w-[780px] h-[780px] m-auto overflow-hidden"
    >
      <div id="sun" className="absolute top-1/2 left-1/2"></div>

      <div
        id="orbit mercury-orbit"
        className="border border-dashed border-granity-gray "
      ></div>
      <div id="mercury-spin">
        <div id="mercury"></div>
      </div>

      <div id="orbit venus-orbit"></div>
      <div id="venus-spin">
        <div id="venus"></div>
      </div>

      <div id="orbit earth-orbit"></div>
      <div id="earth-spin">
        <div id="orbit moon-orbit"></div>
        <div id="moon-spin">
          <div id="moon"></div>
        </div>
        <img src="/earth_small_150.jpg" alt="earth" />
      </div>

      <div id="orbit mars-orbit"></div>
      <div id="mars-spin">
        <div id="mars"></div>
      </div>
    </div>
  );
}
