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
            <img src='https://pics.freeicons.io/uploads/icons/png/10412341841540553610-512.png' alt="icon"/>
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