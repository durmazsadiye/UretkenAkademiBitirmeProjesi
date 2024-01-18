import React from "react";
import "./EtnografyaMüze.css";

function EtnografyaMüze() {
  const konum = "Sahibiata, 42200 Meram/Konya";
  return (
    <div className="etnografya-muze-container">
      <h1 className="title" style={{ color: "green" }}>
        Konya Etnografya Müzesi: Tarihi Bir Mirasın Işıltısı
      </h1>
      <img
        src="https://cdn.gokonya.com/other/bka1703.jpg"
        alt="Konya Etnografya Müzesi"
        className="museum-image"
      />
      <div className="description">
        <p>
          Konya, Anadolu'nun kalbinde yer alan tarih kokan şehirlerden biridir.
          Bu şehir, farklı medeniyetlere ev sahipliği yapmış, zengin kültürel
          birikimiyle tarihi bir mirası barındırır. Konya'nın tarihi dokusunu
          keşfetmek isteyenler için ise başlı başına bir hazinedir: Konya
          Etnografya Müzesi. Müze, Konya'nın tarihî zenginliğini, geleneksel el
          sanatlarını ve Osmanlı dönemine ait izleri ziyaretçilerine
          sunmaktadır. Osmanlı İmparatorluğu'nun ihtişamını, günlük yaşamın
          izlerini taşıyan eserlerle dolu müze, adeta geçmişe bir kapı
          aralamaktadır. Müzenin koleksiyonu, Osmanlı dönemine ait el
          yazmalarından, geleneksel giyim tarzlarına, takılardan el işçiliği
          eserlere kadar geniş bir yelpazeyi kapsar. Bu eserler, dönemin estetik
          anlayışını ve zanaatkarlığını yansıtarak ziyaretçilere tarihi bir
          yolculuk vaat eder. Konya Etnografya Müzesi, geleneksel el
          sanatlarından elde edilen özgün eserleriyle de dikkat çeker. Ahşap
          oymacılık, seramik işçiliği ve dokuma sanatının zarafeti, müzenin
          duvarlarını süsleyen özel eserler arasındadır. Ziyaretçiler, bu
          zanaatların inceliklerini yakından gözlemleyerek geçmişe duyulan
          hayranlığı bir kat daha hissederler. Müze aynı zamanda Konya'nın
          kültürel çeşitliliğini yansıtan zengin bir koleksiyona ev sahipliği
          yapar. Bu koleksiyon, şehrin tarihini, geleneklerini ve kültürünü daha
          yakından anlama fırsatı sunar. Konya Etnografya Müzesi, sadece bir
          müze değil, aynı zamanda geçmişle kucaklaşmanın, kültürel bir
          yolculuğun başlangıcıdır. Eğer tarih ve kültürle dolu bir serüvene
          adım atmak istiyorsanız, Konya Etnografya Müzesi sizi bekliyor.
          Burada, Konya'nın derin geçmişini keşfederken, Anadolu'nun tarihî
          dokusuna tanıklık edeceksiniz. Unutulmaz bir deneyim için müzenin
          kapıları her daim açık!
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

export default EtnografyaMüze;
