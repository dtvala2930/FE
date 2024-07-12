import { ScreenAlert } from '@/components/ScreenAlert';

export const InternalServerError = () => {
  return <ScreenAlert title="Internal server error" code="500" />;
};
