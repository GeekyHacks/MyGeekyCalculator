import Calculator from './Calculator';

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <div class="navBar">
            <h2>Geeky Calculator</h2>
            <div>
              <a href="#" class="link" id="listBtn">
                List
              </a>{' '}
              <span>|</span>{' '}
              <a class="link" id="addNewBook" href="#">
                Calculator
              </a>
              <span>|</span>
              <a class="link" id="contactBtn" href="#">
                Contact
              </a>
            </div>
          </div>
          <p class="dayDate"></p>
        </nav>
      </header>
    </div>
  );
};

export default Header;
