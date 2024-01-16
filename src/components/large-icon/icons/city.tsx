import React from 'react';
import { IconWrapper } from '../IconWrapper';

const CityIcon: React.FC<React.PropsWithChildren> = () => (
  <IconWrapper viewBox="0 0 81 80" data-icon="city">
    <path d="m76.5 12v56h2v-58h-32v26h2v-24z" fill="currentColor" />
    <path
      d="m32.5 31-14-10.5-14 10.5v37h-2v-38l16-12 16 12v38h-2z"
      fill="currentColor"
    />
    <path d="m38.5 42v-2h22v28h-2v-26z" fill="currentColor" />
  </IconWrapper>
);

export default CityIcon;
