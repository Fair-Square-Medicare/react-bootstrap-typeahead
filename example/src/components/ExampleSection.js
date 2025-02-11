/* eslint-disable import/no-extraneous-dependencies */

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import CodeSample from './CodeSample';

const ExampleSection = ({ children, code }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="example-section">
      <div className="example">
        <div className="clearfix">
          <div className="example-section-title">Example</div>
          <Button
            className="example-toggle-code"
            onClick={() => setIsOpen(!isOpen)}
            size="sm"
            variant="link">
            {`${isOpen ? 'Hide' : 'Show'} Code`}
          </Button>
        </div>
        {children}
      </div>
      {isOpen ? <CodeSample>{code}</CodeSample> : null}
    </div>
  );
};

export default ExampleSection;
