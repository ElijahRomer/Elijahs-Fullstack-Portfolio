import React from 'react';
import Card from '../components/ui/Card';
import ScrollToTopBtn from '../components/ui/ScrollToTopBtn';

import './Resume.css';

function ResumePage() {
  return (
    <Card>
      <div className="row my-4">
        <h1 className="text-center">RESUME</h1>
        <h4 className="download d-flex justify-content-center">
          <a
            className="download "
            href="https://drive.google.com/file/d/1_nzI20invh43Crn-xH0bopT0W8KhOZtB/view"
          >
            Download Here
          </a>
        </h4>
        {/* iframe link must be from the embed url  */}
        <iframe
          src="https://drive.google.com/file/d/1_nzI20invh43Crn-xH0bopT0W8KhOZtB/preview"
          allow="autoplay"
          title="Elijah's Resume"
        ></iframe>
      </div>
      <hr />
      <ScrollToTopBtn />
    </Card>
  );
}

export default ResumePage;
