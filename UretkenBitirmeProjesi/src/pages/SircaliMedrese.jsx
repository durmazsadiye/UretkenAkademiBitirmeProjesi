import React from "react";
import "./SircaliMedrese.css";

function SircaliMedrese() {
  return (
    <div className="sircali-medrese-container">
      <h1 className="title" style={{ color: "green" }}>Beyazın Sessiz Şahidi: Konya Sırçalı Medrese</h1>
      <br />
      <img
        src="https://okuryazarim.com/wp-content/uploads/2017/02/Konya-S%C4%B1r%C3%A7al%C4%B1-Medrese-30.jpg"
        alt="Sırçalı Medrese"
        className="medrese-image"
      />
      <div className="description">
        <p>
          Konya'nın gizemli tarihine ışık tutan Sırçalı Medrese, Selçuklu
          döneminin zarafetini günümüze taşıyan eşsiz bir eserdir. Beyazın ve
          sessizliğin içinde yatan bu medrese, geçmişin sırlarını koruyan bir
          şahittir. Yüksek tavanları, zarif sütunları ve olağanüstü detaylarıyla
          medrese, tarih kokan duvarları arasında bir zaman yolculuğuna davet
          ediyor. Sırçalı Medrese, Selçuklu Sultanı tarafından eğitim ve
          kültürün merkezi olarak inşa edilmiştir. Geleneksel Selçuklu
          mimarisinin izlerini taşıyan bu muazzam yapı, bir zamanlar
          öğrencileriyle dolup taşmış, ilim ve irfanın ışığını yakmıştır. Zaman
          içinde yaşanan değişimlere direnerek bugüne kadar ulaşan medrese,
          sadece bir yapı değil, aynı zamanda tarihi bir mirastır. Medresenin
          içinde dolaştıkça, duvarlardaki ince işçiliği ve detayları keşfetmek
          mümkün. Zamanın durduğu bu mekânda geçmişin ruhunu hissetmek,
          öğrencilerin ders çalıştığı odalarda onların izlerini sürmek adeta bir
          zaman tünelinde yolculuk yapmak demektir. Sırçalı Medrese, Konya'nın
          tarihine ışık tutan, her bir detayında geçmişin izlerini barındıran
          büyülü bir yapıdır. Şehre gelen herkesi, bu beyazın sessiz şahidi olan
          medreseyi keşfetmeye davet ediyoruz.
        </p>
      </div>
      <div className="button-container">
        <button className="location-button" onClick={() => showOnGoogleMaps()}>
          <span role="img" aria-label="Location Icon" className="location-icon">
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
    "https://www.google.com/maps?q=Sahibiata,%C5%9Eube+Sk.+No:2,42040,42040+Meram/Konya",
    "_blank"
  );
}

export default SircaliMedrese;
