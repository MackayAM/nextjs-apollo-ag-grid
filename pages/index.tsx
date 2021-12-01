import type { NextPage } from 'next';
import { useState } from 'react';
import { GridApi, ColumnApi } from 'ag-grid-community';
import { useQuery } from '@apollo/client';

import DefaultPage from '../layouts/DefaultPage';
import GridTable from '../components/tables/GridTable';
import { characterColumns } from '../lib/tables/column-defs';
import { CHARACTER_QUERY } from '../lib/gql/queries';
import FullScreenLoader from '../components/loaders/FullScreenLoader';
import Panel from '../components/layout/Panel';

const Home: NextPage = () => {
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const [columnApi, setColumnApi] = useState<ColumnApi | null>(null);
  const { data, loading, error } = useQuery(CHARACTER_QUERY, {
    variables: {
      ids: Array.from({ length: 862 }, (_, i) => i + 1)
    }
  });

  const handleTableReady = (api: GridApi, columnApi: ColumnApi) => {
    setGridApi(api);
    setColumnApi(columnApi);
    columnApi.autoSizeAllColumns();
  };

  if (loading) {
    return <FullScreenLoader />;
  }

  if (!loading && error) {
    return <h1>Error loading data</h1>;
  }

  return (
    <DefaultPage pageTitle="Rick &amp; Morty">
      <h1 className="font-weight-bold mt-4 mb-4">Rick &amp; Morty</h1>
      <Panel title={'Characters'} width={12}>
        <GridTable
          gridOptions={{
            columnDefs: characterColumns,
            defaultColDef: {
              enableRowGroup: true,
              enablePivot: true,
              filter: true,
              sortable: true,
              flex: 1
            },
            pivotPanelShow: 'always'
          }}
          tableData={data?.charactersByIds}
          onTableReady={handleTableReady}
        />
      </Panel>
    </DefaultPage>
  );
};

export default Home;
