import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectWeatherDetails } from '@app/store/weather';
import { GridList, Icon, Spacer, Text } from '@app/components';
import {
  toDegree,
  toHectoPascal,
  toMeterPerSecond,
  toPercentage,
} from '@app/utils/formatters';
import { getScheduleFromDatetime } from '@app/utils/date';
import { View } from 'react-native';
import useStyles from './Details.styles';

type WeatherDetails = NonNullable<ReturnType<typeof selectWeatherDetails>>;

const makeGridListData = (details: WeatherDetails) => {
  const feelsLike = toDegree(details.feelsLike);
  const humidity = toPercentage(details.humidity);
  const pressure = toHectoPascal(details.pressure);
  const wind = toMeterPerSecond(details.wind);
  const sunrise = getScheduleFromDatetime(details.sunrise);
  const sunset = getScheduleFromDatetime(details.sunset);

  const data = [
    { icon: 'thermometer', label: 'Feels like', value: feelsLike },
    { icon: 'water-percent', label: 'Humidity', value: humidity },
    { icon: 'speedometer', label: 'Pressure', value: pressure },
    { icon: 'weather-windy', label: 'Wind', value: wind },
    { icon: 'weather-hazy', label: 'Sunrise', value: sunrise },
    { icon: 'weather-sunset', label: 'Sunset', value: sunset },
  ] as const;

  return data;
};

const Details = () => {
  const styles = useStyles();
  const details = useSelector(selectWeatherDetails);

  const data = useMemo(() => {
    if (!details) {
      return [];
    }

    return makeGridListData(details);
  }, [details]);

  return (
    <GridList
      style={styles.grid}
      data={data}
      keyExtractor={({ label }) => label}
      numColumns={3}
      bounces={false}
      renderItem={({ item: { icon, label, value } }) => (
        <View style={styles.card}>
          <Icon name={icon} color="primary" size="xs" />
          <Spacer y="xs" />
          <Text size="sm">{value}</Text>
          <Spacer y="xs" />
          <Text color="muted" size="xs">
            {label}
          </Text>
        </View>
      )}
    />
  );
};

export default Details;
