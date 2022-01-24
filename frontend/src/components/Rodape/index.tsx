import './styles.css';
import linkedin from 'assets/img/linkedin.svg';
import github from 'assets/img/github-footer.svg';
function Footer() {
    return (
        <footer id="myFooter">
            <div className="container">
                <p className="footer-copyright">© 2022 Copyright - Projeto Criado por:</p>
                <p className='footer-copyright '>José Jorge Hauck Júnior</p>
            </div>
            <div className="footer-social">
                <a href="https://www.linkedin.com/in/jorgehauck/" target="_blank" rel="noreferrer"><img src={linkedin} alt="" className='linkedin'/></a>
                <a href="https://github.com/jorgehauck" target="_blank" rel="noreferrer"><img src={github} alt="github" className='github'/></a>
            </div>
        </footer>
    )
}

export default Footer;