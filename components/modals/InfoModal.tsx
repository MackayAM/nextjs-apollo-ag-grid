import { FunctionComponent } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Container, Row, Col } from 'react-bootstrap';

import { InfoModalProps } from '../../types';

const InfoModal: FunctionComponent<InfoModalProps> = ({
  title,
  data,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogTitle>{title}</DialogTitle>
      {Object.keys(data)
        ?.filter((v) => v !== '__typename')
        .map((key) => (
          <Container key={key}>
            <Row>
              <Col>
                <p>
                  {key[0]?.toUpperCase() + key?.slice(1)}: {data[key]}
                </p>
              </Col>
            </Row>
          </Container>
        ))}
    </Dialog>
  );
};

export default InfoModal;
