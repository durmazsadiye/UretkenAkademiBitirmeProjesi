import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FaPhone, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";



function Home() {
  return (
    <div>
      <div className="logo-container">
        <a href="https://www.meram.bel.tr/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://seeklogo.com/images/M/Meram_Belediyesi-logo-F72AFCDD4B-seeklogo.com.png"
            alt="Meram Belediyesi Logo"
          />
        </a>
      </div>
      <h1 style={{ textAlign: "center" }}>
        Hazır olun, çünkü{" "}
        <span style={{ color: "green", fontWeight: "bold" }}>Bizim Meram</span>{" "}
        sizi büyüleyecek!
      </h1>

      <div className="text-container">
        <p>
          Meram, tarihi ve kültürel zenginlikleriyle sizi büyüleyen, her
          köşesinde ayrı bir hikaye barındıran bir ilçedir. Sizleri Meram'ın
          eşsiz atmosferinde unutulmaz bir geziye davet ediyoruz. Gelin,
          geçmişin izlerini taşıyan bu topraklarda, tarihi dokusuyla öne çıkan
          mekanları keşfedin. Meram'ın geleneksel dokusunu yansıtan camilerden,
          antik kentlere, müzelerinden, yeşillikler içindeki bağlara
          kadar birçok farklı noktada unutulmaz anılar biriktirin.
        </p>
      </div>
      <br />
      <br />

      <div className="container">
        <Link to="/kapuCami" className="circle">
          <img
            src="https://kapucamii.com/wp-content/uploads/2008/03/Image2-300x214.jpg"
            alt="Resim 1"
          />
        </Link>
        <Link to="/vakifMuze" className="circle">
          <img src="https://cdn.gokonya.com/other/bka1631.jpg" alt="Resim 2" />
        </Link>
        <Link to="/sircali" className="circle">
          <img
            src="https://okuryazarim.com/wp-content/uploads/2017/02/Konya-S%C4%B1r%C3%A7al%C4%B1-Medrese-30.jpg"
            alt="Resim 3"
          />
        </Link>
        <Link to="/iplikciCami" className="circle">
          <img
            src="https://nomatto.com/asset/resized/konya/iplikci_camii_s.jpg"
            alt="Resim 4"
          />
        </Link>
        <Link to="/aziziyeCamii" className="circle">
          <img
            src="https://gencliginsesi.com/wp-content/uploads/2022/10/1666427123642387341.jpg"
            alt="Resim 5"
          />
        </Link>
        <Link to="/etnografya" className="circle">
          <img
            src="http://www.konya.gov.tr/kurumlar/konya.gov.tr/YENI_SITE/konya/etnografya_muzesi/etnografya_muzesi_konya1.jpg?mode=resize&width=1200"
            alt="Resim 6"
          />
        </Link>
        <Link to="/bag" className="circle">
          <img
            src="https://i.neredekal.com/i/neredekal/6073818aad45ec7fc62b91b3"
            alt="Resim 7"
          />
        </Link>
        <Link to="/kilistre" className="circle">
          <img
            src="https://cdn.konyaninsesi.com.tr/gallery/2023/09/1/K%C4%B0L%C4%B0STRA%20ANT%C4%B0K%20KENT%C4%B0.jpg"
            alt="Resim 8"
          />
        </Link>
        <Link to="/atesbazVeli" className="circle">
          <img
            src="https://cdn.konyaninsesi.com.tr/gallery/2023/09/1/ATE%C5%9E%20BAZ-%C4%B0%20VEL%C4%B0%20T%C3%9CRBES%C4%B0.jpg"
            alt="Resim 9"
          />
        </Link>
      </div>
      <br/><br/>
      <footer style={{ textAlign: "center", marginTop: "20px" }}>
         <div className="social-icons">
          <a href="https://www.instagram.com/meram.belediyesi/" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ color: "grey", margin: "5px", fontSize: "24px" }} />
          </a>
          <a href="https://www.facebook.com/Meram.Belediyesi" target="_blank" rel="noopener noreferrer">
            <FaFacebook style={{ color: "grey", margin: "5px", fontSize: "24px" }} />
          </a>
          <a href="https://twitter.com/MeramBelediyesi" target="_blank" rel="noopener noreferrer">
            <FaTwitter style={{ color: "grey", margin: "5px", fontSize: "24px" }} />
          </a>
        </div>
        <p>2024 @ MEGA Yazılım Akademisi Bitirme Projesi - Şadiye DURMAZ</p> 
      </footer>
    </div>
  );
}

export default Home;
