import Header from "./Header";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import Zoom from 'react-reveal/Zoom';
import "bootstrap/dist/css/bootstrap.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Zoom cascade big when={true}>
        <Container>
          <div>
            <h1>{children}</h1>
          </div>
        </Container>
      </Zoom>

      <Footer />
    </>
  );
}
