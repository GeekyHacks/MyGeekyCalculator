import Calculator from './Calculator';

const Footer = () => {
  const result = (
    <div>
      <footer>
        <h3 className="copyRights">
          Copy rights reserved to
          <a href={Calculator}> GeekyHacks</a>
        </h3>
      </footer>
    </div>
  );

  return result;
};

export default Footer;
