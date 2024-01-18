import React from "react";
import "./MeramBag.css";

function MeramBag() {
  return (
    <div className="meram-bag-container">
      <h1 className="title" style={{ color: "green" }}>Konya Meram Bağları: Doğanın Sessiz Şöleni</h1>
      <img
        src="https://staticb.yolcu360.com/blog/wp-content/uploads/2020/01/29153835/45439559955_3dd1fb7a5e_k-1.jpg"
        alt="Meram Bağları"
        className="bag-image"
      />
      <div className="description">
        <p>
          Konya'nın kalbinde, tarih kokan topraklarda yeşeren Meram Bağları,
          şehre sadece doğal güzellikler değil, aynı zamanda huzur ve dinginlik
          de sunuyor. Yorgancı bölgesinde gizlenmiş bu bağlar, her mevsimde
          farklı bir öykü anlatıyor. Beyaz çiçekleriyle baharı karşılayan
          bağlar, ilerleyen aylarda meyve ağaçları ve taze üzüm salkımlarıyla
          görsel bir şölen sunar. Doğanın renk paleti içinde kaybolmak, kuş
          cıvıltıları arasında yürüyüş yapmak isteyenleri Meram Bağları'na davet
          ediyoruz. Meram Bağları, sadece doğal güzellikleri ile değil, aynı
          zamanda içerisinde barındırdığı huzurlu atmosferi ile de öne çıkıyor.
          Şehrin gürültüsünden uzaklaşmak, temiz hava almak ve yeşilin
          kucaklayıcı kucağında dinlenmek isteyenler için ideal bir kaçış
          noktasıdır. Burada yürüyüş yolları, gölgeli piknik alanları ve tarihi
          dokusu ile dikkat çeken bağ evleri bulunmaktadır. Meram Bağları,
          Konya'nın zengin tarım geleneğini yaşatan, şehre organik ürünler sunan
          bir cennettir. Gelin, Meram Bağları'nda tarihle iç içe, doğayla
          kucaklaşan bir yolculuğa çıkın. Kendinizi bir anda zamanda kaybolmuş
          hissedecek, şehir hayatının koşuşturmasından uzaklaşarak içsel bir
          huzur bulacaksınız. Konya'nın tarihi ve doğal güzellikleri arasında,
          Meram Bağları sizleri bekliyor.
        </p>
      </div>
      <div className="location-button">
        <button onClick={() => showOnGoogleMaps()}>
          <span
            role="img"
            aria-label="Location Icon"
            style={{ marginRight: "5px" }}
          >
            📍
          </span>
          Konum
        </button>
      </div>
    </div>
  );
}

function showOnGoogleMaps() {
  window.open(
    "https://www.google.com/maps?q=Yorgancı, 42005 Meram/Konya",
    "_blank"
  );
}

export default MeramBag;
