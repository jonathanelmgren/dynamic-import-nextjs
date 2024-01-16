import React from 'react';
import { IconWrapper } from '../IconWrapper';

const CameraIcon: React.FC<React.PropsWithChildren> = () => (
  <IconWrapper viewBox="0 0 40 40" data-icon="camera">
    <path
      stroke="currentColor"
      d="M8.576 12.056c.144-.815.922-1.36 1.737-1.216l15.757 2.778c.816.144 1.361.922 1.217 1.738l-1.736 9.848c-.144.816-.922 1.36-1.738 1.217L8.056 23.642c-.816-.144-1.36-.922-1.217-1.738l1.737-9.848z"
    />
    <path
      fill="currentColor"
      d="M28.417 17.586H29.417V23.586H28.417z"
      transform="rotate(10 28.417 17.586)"
    />
    <path
      stroke="currentColor"
      d="M29.891 23.625l.935-5.3 3.215-.957-1.456 8.255-2.694-1.998z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.01 30h4c2.058 0 3.752-1.553 3.976-3.55l-.987-.18C13.862 27.8 12.576 29 11.01 29h-4v1z"
      clipRule="evenodd"
    />
  </IconWrapper>
);

export default CameraIcon;
