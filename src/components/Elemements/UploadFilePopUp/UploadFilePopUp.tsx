import { useState } from 'react';

import { Button } from '../Button';
import { Modal } from '../Modal';
import { FileType, UploadFile } from '../UploadFile';

import './UploadFilePopUp.scss';

export type UploadFilePopUpProps = {
  isOpen?: boolean;
  onCancel?: () => void;
  onSubmit?: (fileData: FileType | null) => void;
};

export const UploadFilePopUp = ({
  isOpen = true,
  onCancel,
  onSubmit,
}: UploadFilePopUpProps) => {
  const [fileData, setFileData] = useState<FileType | null>(null);

  const onChooseFile = (files: FileType) => {
    setFileData(files);
  };

  return (
    <Modal
      label="Upload Image"
      isOpenModal={isOpen}
      onCloseModal={onCancel}
      type="file-upload"
    >
      <div className="form__box">
        <div className="upload-file-box">
          <UploadFile<FileType>
            className="upload-file-mockup size-top size-bottom"
            onChooseFile={onChooseFile}
            multiple={true}
          />
        </div>
        {fileData && (
          <div className="uploaded-file-box">
            <h1>Your chosen file</h1>
            <div>{fileData.fileName}</div>
          </div>
        )}
        <div className="btn-group--upload-file">
          <Button themeType="cancel-MW-145" onClick={onCancel}>
            Cancel
          </Button>

          <Button
            themeType="submit"
            type="button"
            onClick={() => {
              onSubmit && onSubmit(fileData);
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </Modal>
  );
};
