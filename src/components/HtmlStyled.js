import ScssStyled from "./ScssStyled/ScssStyled";
import Buttons from "./Buttons/Buttons";

function HtmlStyled() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-10">
        Welcome to the app!
      </p>
      <p className="text-gray-500 text-lg">
        Tailwind CSS in action
      </p>
      <ScssStyled/>
      <Buttons/>

    </div>

  );
}
export default HtmlStyled;