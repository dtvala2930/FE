import { useUser } from '@/libs/auth';
import './DashBoard.scss';

export const DashBoard = () => {
  const { data } = useUser();
  return (
    <>
      <h1>
        Hello {data?.firstName} {data?.lastName}
      </h1>
      <>Email: {data?.email}</>
    </>
  );
};
