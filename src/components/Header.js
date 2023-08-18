import Calculator from './Calculator';

const Header = () => {
  const result = (
    <div>
      <header>
        <nav>
          <div className="navBar">
            <h2>Geeky Calculator</h2>
            <div>
              <a className="link" id="listBtn" href={Calculator}>
                List
              </a>

              <span>|</span>

              <a className="link" id="addNewBook" href={Calculator}>
                Calculator
              </a>
              <span>|</span>
              <a href={Calculator} className="link" id="contactBtn">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );

  return result;
};

export default Header;
