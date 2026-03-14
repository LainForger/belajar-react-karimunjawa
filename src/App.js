import "./App.css";
import gambarPantai from "./pantai.jpeg";

function App() {
  const destinasi = [
    "🏖️ Pantai Tanjung Gelam",
    "🦈 Penangkaran Hiu Menjangan Besar",
    "🤿 Spot Snorkeling Maer",
    "⛰️ Bukit Love Karimunjawa",
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Karimunjawa</h1>
        <p style={{ fontSize: "1.5rem", fontWeight: "300" }}>
          Jelajahi Surga Tersembunyi di Jawa Tengah
        </p>

        <div className="list-container">
          <h3
            style={{ borderBottom: "2px solid white", paddingBottom: "10px" }}
          >
            Destinasi Populer
          </h3>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "1.2rem" }}>
            {destinasi.map((item, index) => (
              <li key={index} style={{ margin: "10px 0" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p>
          Developed by <b>Lain Forger</b>
        </p>

        <a className="App-link" href="#" target="_blank">
          MULAI PETUALANGAN
        </a>
      </header>
    </div>
  );
}

export default App;
