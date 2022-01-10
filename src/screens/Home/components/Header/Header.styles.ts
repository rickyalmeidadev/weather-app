import { makeStyles } from '@app/utils';

const useStyles = makeStyles(({ theme }) => ({
  root: {
    backgroundColor: theme.colors.background,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.md,
  },
}));

export default useStyles;
