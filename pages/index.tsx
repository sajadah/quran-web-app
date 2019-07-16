import React from 'react';
import { NextPage } from 'next';
import About from './About';

interface propTypes {
  userAgent?: String,
}

const Index: NextPage<propTypes> = (props: propTypes) => (
  <div>
    <p>Hello Quran Web</p>
    <About name={props.userAgent} />
  </div>
);

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default Index;