import React, { memo } from "react";

const MyPageOption = memo(({ children }) => {
  return (
    <li>
      <a className="nav-link active" href="#tab1">
        {children}
      </a>
    </li>
  );
});

export default MyPageOption;
