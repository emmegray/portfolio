import Header from './Header'
import Footer from './Footer'
import Container from 'react-bootstrap/Container'
import FadeIn from "react-fade-in";
import "bootstrap/dist/css/bootstrap.css";

export default function Layout({ children }) {

    return (
        <>
          <Header />
            <Container>
              <FadeIn>
                <div>
                    <h1>{children}</h1>
                </div>
              </FadeIn>
            </Container>
            <Footer />           
        </>
    )
}