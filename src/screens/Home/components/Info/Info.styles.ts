import { makeStyles } from '@app/utils/styles';

const useStyles = makeStyles(({ theme }) => ({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin: {
    marginBottom: theme.spacing.xxl,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 200,
    height: 200,
    marginVertical: -theme.spacing.xxl,
  },
}));

export default useStyles;
