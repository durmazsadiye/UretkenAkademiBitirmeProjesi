import React from "react";
import "./IplikciCami.css";

function IplikciCami() {
  const konum = "Şükran, Emir Pervane Sk., 42200 Meram/Konya";

  return (
    <div className="iplikci-cami-container">
      <h1 className="title" style={{ color: "green" }}>
        Konya İplikçi Camii: Tarih ve Efsaneyle Buluşan Bir Mabed
      </h1>
      <br />
      <br />
      <img
        src="https://www.konyapedia.com/storage/iplik%C3%A7i%20camii-1.jpg"
        alt="Konya İplikçi Camii"
        className="cami-image"
      />
      <div className="description">
        <p>
          Konya'nın tarihi sokaklarında, zamanın dokusunu hissedebileceğiniz
          önemli dini yapılar arasında yer alan İplikçi Camii, şehrin kültürel
          zenginliğini yansıtan bir anıt olarak öne çıkıyor. Osmanlı döneminden
          günümüze uzanan köklü tarihinde, İplikçi Camii sadece bir ibadet
          mekânı olmanın ötesinde, bir efsaneyle de anılır. İplikçi Camii'nin
          tarihine uzandığınızda, 17. yüzyılda Osmanlı Dönemi'nin sonlarına
          doğru inşa edildiğini göreceksiniz. Bu tarihi cami, Osmanlı
          mimarisinin zarafetini ve estetiğini yansıtarak, şehrin siluetinde
          önemli bir rol oynamıştır. Mimarisindeki detaylar ve süslemeler, o
          dönemin sanat anlayışını yansıtarak ziyaretçilere tarihi bir atmosfer
          sunar. Ancak, İplikçi Camii'nin sadece mimari güzellikleri değil, aynı
          zamanda bir efsaneyle özdeşleşmiş bir hikayesi de bulunmaktadır.
          Rivayete göre, caminin yapımında kullanılan ipliklerin bir gecede
          tükenmesi üzerine inşaat durmuş, ancak ertesi sabah miracın yardımıyla
          ipliklerin yeniden dolu dolu bulunduğu gözlemlenmiştir. Bu mucizevi
          olay, camiye "İplikçi" isminin kazanılmasına sebep olmuştur. Efsanenin
          bir diğer versiyonunda ise, caminin yapımında kullanılan ipliklerin
          bir gecede tükenmesi üzerine bir fakir kadının dualarıyla miracın
          gerçekleştiği anlatılır. Bu olay, caminin sadece taş ve tuğladan
          değil, aynı zamanda dualarla da inşa edildiği inancını pekiştirir.
          İplikçi Camii, hem mimari güzelliğiyle hem de bu efsanevi hikayesiyle
          Konya'nın tarihine tanıklık eden bir mekândır. Ziyaretçiler, bu kutsal
          mekânda ibadet etmenin yanı sıra, şehrin eşsiz atmosferini ve İplikçi
          Camii'nin efsanevi hikayesini keşfetme fırsatı bulurlar. İplikçi
          Camii, tarih ve efsaneyle buluşan bir mabed olarak, Konya'nın kültürel
          mirasının önemli bir parçasıdır.
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

export default IplikciCami;
