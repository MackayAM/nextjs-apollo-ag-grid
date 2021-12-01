import { FunctionComponent } from 'react';

import { Row, Col } from 'react-bootstrap';

import { IPanelTitle } from '../../types';

const PanelTitle: FunctionComponent<IPanelTitle> = ({
  children,
  hideDivider
}) => {
  return (
    <Row
      className={`${
        hideDivider ? 'card--title-row-no-border' : 'card--title-row'
      } align-items-center`}
      style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
    >
      <Col>
        <div className="panel--title">{children}</div>
      </Col>
    </Row>
  );
};

export default PanelTitle;
