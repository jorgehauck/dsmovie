import './styles.css';

function Footer() {
    return (
       
        <footer id="myFooter">
            <div className="container">
                <p className="footer-copyright">© 2022 Copyright - Projeto Criado por: José Jorge Hauck Júnior</p>
            </div>
            <div className="footer-social">
                
                <a href="https://www.linkedin.com/in/jorgehauck/" className="social-icons"><i className="fa fa-linkedin"></i></a>
                <a href="https://github.com/jorgehauck" className="social-icons"><i className="fa fa-github"></i></a>
            </div>
        </footer>
    )
}

export default Footer;