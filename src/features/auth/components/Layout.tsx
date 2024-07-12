import './Layout.scss';

type LoginProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LoginProps): JSX.Element => {
  return <div className="layout-auth">{children}</div>;
};
