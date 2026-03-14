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
        {/* TAMPILAN UTAMA (ATAS) */}
        <div className="hero-section">
          <h1>🌊Karimunjawa</h1>
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

          <a className="App-link" href="#destinasi-wisata">
            MULAI PETUALANGAN
          </a>
        </div>

        {/* BAGIAN GALERI (DI BAWAH TOMBOL) */}
        <div id="destinasi-wisata" className="gallery-section">
          <h2 style={{ marginBottom: "30px" }}>📍 Galeri Destinasi</h2>

          {/* Kelompok 1: Pantai Tanjung Gelam */}
          <div className="destinasi-card">
            <h4>🏖️ Pantai Tanjung Gelam</h4>
            <div className="gallery-grid">
              <img
                src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=400"
                alt="Gelam"
                className="gallery-item"
              />
              <img
                src="https://images.unsplash.com/photo-1544918877-460635b6d13e?w=400"
                alt="Gelam"
                className="gallery-item"
              />
            </div>
          </div>

          {/* Kelompok 2: Penangkaran Hiu */}
          <div className="destinasi-card">
            <h4>🦈 Penangkaran Hiu Menjangan Besar</h4>
            <div className="gallery-grid">
              <img
                src="https://images.unsplash.com/photo-1505118380757-91f5f45d8de4?w=400"
                alt="Hiu"
                className="gallery-item"
              />
              <img
                src="https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=400"
                alt="Hiu"
                className="gallery-item"
              />
            </div>
          </div>

          {/* Kelompok 3: Spot Snorkeling Maer */}
          <div className="destinasi-card">
            <h4>🤿 Spot Snorkeling Maer</h4>
            <div className="gallery-grid">
              <img
                src="https://images.unsplash.com/photo-1544551763-47a0159f9234?w=400"
                alt="Maer"
                className="gallery-item"
              />
              <img
                src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=400"
                alt="Maer"
                className="gallery-item"
              />
            </div>
          </div>

          {/* Kelompok 4: Bukit Love */}
          <div className="destinasi-card">
            <h4>⛰️ Bukit Love Karimunjawa</h4>
            <div className="gallery-grid">
              <img
                src="https://images.unsplash.com/photo-1506929113675-b55f9d3bb913?w=400"
                alt="Bukit Love"
                className="gallery-item"
              />
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400"
                alt="Bukit Love"
                className="gallery-item"
              />
            </div>
          </div>
        </div>
        <div id="peta-interaktif" className="map-section">
          <h3>📍 Lokasi Karimunjawa</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126938.6558509378!2d110.40356574753063!3d-5.850552731558285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3309623e102607%3A0xad54897e9d77d704!2sKarimunjawa%2C%20Kabupaten%20Jepara%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1710400000000!5m2!1sid!2sid"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </header>

      <footer className="App-footer">
        <p>© 2026 Karimunjawa Interaktif. Created with ❤️ by Lain Forger.</p>
        <div className="social-links">
          <a
            href="https://github.com/LainForger"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/lain.forger?igsh=ejIycXJtbmtsNG5h"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: "15px" }}
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
