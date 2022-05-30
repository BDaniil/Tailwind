import "./Buttons.scss"

function Buttons() {
    return (
      <div className="buttons">
        <button className="btn">First Button</button>
        <button className="btn md:bg-red-500 lg:bg-green-500">Second Button</button>
        <button className="btn p-6 text-red-200 hover:bg-blue-400 ease-in-out duration-500">Third Button</button>
      </div>
    );
  }
  export default Buttons;