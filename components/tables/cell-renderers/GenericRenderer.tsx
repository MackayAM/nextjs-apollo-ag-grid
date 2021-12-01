import { format } from 'date-fns';
import { IGenericRenderer } from '../../../types';

export default function GenericRenderer({ cell, type }: IGenericRenderer) {
  if (type === 'date') {
    if (!cell.value) {
      return '-';
    }
    try {
      return format(new Date(cell.value), 'dd/MM/yyyy');
    } catch {
      return '-';
    }
  } else {
    return cell.value;
  }
}
