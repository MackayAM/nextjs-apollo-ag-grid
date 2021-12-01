import { FunctionComponent } from 'react';

const FullScreenLoader: FunctionComponent<{}> = ({ ...props }) => {
  return (
    <div className="d-flex align-items-center justify-content-center loader-container">
      <div className="float-center">
        {Array.from(Array(8).keys()).map((v) => (
          <div
            key={`bar${v}`}
            className={`bar`}
            style={{ animationDelay: `${(v + 1) * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default FullScreenLoader;
