import React from "react";
import "./AziziyeCami.css";

function AziziyeCami() {
  return (
    <div className="aziziye-cami-container">
      <h1 className="title" style={{ color: "black" }}>Aziziye Camii: Barok Mimarinin İzinde Osmanlı Şaheseri</h1>
      <div className="separator"></div>
      <img
        src="https://cdn.gokonya.com/other/aziziye-camii-secilen-3.jpg"
        alt="Cami Tanıtım Resmi"
        className="cami-image"
      />
      <div className="description">
        <p>
          Aziziye Camii, Konya'nın tarih kokan sokaklarından birinde, Selimiye Caddesi üzerinde gururla yükselen tarihi bir eserdir. Şeyh Ahmet tarafından 1671-1676 yılları arasında inşa edilen orijinal cami, zamanla bir yangın sonucunda zarar görmüştür. Ancak, Osmanlı İmparatorluğu'nun son dönemlerinde, 1867 yılında Sultan Abdulaziz'in annesi Pertevniyal Sultan tarafından büyük bir özenle yeniden inşa edilmiştir. Aziziye Camii, Osmanlı mimarisinin zerafetini ve Avrupa barok mimarisinin etkilerini bir araya getirerek benzersiz bir güzellik sunmaktadır. Cami, tek kubbeli ve çift minareli bir yapı olup, aynı zamanda üç küçük kubbeli son cemaat yerine sahiptir. Mimarisindeki detaylar ve süslemeler, dönemin estetik anlayışının bir yansımasıdır. Caminin tarihi zenginlikleri arasında, Sultan Abdulaziz'in annesi Pertevniyal Sultan'ın özel ilgisiyle restore edilmiş olması öne çıkar. Bu özenli restore, caminin özgün karakterini koruyarak günümüze taşınmasını sağlamıştır. Aziziye Camii, sadece mimari güzelliği ile değil, aynı zamanda Osmanlı döneminin tarihine ve kültürüne olan bir saygı nişanesidir. Ziyaretçiler, bu tarihi camide huzurlu bir atmosferde ibadet etme fırsatı bulabilirken, aynı zamanda Osmanlı dönemi mimarisinin inceliklerini keşfetme şansına sahiptir.
        </p>
      </div>
      <div className="button-container">
        <button style={buttonStyle} onClick={() => showOnGoogleMaps()}>
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

const buttonStyle = {
  backgroundColor: "#4CAF50",
  border: "none",
  color: "white",
  padding: "10px 20px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  cursor: "pointer",
};

function showOnGoogleMaps() {
  window.open(
    "https://www.google.com/maps?q=Aziziye,+Selimiye+Cd.+9+B,+42030+Karatay/Konya",
    "_blank"
  );
}

export default AziziyeCami;
