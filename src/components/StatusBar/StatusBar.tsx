import React from 'react';
import { useSelector } from 'react-redux';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { selectWeatherRequestStatus } from '@app/store/weather';
import type { StatusBarProps } from 'expo-status-bar';

const StatusBar = (props: StatusBarProps) => {
  const status = useSelector(selectWeatherRequestStatus);
  const networkActivityIndicatorVisible =
    status === 'loading' || status === 'fetching';

  return (
    <ExpoStatusBar
      style="auto"
      networkActivityIndicatorVisible={networkActivityIndicatorVisible}
      {...props}
    />
  );
};

export default StatusBar;
