import './footer.styles.scss';

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer-icon">
        <div className="icon">
          <a href="#">
            <img src='https://www.flaticon.com/premium-icon/icons/svg/2168/2168281.svg' alt="icon"/>
          </a>
        </div>
        <div className="icon">
          <a href="https://www.instagram.com/adamovich_ps/?igshid=2rl7e5y71xkf">
            <img src='https://www.flaticon.com/premium-icon/icons/svg/2175/2175198.svg' alt="icon"/>
          </a>
        </div>
        <div className="icon">
          <a href="https://github.com/puchaps">
            <img src='https://www.flaticon.com/svg/vstatic/svg/2111/2111425.svg?token=exp=1611006235~hmac=c4e4969f037a7c2da8f9b11d2b6120b1' alt="icon"/>
          </a>
        </div>
      </div>
      <div className="footer-text">
        <a className="text" href = '#'>Info</a>
        <a className="text" href = '#'>Suport</a>
        <a className="text" href = '#'>Marketing</a>
      </div>
      <div className="footer-year">
        &#169; 2021
      </div>
    </footer>
  );
};

export default Footer;