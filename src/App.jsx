import "./App.css";

function App() {
  return (
    <>
      <div className="title">
        <h1>Stardew Valley Fishing Simulator</h1>
        <h3>
          Happy Valentines dear Sarah. I have made this game just for you!
        </h3>
      </div>
      <div className="game-box">
        <iframe width={1020} height={820} src="./game.html"></iframe>
      </div>
    </>
  );
}

export default App;
