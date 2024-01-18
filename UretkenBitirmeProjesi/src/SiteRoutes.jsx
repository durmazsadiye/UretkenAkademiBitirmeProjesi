
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MuzeVakif from "./pages/MuzeVakif";
import KapuCami from './pages/KapuCami';
import IplikciCami from "./pages/IplikciCami";
import AziziyeCami from "./pages/AziziyeCami";
import MeramBag from "./pages/MeramBag";
import EtnografyaMüze from "./pages/EtnografyaMüze";
import KilistreAntikKent from "./pages/KilistreAntikKent";
import PageNotFound from "./pages/PageNotFound";
import AtesbazVeli from "./pages/AtesbazVeli";
import SircaliMedrese from "./pages/SircaliMedrese"

function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/kapucami" element={<KapuCami />} />
      <Route path="/vakifMuze" element={<MuzeVakif />} />
      <Route path="/sircali" element={<SircaliMedrese />} />
      <Route path="/aziziyecamii" element={<AziziyeCami />} />
      <Route path="/iplikcicami" element={<IplikciCami />} />
      <Route path="/bag" element={<MeramBag />} />
      <Route path="/etnografya" element={<EtnografyaMüze />} />
      <Route path="/kilistre" element={<KilistreAntikKent />} />
      <Route path="/atesbazveli" element={<AtesbazVeli />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default SiteRoutes;
