import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Heritage from "./components/Heritage";
import Collections from "./components/Collections";
import Atelier from "./components/Atelier";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import { LegalPage, type LegalDoc } from "./components/LegalPage";

function MainSite() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Heritage />
        <Collections />
        <Atelier />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

type Route = { type: "legal"; doc: LegalDoc } | { type: "site" };

function getRoute(): Route {
  const h = window.location.hash;
  if (h.startsWith("#/gizlilik")) return { type: "legal", doc: "privacy" };
  if (h.startsWith("#/kvkk")) return { type: "legal", doc: "kvkk" };
  if (h.startsWith("#/cerez")) return { type: "legal", doc: "cookies" };
  return { type: "site" };
}

function App() {
  const [route, setRoute] = useState<Route>(getRoute);

  useEffect(() => {
    function onHash() {
      setRoute(getRoute());
    }
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (route.type === "legal") return <LegalPage doc={route.doc} />;
  return <MainSite />;
}

export default App;
