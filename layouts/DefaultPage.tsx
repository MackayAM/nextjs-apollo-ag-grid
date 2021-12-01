import { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AppHead from '../components/layout/AppHead';
import Footer from '../components/layout/Footer';

import { IPage } from '../types';

const DefaultPage: FunctionComponent<IPage> = ({
  pageTitle,
  pageDescription,
  children,
  background
}) => {
  return (
    <div
      className="page-container page-background page-background--home"
      style={{
        backgroundImage: `url('${background}')` || ''
      }}
    >
      <Container className="mt-5 h-100 p-4" fluid>
        <AppHead title={pageTitle} description={pageDescription} />
        <Row>
          <Col>{children}</Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DefaultPage;
