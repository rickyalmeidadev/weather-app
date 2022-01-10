import { makeStyles } from '@app/utils';

const useStyles = makeStyles(({ theme }) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  monospace: {
    fontFamily: theme.fonts.monospace,
  },
}));

export default useStyles;
