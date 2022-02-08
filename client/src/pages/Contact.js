import React from 'react';
import Card from '../components/ui/Card';
import BioRow from '../components/ui/BioRow';
import ContactForm from '../components/ui/ContactForm';
import './Work.css';

function ContactPage() {
  return (
    <Card>
      <BioRow>
        <h2>Contact Information</h2>
        <p>
          If you would like to contact me, I can be reached in the following
          ways.
        </p>
      </BioRow>
      <BioRow>
        <ul className="contact-methods">
          <li>
            <strong>
              <i className="fas fa-mobile-alt"></i> Call/ Text:
            </strong>{' '}
            1-815-388-4756
          </li>
          <li>
            <strong>
              <i className="far fa-envelope"></i> Email:
            </strong>{' '}
            <a className="repo-link" href="mailto: ElijahARomer@gmail.com">
              ElijahARomer@gmail.com
            </a>
          </li>
          <li>
            <strong>
              <i className="fab fa-github"></i> GitHub:
            </strong>{' '}
            <a className="repo-link" href="https://github.com/ElijahRomer">
              /ElijahRomer
            </a>
          </li>
          <li>
            <strong>
              <i className="fab fa-linkedin"></i> LinkedIn :
            </strong>{' '}
            <a
              className="repo-link"
              href="https://www.linkedin.com/in/ElijahRomer/"
            >
              /ElijahRomer
            </a>
          </li>
          <li>
            <strong>
              <i className="fab fa-stack-overflow"></i> Stack Overflow :
            </strong>{' '}
            <a
              className="repo-link"
              href="https://stackoverflow.com/users/15502947/elijah-romer?tab=profile"
            >
              Elijah Romer
            </a>
          </li>
        </ul>
      </BioRow>
      <hr />
      <BioRow>
        <ContactForm />
      </BioRow>
    </Card>
  );
}

export default ContactPage;
