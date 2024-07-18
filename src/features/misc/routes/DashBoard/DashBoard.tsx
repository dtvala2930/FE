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
      <div style={{ marginTop: '20px' }}>Thanks for your time.</div>
      <div>This is my result for technical test</div>
      <h2 style={{ marginTop: '20px', fontWeight: 'bold' }}>
        My Tech Stack for this project
      </h2>
      <ul>
        <li>• React.js + React hook form + react-query-auth + Zod + SCSS</li>
        <li>• Nest.js + Postgres + prisma</li>
        <li>• Web scrapping with pupperty + bright data</li>
        <li>
          • FE host: Firebase
          <span style={{ fontWeight: 'bold' }}>
            (https://interview-3d75e.web.app)
          </span>
        </li>
        <li>
          • BE host: Render
          <span style={{ fontWeight: 'bold' }}>
            (https://be-fd7o.onrender.com)
          </span>
        </li>
        <li>• Docker compose for FE + BE</li>
      </ul>
      <h2 style={{ marginTop: '20px', fontWeight: 'bold' }}>
        What features in my project
      </h2>
      <ul>
        <li>• Log in/Register</li>
        <li>• Upload keyword with CSV file</li>
        <li>• Get list search</li>
        <li>• View search detail</li>
      </ul>
      <h2 style={{ marginTop: '20px', fontWeight: 'bold' }}>
        What missed in my project
      </h2>
      <ul>
        <li>• Check file type</li>
        <li>• Search items</li>
      </ul>

      <h2 style={{ marginTop: '20px', fontWeight: 'bold' }}>
        Because I am using free host for BE side so it takes a little bit longer
        than 1 minute for the first request. I hope this is not annoying.
      </h2>
    </>
  );
};
