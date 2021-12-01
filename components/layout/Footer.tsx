import { FunctionComponent } from 'react';

const Footer: FunctionComponent<{}> = () => {
  return (
    <footer className="float-bottom-right">
      Created by Adam Mackay &copy; {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
