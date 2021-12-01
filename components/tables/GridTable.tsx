import { FunctionComponent } from 'react';
import { LicenseManager } from 'ag-grid-enterprise';
import { AgGridReact } from 'ag-grid-react';
import { GridReadyEvent } from 'ag-grid-community';
import { Row } from 'react-bootstrap';
import { getGridOptions } from '../../lib/tables/default-options';

import { IGridTable } from '../../types';
import GenericRenderer from './cell-renderers/GenericRenderer';
import ModalLink from './cell-renderers/ModalLink';

LicenseManager.setLicenseKey('Test');

const GridTable: FunctionComponent<IGridTable> = ({
  gridOptions,
  tableData,
  onTableReady
}) => {
  const onGridReady = (params: GridReadyEvent) => {
    const { api, columnApi } = params;
    if (onTableReady) {
      onTableReady(api, columnApi);
    }
    api.setDomLayout('autoHeight');
  };

  return (
    <div className={`ag-theme-balham-dark table-container`}>
      <Row>
        <AgGridReact
          rowData={tableData}
          getRowNodeId={(data) => {
            return data.id || Math.random() * Date.now() + Math.random();
          }}
          onGridReady={onGridReady}
          {...getGridOptions(gridOptions)}
          frameworkComponents={{
            genericRenderer: GenericRenderer,
            modalLink: ModalLink
          }}
        />
      </Row>
    </div>
  );
};

export default GridTable;
