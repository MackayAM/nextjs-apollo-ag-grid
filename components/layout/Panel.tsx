import { FunctionComponent } from 'react';

import { Card, Col } from 'react-bootstrap';
import PanelTitle from './PanelTitle';
import _ from 'lodash';

import { IPanel } from '../../types';

const Panel: FunctionComponent<IPanel> = ({
  width,
  title,
  children,
  panelId,
  height,
  xs,
  sm,
  md,
  lg,
  xl,
  hideDivider,
  hideBoxShadow
}) => {
  return (
    <Col
      key={`panel-${panelId}`}
      className="mb-3 px-md-2 panel-container"
      style={{ minHeight: height ? `${height}` : '300px' }}
      xs={xs ? xs : 12}
      sm={sm ? sm : width ? width : 4}
      md={md ? md : width ? width : 4}
      lg={lg ? lg : width ? width : 4}
      xl={xl ? xl : width ? width : 4}
    >
      <Card
        key={`panel-card-${panelId}`}
        className={`card--fill${hideBoxShadow ? ' card--no-shadow' : ''}`}
      >
        {title && <PanelTitle hideDivider={hideDivider}>{title}</PanelTitle>}
        {children}
      </Card>
    </Col>
  );
};

export default Panel;
