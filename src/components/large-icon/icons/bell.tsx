import React from "react";
import { IconWrapper } from "../IconWrapper";

const BellIcon: React.FC<React.PropsWithChildren> = () => (
  <IconWrapper viewBox="0 0 28 31" data-icon="bell">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 17.4341V9C6 4.58172 9.58172 1 14 1C18.4183 1 22 4.58172 22 9V17.4341L26.1783 24H1.82167L6 17.4341ZM28 25L23 17.1429V9C23 4.02944 18.9706 0 14 0C9.02944 0 5 4.02944 5 9V17.1429L0 25H28ZM13.9995 30.9965C11.6849 30.9965 9.77861 29.2482 9.5293 27H10.5373C10.7805 28.6943 12.2379 29.9965 13.9995 29.9965C15.7611 29.9965 17.2186 28.6943 17.4618 27H18.4698C18.2205 29.2482 16.3142 30.9965 13.9995 30.9965Z"
      fill="currentColor"
    />
  </IconWrapper>
);

export default BellIcon;
