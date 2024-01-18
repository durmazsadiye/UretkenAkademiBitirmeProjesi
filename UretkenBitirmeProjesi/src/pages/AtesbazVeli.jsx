import React from "react";
import "./AtesbazVeli.css";

function AtesbazVeli() {
  const showOnGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps?q=Orgeneral+Tural,+Ateşbaz+Sk.+No:77,+42090+Meram/Konya",
      "_blank"
    );
  };

  return (
    <div className="aziziye-cami-container">
      <br />
      <h1 className="title" style={{ color: "green" }}>Ateşbaz-ı Veli Türbesi: Allah'a Aşkla Yanan Bir Kalbin Mekânı</h1>
      <br /> <br />
      <img
        src="https://mozartcultures.com/wp-content/uploads/2022/02/20150506_090905.jpg"
        alt="Ateşbaz-ı Veli Türbesi"
        className="cami-image"
      />
      <div style={{ padding: "20px" }} className="description">
        <p>
          Ateşbaz-ı Veli Türbesi, manevi gücü ve mistik öğretileri ile tanınan
          büyük bir veli olan Hacı Bayram-ı Veli'ye ait bir kutsal mekândır.
          Türbe, Ankara'nın kalbinde, Hacı Bayram Veli Caddesi üzerinde, şehrin
          tarihi atmosferinde yükselir. Hikayesi, Hacı Bayram-ı Veli'nin Allah'a
          olan derin aşkı ve bağlılığına dayanır. "Ateşbaz" lakabını kazandığı o
          ünlü anı hatırlatır: Kayaların arasında çekilmiş bir mağarada ateşle
          oynarken, bir gözlemci şaşkınlık içinde "Ateşbaz!" diye haykırmıştır.
          Ancak, Hacı Bayram-ı Veli'nin üzerine düşen ateşi hissetmediği ve
          kontrol ettiği ortaya çıkmıştır. Bu olay, onun manevi güçleri ve
          Allah'a olan derin imanını simgeler. Türbe, Hacı Bayram-ı Veli'nin
          anısını yaşatmanın yanı sıra, ziyaretçilere manevi bir atmosfer sunar.
          Mimarisindeki detaylar ve süslemeler, Osmanlı döneminin estetik
          anlayışını yansıtarak tarihi bir yolculuğa davet eder. Türbenin içinde
          Hacı Bayram-ı Veli'nin kabri bulunur ve ziyaretçiler burada dua ederek
          manevi bir huzur bulabilirler. Ateşbaz-ı Veli Türbesi, tasavvuf
          kültürünün ve manevi mirasın önemli bir parçasıdır. Ziyaretçiler, bu
          kutsal mekânda Hacı Bayram-ı Veli'nin öğretilerine, ahlaki değerlerine
          ve Allah'a olan sevgisine duyulan saygıyı hissederler. Türbe,
          ziyaretçilere manevi bir yolculuk ve içsel bir dinginlik sunan önemli
          bir ibadet mekânıdır.
        </p>
      </div>
      <br /> <br /> <br />
      <div className="button-container">
        <button className="location-button" onClick={showOnGoogleMaps}>
          <span role="img" aria-label="Location Icon" style={{ marginRight: "5px" }}>
            📍
          </span>{" "}
          Konum
        </button>
      </div>
    </div>
  );
}

export default AtesbazVeli;

