import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import data from "./data.js";

function App() {
  return (
    // panggil content
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
// untuk content header, menu dan footer
function Header() {
  const style = {
    color: "red",
    fontSize: "50px",
    textTransform: "uppercase",
  };
  return (
    /* untuk penulisan style pada component react bisa gunakan {{}} sebanyak 2 kali karena dibacanya sbg object,
  kemudian untuk penulisan yg ada dash- di html jadi camel style seperti fonStize bukan font-size*/
    <h1 style={style}>Warteg Bu Tuti</h1>
  );
}

function Menu() {
  const foods = data;
  // const foods = []; //coba pake ternary if
  const numFoods = foods.length; //numfoods akan menyimpan data nilai nya

  //multi kondisi
  /* if (numFoods) {
    return (
      <main className="menu">
        <h2>Menu Warteg tercinta</h2>
        
        <ul className="foods">
          {data.map(
            (
              food //disini pake map untuk perulangannya
            ) => (
              <Food foodobj={food} key={food.nama} /> //dsini kita bisa tambahkan key yg uniq bisa index/nama sesuai data json
            )
          )}
        </ul>
      </main>
    );
  } else {
    return (
      <main className="menu">
        <h2>Menu Warteg tercinta</h2>
        <p>Menu lagi kosong gan</p>
      </main>
    );
  } */

  return (
    // disini kita mapping in aja
    <main className="menu">
      <h2>Menu Warteg tercinta</h2>
      {/* pake ternary if, tanda tanya disini jika data benar maka akan tampil food nya, jika salah tampil pembanding di bawah */}
      {numFoods > 0 ? (
        <React.Fragment>
          <p>
            Tidak hanya kenyang di perut ramah di kantong,
            <br /> menu favorit kamu kini hadir dengan beragam pilihan
          </p>
          <ul className="foods">
            {data.map(
              (
                food //disini pake map untuk perulangannya
              ) => (
                <Food foodobj={food} key={food.nama} /> //dsini kita bisa tambahkan key yg uniq bisa index/nama sesuai data json
              )
            )}
          </ul>
        </React.Fragment>
      ) : (
        //pembanding ternary if
        <p>Menu lagi kosong gan</p>
      )}
    </main>
  );
}

function Footer() {
  // disini kita definisikan logic js nya
  const hour = new Date().getHours();
  const jamBuka = 10;
  const jamTutup = 21;
  const isOpen = hour >= jamBuka && hour <= jamTutup;
  /* disini kita berikan kondisi
  if (hour < jamBuka || hour > jamTutup) {
    alert(
      `Punten warung nya lagi tutup nih, buka lagi di jam ${jamBuka} sampai ${jamTutup} ya`
    );
  } else {
    alert("Warteg Bu Tuti lagi buka nih, gasskeun lah");
  }
  return (
    <footer className="footer">
      <div className="order"></div>
      <p>
        {new Date().getFullYear()} Warteg Bu Tuti | Buka pukul {jamBuka} - Tutup
        pukul {jamTutup}
      </p>
    </footer>
  ); */
  //  Melakukan Render Jsx Dengan Multi Kondisi
  // Refactor Komponen Khusus Untuk Jsx
  if (isOpen) {
    return <FooterOpenHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  } else {
    return <FooterClosedHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  }
  //melakukan kondisional dengan _
  // return (
  //   <footer className="footer">
  //     {/* disini kita ganti && dengan ? atau ternary if */}
  //     {isOpen ? (
  //       <div className="order">
  //         <p>
  //           {new Date().getFullYear()} Warung Bu Tuti | Buka jam {jamBuka} -
  //           Tutup jam {jamTutup}
  //         </p>
  //         <button className="btn">Order</button>
  //       </div>
  //     ) : (
  //       <p>
  //         Warung lagi tutup, silahkan mampir di jam {jamBuka} - {jamTutup}{" "}
  //       </p>
  //     )}
  //   </footer>
  // );
}

function FooterOpenHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          {/* {new Date().getFullYear()} Warung Bu Tuti | Buka jam {jamBuka} - Tutup */}
          Buka jam {jamBuka} - Tutup jam {jamTutup}
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

function FooterClosedHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <p>
        Warung lagi tutup ni boss, silahkan mampir di jam {jamBuka} - {jamTutup}
      </p>
    </footer>
  );
}

// disini kita bisa panggil proops nya
function Food(props) {
  //Desctructing penulisan proops lebih singkat
  const { nama, deskripsi, harga, foto, stok } = props.foodobj;

  return (
    <li className={`food ${!stok ? "sold-out" : ""}`}>
      <img src={foto} alt={nama} width="100" height="90" />
      <div>
        <h3>{nama}</h3>
        <p>{deskripsi}</p>
        <span>{stok ? harga : "habis"}</span>
      </div>
    </li>
  );
}

// agar data kita bisa tampil, disini kita panggil id Root yg ada di file Public/index.html
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Strict mode untuk mendeteksi ada bug atau tidak
  <React.StrictMode>
    <App />
    {/* <Food /> */}
  </React.StrictMode>
);
