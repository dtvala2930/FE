import { nanoid } from 'nanoid';

import { ChosenFileType, FileType } from '@/components/Elemements/UploadFile';

export const convertFileArrayToBase64 = async <T extends FileType | null>(
  files: File[],
  callback: (fileData: ChosenFileType<T>) => void,
) => {
  if (files.length === 1) {
    const file = files[0];
    const { name: fileName, size: fileSize, type } = file;
    const { fileBase64 } = await convertFileToBase64(file);
    const singleFileData: FileType = {
      fileName,
      fileSize,
      fileBase64,
      type,
      id: nanoid(),
    };
    callback(singleFileData as ChosenFileType<T>);
    return;
  }

  const fileData: FileType[] = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const { name: fileName, size: fileSize, type } = file;
    const { fileBase64 } = await convertFileToBase64(file);
    fileData.push({ fileName, fileSize, fileBase64, type, id: nanoid() });
  }

  callback(fileData as ChosenFileType<T>);
};

export const convertFileToBase64 = (
  file: File,
): Promise<{ file: File; fileBase64: string }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const convertBase64ToString = reader.result as string;

      resolve({
        file,
        fileBase64: convertBase64ToString.slice(
          convertBase64ToString.indexOf(',') + 1,
          convertBase64ToString.length,
        ),
      });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const convertFileBase64ToBlob = (base64String: string) => {
  const byteCharacters = atob(base64String);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: 'image/png' });
  return blob;
};
