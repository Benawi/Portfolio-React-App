import React from "react";

const GetInTouch = ({ heading, message, email, inboxme }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}, <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a> {inboxme}
      </p>
    </>
  );
};

export default GetInTouch;
