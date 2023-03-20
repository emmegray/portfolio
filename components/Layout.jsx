import Header from './Header'
import Footer from './Footer'
import Container from 'react-bootstrap/Container'

export default function Layout({ children }) {

    return (
        <>
            <Header />
            <Container>
                <div style={{
                    padding: "5rem",
                }}>
                    <h1>{children}</h1>
                </div>
            </Container>
            <Footer />
        </>
    )
}