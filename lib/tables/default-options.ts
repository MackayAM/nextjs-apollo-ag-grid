import _ from 'lodash';
import { GridOptions } from 'ag-grid-community';

export const defaultGridOptions = {
  rowHeight: 40,
  groupSelectsChildren: true,
  multiSortKey: 'ctrl',
  rowSelection: 'multiple',
  defaultColDef: {
    sortable: true,
    filter: true,
    resizable: true,
    suppressMovable: false,
    tooltipShowDelay: 0.5
  },
  statusBar: {
    statusPanels: [
      { statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'left' },
      { statusPanel: 'agTotalRowCountComponent', align: 'center' },
      { statusPanel: 'agFilteredRowCountComponent' },
      { statusPanel: 'agSelectedRowCountComponent' },
      { statusPanel: 'agAggregationComponent' }
    ]
  },
  enableRangeSelection: true,
  animateRows: true,
  sideBar: {
    toolPanels: [
      {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel'
      },
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
        toolPanelParams: {
          suppressRowGroups: false,
          suppressValues: true,
          suppressPivotMode: false
        }
      }
    ]
  },
  suppressAggFuncInHeader: true,
  autoGroupColumnDef: {
    supressCount: true,
    suppressMovable: true
  },
  suppressMovableColumns: false,
  groupRowRendererParams: {
    suppressCount: true
  }
};

export const getGridOptions = (options: GridOptions) => {
  return _.merge({}, defaultGridOptions, options);
};
