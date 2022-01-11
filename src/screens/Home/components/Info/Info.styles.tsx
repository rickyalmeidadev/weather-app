import { makeStyles } from '@app/utils';

const useStyles = makeStyles(({ theme }) => ({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 200,
    height: 200,
    marginVertical: -theme.spacing.xl,
  },
}));

export default useStyles;
