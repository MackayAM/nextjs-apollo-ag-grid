import { ICellRendererParams } from 'ag-grid-community';

export const characterColumns = [
  {
    headerName: 'Character ID',
    field: 'id'
  },
  {
    headerName: 'Character Name',
    field: 'name'
  },
  {
    headerName: 'Character Status',
    field: 'status'
  },
  {
    headerName: 'Character Species',
    field: 'species'
  },
  {
    headerName: 'Character Type',
    field: 'type'
  },
  {
    headerName: 'Character Gender',
    field: 'gender'
  },
  {
    headerName: 'Character Origin',
    field: 'origin.name',
    cellRenderer: "modalLink",
    cellRendererParams: (cell: ICellRendererParams) => ({cell, data: cell?.data, field: 'origin'})
  },
  {
    headerName: 'Character Location',
    field: 'location.name',
    cellRenderer: "modalLink",
    cellRendererParams: (cell: ICellRendererParams) => ({cell, data: cell?.data, field: 'location'})
  },
  {
    headerName: "Created Date",
    field: "created",
    cellRenderer: "genericRenderer",
    cellRendererParams: (cell: ICellRendererParams) => ({cell, type: "date"})
  }
]