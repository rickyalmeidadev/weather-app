import { makeStyles } from '@app/utils';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

const useStyles = makeStyles(({ theme }) => ({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: getStatusBarHeight(),
    paddingBottom: getBottomSpace(),
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    marginBottom: theme.spacing.xxl * 2,
  },
}));

export default useStyles;
