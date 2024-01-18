import React from "react";
import "./vakifMuze.css";

function VakifMuze() {
  return (
    <div className="vakif-muze-container">
      <h1 className="title" style={{ color: "green" }}>
        Sahip Ata Vakıf Müzesi: Konya'nın Zaman Tünelinde Bir Yolculuk
      </h1>
      <img
        src="https://cdn.gokonya.com/other/bka1631.jpg"
        alt="Sahip Ata Vakıf Müzesi"
        className="muze-image"
      />
      <div className="description">
        <p>
          Konya, tarihi ve kültürel zenginlikleriyle ünlü bir şehir olarak öne
          çıkar. Bu zengin mirası yaşatma ve gelecek nesillere aktarma amacı
          güden müzeler arasında Sahip Ata Vakıf Müzesi, adeta bir tarih
          hazinesidir. Sahibiata bölgesinde konumlanan bu müze, Konya'nın
          geçmişine dair derinlemesine bir bakış sunar. Sahip Ata Vakıf Müzesi,
          ziyaretçilere Konya'nın tarihini, kültürünü ve mirasını anlamaları
          için eşsiz bir fırsat sunar. Müzenin içinde sergilenen arkeolojik
          kalıntılar, el yazmaları, tarihi fotoğraflar ve daha birçok eser,
          şehrin geçmişine dair önemli ipuçları barındırır. Bu eserler,
          Konya'nın kültürel evrimini izlemek isteyenler için muazzam bir
          kaynaktır. Müzenin atmosferi, geçmişin izlerini hissetmek isteyenleri
          büyüler. Her sergi, bir zamanlar bu topraklarda yaşamış olan
          insanların hikayelerini anlatır. Ziyaretçiler, Sahip Ata Vakıf
          Müzesi'nde geçmişin derinliklerine bir pencereden bakma şansına sahip
          olurlar. Sahip Ata Vakıf Müzesi aynı zamanda bir toplumun kültürel
          mirasını yaşatma amacını taşır. Konya'nın zengin tarihini koruma ve
          gelecek kuşaklara aktarma sorumluluğuyla, müze sadece geçmişi değil,
          aynı zamanda geleceği de inşa eder. Bu müze, ziyaretçilere Konya'nın
          köklü geçmişi ile bağ kurma fırsatı sunar. Sahip Ata Vakıf Müzesi,
          sadece bir sergi alanı değil, aynı zamanda şehrin kültürel dokusunu
          hissetmek isteyenler için bir kapı aralayıcıdır.Konya'nın tarihi
          dokusunu keşfetmek ve zamanda yol almak için hazır mısınız?
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
    "https://www.google.com/maps?q=Sahibiata, 42200 Meram/Konya",
    "_blank"
  );
}

export default VakifMuze;
