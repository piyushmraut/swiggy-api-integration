import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OOPS!</h1>
      <h2>Something Went Wrong</h2>
      <p>{err.data}</p>
      <p>{err.status}:{err.statusText}</p>
    </div>
  );
};

export default Error;
