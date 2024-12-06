import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { Load } from './Load';

export const Loader = () => (
  <Load>
    <InfinitySpin width="200" color="#4fa94d"  />
  </Load>
);

