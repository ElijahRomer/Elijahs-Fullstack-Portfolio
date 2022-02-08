import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Card from '../components/ui/Card';
import Image from '../components/ui/Image';
import BioRow from '../components/ui/BioRow';
import profilePicture from '../images/profilePicture.jpg';
import headDown from '../images/headDown.jpg';
import ScrollToTopBtn from '../components/ui/ScrollToTopBtn';

function BioPage() {
  return (
    <Card>
      <BioRow>
        <h1 className="text-center">Hello! I'm Elijah Romer.</h1>
        <div className="row my-2">
          <LinkContainer to="/Elijahs-Portfolio-React/work">
            <button className="btn btn-primary col-sm-10 col-md-4 mx-auto">
              View my work <i className="fas fa-arrow-right"></i>
            </button>
          </LinkContainer>
        </div>
      </BioRow>
      <hr />
      <BioRow>
        <Image src={profilePicture} alt="Elijah Romer" />
        <div className="my-1 col-sm-12 col-lg-8">
          <h4>Who is this guy?</h4>
          <p>
            I'm a full-stack web developer, and I have devoted the last 9 months
            to learning computer science, focusing on contemporary web and
            software development.
          </p>

          <p>
            As I believe you will find in the examples of my work, I can quicky
            learn new skills and workflows to adapt and meet the demands of the
            job, and the team in which I am participating.
          </p>
          <strong>
            <p>
              My motto for not just software development, but for life is
              "Perpetuam uitae, doctrina" which is latin for "Lifelong
              Learning". When the path forward is unclear, it's time to hit the
              books, (or consult the documentation).
            </p>
          </strong>

          <p>
            In addition to the standard bootcamp curriculum, I have put
            significant hours towards learning development methodology, the git
            version control system, understanding JavaScript on a fundamental
            level, algorithms/ big O notation, OS tools and tricks, basic
            data-structures and science, CPU operation, fundamentals of
            electrical engineering, computer architecture, and of course the
            history of computers - you can call me a Turing fan-boy.
          </p>

          <p>
            I believe this gives me a broad context, enabling me to pick up new
            technologies faster, and keeping me grounded yet flexible in the
            face of the evolving technological landscape.
          </p>
        </div>
      </BioRow>
      <hr />
      <BioRow>
        <h2>Technologies and Strengths</h2>
        <div className="col-sm-10 col-lg-6 mx-auto">
          <p>
            <strong>
              I currently know the MERN stack and am quite familiar with the
              following technologies:
            </strong>
          </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Materialize</li>
            <li>JavaScript, advanced</li>
            <li>React</li>
            <li>JQuery</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>SQL and Sequelize</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="col-sm-10 col-lg-6 mx-auto">
          <p>
            <strong>My professional strengths include:</strong>
          </p>
          <ul>
            <li>Coachability.</li>
            <li>Solution oriented, problem solver.</li>
            <li>Teamwork from previous collaborative work experience.</li>
            <li>Positivity/ enthusiasm, even in the face of adversity.</li>
            <li>Learning new technologies- fast.</li>
            <li>Strong grasp of underlying computer science.</li>
            <li>
              Teachning others what I know, and knowing when to ask questions.
            </li>
            <li>Planning, strategizing, and executing to meet deadlines.</li>
            <li>Attention to writing clean, maintainable code.</li>
            <li>Going the extra mile to deliver the best possible product.</li>
          </ul>
        </div>
      </BioRow>
      <hr />
      <BioRow>
        <h2>Interests and Hobbies</h2>
        <div className="my-1 col-sm-12 col-lg-8">
          <p>
            When I am not coding, I'm usually traveling, skydiving, or both! I
            love any and all things that expand my horizons and introduce me to
            new experiences and ideas. My favorite pastime is learning for the
            sake of learning, which I feel complements the realm of software
            development quite well.
          </p>
          <p>
            My favorite adventure to date has been skydiving and learning the
            intricacies of the gear, weather conditions, landing in different
            terrain, and risk management- as if my life depended on it! This is
            an environment in which I thrive quite well: the need for attention
            to detail, coachability, and to learn quickly. There is little room
            for performance anxiety whilst plummeting to earth at 120 miles per
            hour, and adapting on the fly is a foundational key to success in
            all things.
          </p>
          <p>
            My dream is to someday prove myself enough in the software and web
            development industry to be able to work virtually and become a
            digital nomad- traveling/ living abroad and working full-time
            simultaneously. If given the chance to prove what I am capable of, I{' '}
            <i>guarantee</i> you will not be dissappointed.
          </p>
        </div>
        <Image
          src={headDown}
          alt="UpsideDown at 10,000'"
          caption="Upside-down at 10,000' in the skies above Ottawa, IL."
        />
      </BioRow>
      <hr />
      <BioRow>
        <ScrollToTopBtn />
      </BioRow>
    </Card>
  );
}

export default BioPage;
