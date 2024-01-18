import React from "react";
import "./KapuCami.css"; 

function KapuCami() {
  const konum = "Şükran, Esenlerli Sk. Kapı Cami No:21, 42040 Meram/Konya";

  return (
    <div className="kapu-cami-container">
      <h1 className="title" style={{ color: "green" }}>
        Konya Kapu Camii: Tarihi ve Estetik Uyumuyla Göz Kamaştıran Bir Mabed
      </h1>
      <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/dd/45/b1/guzel.jpg?w=1200&h=-1&s=1"
        alt="Kapu Camii"
        className="cami-image"
      />
      <div className="description">
        <p>
          Konya'nın tarih kokan sokaklarından birinde, İplikçi Caddesi üzerinde
          gururla yükselen Kapu Camii, şehrin dini ve kültürel mirasına ışık
          tutan önemli bir dini yapıdır. Osmanlı mimarisinin izlerini taşıyan bu
          muazzam cami, tarihi ve estetik uyumuyla ziyaretçilerini
          büyülemektedir.Kapu Camii'nin tarihi, Osmanlı İmparatorluğu'nun son
          dönemlerine dayanır. Bu dönemde inşa edilen cami, dönemin estetik
          anlayışını ve zanaatkarlığını yansıtan detaylarıyla göz doldurur.
          Mimarisindeki zarafet, şehre eşsiz bir karakter kazandırarak tarihî
          bir simge haline gelmiştir. Kapu Camii'nin iç mekânındaki detaylar,
          Osmanlı süsleme sanatının en güzel örneklerini sergiler. Her bir
          işlemeli detay, zanaatkârların ustalığı ve o dönemin estetik
          anlayışının bir yansımasıdır. Caminin sadece bir ibadet mekânı olmanın
          ötesinde, aynı zamanda bir sanat eseri olduğunu söylemek mümkündür.
          Caminin çevresindeki sükûnet ve huzur, ziyaretçilere manevi bir
          atmosfer sunar. Kapu Camii'nin taş duvarları arasında huzur bulanlar,
          şehrin gürültüsünden uzaklaşarak tarihi bir yolculuğa çıkarlar. Bu
          kutsal mekân, sadece ibadet etmek isteyenler için değil, aynı zamanda
          tarih ve mimariye ilgi duyanlar için de bir keşif noktasıdır. Kapu
          Camii, Konya'nın kültürel zenginliğini yansıtan, tarihle iç içe geçmiş
          bir simge olarak ayakta durmaktadır. Şehri ziyaret edenler için
          görülmesi gereken önemli duraklardan biri olan Kapu Camii, sadece dini
          değeriyle değil, aynı zamanda estetik güzellikleriyle de büyüleyici
          bir deneyim sunar.
        </p>
      </div>
      <div className="button-container">
        <button
          className="location-button"
          onClick={() => showOnGoogleMaps(konum)}
        >
          <span
            role="img"
            aria-label="Location Icon"
            style={{ marginRight: "5px" }}
          >
            📍
          </span>{" "}
          Konum
        </button>
      </div>
    </div>
  );
}

function showOnGoogleMaps(konum) {
  window.open(
    `https://www.google.com/maps?q=${encodeURIComponent(konum)}`,
    "_blank"
  );
}

export default KapuCami;
