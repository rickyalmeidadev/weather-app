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
}));

export default useStyles;
