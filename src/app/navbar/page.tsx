import Navbar from "@/components/navbar/navbar";

export default function NavbarPage() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "100px", textAlign: "center" }}>
        <h1>Página de teste do Navbar</h1>
        <p>Role a tela e veja o efeito fixo e transparente 🙂</p>
      </main>
    </>
  );
}
