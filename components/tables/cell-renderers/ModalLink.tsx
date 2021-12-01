import { useModal } from 'mui-modal-provider';

import InfoModal from '../../modals/InfoModal';
import { IModalLink } from '../../../types';

const ModalLink = ({ cell, data, field }: IModalLink) => {
  const { showModal } = useModal();

  return (
    <a
      onClick={() =>
        showModal(InfoModal, { title: cell?.value, data: data[field] })
      }
    >
      {cell?.value}
    </a>
  );
};

export default ModalLink;
