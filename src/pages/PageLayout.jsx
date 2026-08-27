import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function PageLayout({ children }) {
  return (
    <>
      <Header />
      <main className="page-content">{children}</main>
      <Footer />
    </>
  );
}

export default PageLayout;
