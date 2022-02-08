import React from 'react';
import Card from '../components/ui/Card';
import ScrollToTopBtn from '../components/ui/ScrollToTopBtn';
import FeaturedProject from '../components/ui/FeaturedProject';
import WorkRow from '../components/ui/WorkRow';
import Project from '../components/ui/Project';

import worksData, { featuredWorkData } from '../data/data';

import './Work.css';

function WorkPage() {
  return (
    <Card>
      <h1 className="text-center">WORK</h1>
      <h6 className="text-center">
        Click each picture to be taken to the deployed website, or GitHub
        repository if the application is not a website.
      </h6>
      <hr />
      <WorkRow>
        <FeaturedProject
          key={featuredWorkData.workClass}
          title={featuredWorkData.title}
          repoLink={featuredWorkData.repoLink}
          description={featuredWorkData.description}
          workClass={featuredWorkData.workClass}
          picLink={featuredWorkData.picLink}
        />
      </WorkRow>
      <hr />
      <WorkRow>
        {worksData.map((work) => (
          <Project
            key={work.workClass}
            title={work.title}
            repoLink={work.repoLink}
            description={work.description}
            workClass={work.workClass}
            picLink={work.picLink}
          />
        ))}
      </WorkRow>
      <hr />
      <WorkRow>
        <ScrollToTopBtn />
      </WorkRow>
    </Card>
  );
}

export default WorkPage;
