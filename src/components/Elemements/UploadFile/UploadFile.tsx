import clsx from 'clsx';
import { ChangeEvent, DragEvent, useRef } from 'react';

import './UploadFile.scss';
import { Button } from '..';

import { convertFileArrayToBase64 } from '@/utils/convertFileUpload';

export type FileType = {
  fileName: string;
  fileBase64: string;
  fileSize: number;
  id: string;
  type: string;
};

export type ChosenFileType<T extends FileType | null> = T extends FileType
  ? FileType
  : FileType[];

export type UploadFileProps<T extends FileType> = {
  multiple?: boolean;
  onChooseFile: (files: ChosenFileType<T>) => void;
  className?: string;
  fileTypeAcceptAttr?: string;
  type?: 'image-upload';
  screen?: string;
};

export const UploadFile = <T extends FileType>({
  multiple = false,
  onChooseFile,
  className,
  fileTypeAcceptAttr,
  type,
}: UploadFileProps<T>) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const fileEvent = e.dataTransfer.files;

    if (fileEvent && screen) {
      const filesArray = Array.from(fileEvent);
      if (multiple) {
        convertFileArrayToBase64(filesArray, onChooseFile);
      } else {
        const file = filesArray[0];
        convertFileArrayToBase64([file], onChooseFile);
      }
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileEvent = e.target.files;

    if (fileEvent) {
      const filesArray = Array.from(fileEvent);
      if (multiple) {
        convertFileArrayToBase64(filesArray, onChooseFile);
      } else {
        const file = filesArray[0];
        convertFileArrayToBase64([file], onChooseFile);
      }
    }
  };

  return (
    <div className={clsx('upload-file__root', className)}>
      <div
        className={clsx(
          'upload-file__box-drop',
          type === 'image-upload' && `upload-file__box-drop--${type}`,
        )}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="upload-file__box-drop__btn_label">
          <div>
            <p>Drag or Drop file</p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }}
              multiple={multiple}
              accept={fileTypeAcceptAttr}
            />
          </div>
          <Button
            type="button"
            themeType="submit"
            onClick={() => {
              fileInputRef.current?.click();
            }}
          >
            Choose File
          </Button>
        </div>
      </div>
    </div>
  );
};
