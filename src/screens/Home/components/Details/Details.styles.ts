import { makeStyles } from '@app/utils/styles';

const useStyles = makeStyles(({ theme }) => ({
  grid: {
    flexGrow: 0,
    paddingBottom: theme.spacing.lg,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.sm,
    borderRadius: theme.spacing.sm,
  },
}));

export default useStyles;
