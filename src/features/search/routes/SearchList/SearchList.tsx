import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { omit } from 'lodash';
import { useState } from 'react';

import { useGetSearchList } from '../../api/getSearchList';
import { useUpdateFileUploaded } from '../../api/uploadSearch';

import {
  Button,
  FileType,
  Link,
  UploadFilePopUp,
} from '@/components/Elemements';
import { ContentLayout, FormLayout } from '@/components/Layout';
import { Panel } from '@/components/Panel';
import { ROUTES } from '@/utils/constants';

export const SearchList = () => {
  const [isUploadFilePopUp, setIsUploadFilePopUp] = useState(false);

  const onToggleUploadFilePopUp = () => {
    setIsUploadFilePopUp(!isUploadFilePopUp);
  };

  const onCancelUploadFilePopUp = () => {
    setIsUploadFilePopUp(false);
  };

  const [_, setFileUpload] = useState<FileType | null>(null);

  const onSetUploadFile = (file: FileType | null) => {
    setFileUpload(file);
    setIsUploadFilePopUp(false);
  };

  const { mutate: uploadedFile } = useUpdateFileUploaded();

  const { data } = useGetSearchList();

  return (
    <>
      <ContentLayout title="Search">
        <Panel
          sideRight={
            <Button
              type="button"
              themeType="add"
              onClick={onToggleUploadFilePopUp}
              icon={<FontAwesomeIcon icon={faAdd} />}
            >
              Upload file
            </Button>
          }
          title="Search list"
        >
          <FormLayout>
            <div className="form__box">
              {data?.data.map((item, index) => {
                return (
                  <div key={item.fileId}>
                    <Link to={`${item.fileId}`}>
                      <span>
                        {index + 1}. {item.fileName}
                      </span>
                    </Link>
                  </div>
                );
              })}
              {isUploadFilePopUp && (
                <UploadFilePopUp
                  isOpen={isUploadFilePopUp}
                  onSubmit={(file) => {
                    if (file) {
                      const refinedPayload = omit(file, ['type', 'fileSize']);
                      uploadedFile({
                        payload: refinedPayload,
                      });
                      onSetUploadFile(file);
                    }
                  }}
                  onCancel={onCancelUploadFilePopUp}
                />
              )}
            </div>
          </FormLayout>
        </Panel>
      </ContentLayout>
    </>
  );
};
