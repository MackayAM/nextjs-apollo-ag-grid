import { GridApi, ColumnApi, ICellRendererParams } from "ag-grid-community";
import { DialogProps } from '@mui/material/Dialog';
import { StyledInterface } from "styled-components";

export interface IHead {
    title?: string;
    description?: string;
}

export interface IGridTable {
    gridOptions: Object;
    tableData?: Array<Object>;
    onTableReady?: (api: GridApi, columnApi: ColumnApi) => void;
}

export interface IPage {
    pageTitle?: string;
    pageDescription?: string;
    background?: string;
}

export interface IPanel {
    width?: number,
    title?: string,
    panelId?: number,
    height?: number,
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number,
    hideDivider?: boolean,
    hideBoxShadow?: boolean
}

export interface IPanelTitle {
    hideDivider?: boolean;
}
export interface IObject {
    [key: string]: any;
}

export interface IGenericRenderer {
    cell: ICellRendererParams;
    type: string;
}

export interface IModalLink { 
    cell: ICellRendererParams;
    data: any;
    field: string;
}

export type InfoModalProps = DialogProps & {
    title: string;
    data: any;
}