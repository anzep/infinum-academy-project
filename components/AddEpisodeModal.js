import {observer} from 'mobx-react';

function EditEpisodeModal(props) {
  if (props.isModalOpen) {
    return (
      <div className="{styles.modal}">
        <div className="{styles.overlay}" />
        <div className="modal_content">
          {props.children}
          <button title="Close" className="{styles.close_modal}">x</button>
        </div>
      </div>
    );
  }
  return null;
}

export default observer(EditEpisodeModal);
