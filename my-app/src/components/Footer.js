import './styles/footer.css';

function Footer() {
    return (
        <>
            <footer className="main-footer">
                <p className="footer-header">Aerify</p>
                <ul className="socials">
                    <li><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/?lang=en"><i className="fa-brands fa-twitter"></i></a></li>
                </ul>
                <a href="home.html" className="website-link">www.Aerify.com</a>
                <p className="bottom-footer">Copyright &copy;2023 Aerify, Designed by Cheyenne</p>
            </footer>
        </>
    );
}

export default Footer;