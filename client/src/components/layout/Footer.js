import React from 'react';
import classes from './Footer.module.css';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-primary">
      <div className="container text-center">
        <span className="text-light">Follow me at: </span>
        <br />
        <a
          id={classes.footerLink}
          className="text-light footer-link"
          href="https://github.com/ElijahRomer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <br />
        <a
          id={classes.footerLink}
          className="text-light footer-link"
          href="https://www.linkedin.com/in/ElijahRomer/"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <br />
        <a
          id={classes.footerLink}
          className="text-light footer-link"
          href="https://stackoverflow.com/users/15502947/elijah-romer?tab=profile"
        >
          <i className="fab fa-stack-overflow"></i> Stack Overflow
        </a>
        <br />

        <span className="text-light">
          © 2021 Elijah Romer. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
