import React from "react";
import "./KilistraAntikKent.css";

function KilistraAntikKent() {
  return (
    <div className="kilistra-antik-kent-container">
      <h1 className="title" style={{ color: "green" }}>
        Konya'nın gizemli atmosferi içinde, adeta bir tarih kitabının
        sayfalarını çevirir gibi hissedeceğiniz büyülü bir mekan: Kilistra Antik
        Kenti
      </h1>
      <br /> <br />
      <img
        src="https://www.nenerede.com.tr/wp-content/uploads/2017/06/Kilistra-Antik-Kenti2.jpg"
        alt="Kilistra Antik Kenti"
        className="antik-kent-image"
      />
      <div style={{ padding: "20px" }} className="description">
        <p>
          Gökyurt köyü sınırları içinde yükselen bu antik kent, zengin tarihi
          ile sadece geçmişi değil, aynı zamanda doğayla iç içe bir yolculuk
          sunuyor. Frigyalılardan Romalılara, Bizanslılardan Selçuklulara kadar
          uzanan geçmişi ile Kilistra, arkeologları kendine çekiyor. Her taşın
          altında bir hikaye, her kalıntının ardında gizlenmiş bir tarih var.
          Antik dönemin dokusunu hissedebileceğiniz bu arkeolojik hazinede
          tapınaklar, tiyatro kalıntıları ve surlar sizi tarihle buluşturuyor.
          Taş döşeli sokakları ve antik yapılarıyla Kilistra, sizi adeta
          geçmişin sokaklarında bir yolculuğa çıkarıyor. Her adımınızda o
          dönemin yaşamını düşleyerek, geçmişe bir pencereden bakma fırsatı
          bulacaksınız. Kilistra, sadece tarih meraklıları için değil, aynı
          zamanda doğa ve arkeoloji severler için de bir cennet. Muazzam doğal
          güzelliklerle çevrili antik kent, size hem tarih hem de doğa ile
          kucaklaşma fırsatı sunuyor. Kilistra Antik Kenti, Konya'nın zengin
          tarihini keşfetmek isteyen herkesi, tarihle iç içe bir maceraya davet
          ediyor. İçsel bir huzur bulmak, geçmişin büyüsüne kapılmak ve doğanın
          kucağında bir nefes almak istiyorsanız, Kilistra tam da aradığınız
          yer!
        </p>
      </div>
      <div className="button-container">
        <button className="location-button" onClick={() => showOnGoogleMaps()}>
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

function showOnGoogleMaps() {
  window.open(
    "https://www.google.com/maps?q=Gökyurt,42005+Meram/Konya",
    "_blank"
  );
}

export default KilistraAntikKent;
