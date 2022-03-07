import React from 'react';
import reactDom from 'react-dom';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>This was built to help you have a good time. We're like the BBB but better.</p>
        <p>
          <Link to='/'>Home Page</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
