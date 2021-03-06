import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import {
  Card,
  CardHeader,
  CircularProgress,
  InputLabel,
  Tooltip,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Avatar from '~/components/Avatar';
import CirclesLogoSVG from '%/images/logo.svg';
import { useUserdata } from '~/hooks/username';

const fontSize = 12;

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    padding: theme.spacing(1),
    textAlign: 'left',
  },
  cardHeaderContent: {
    display: 'inline-flex',
    alignItems: 'center',
    fontSize,
    '&>*': {
      marginRight: theme.spacing(0.5),
    },
  },
  inputLabel: {
    marginBottom: theme.spacing(1),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize,
    textAlign: 'left',
  },
}));

const TransferInfoCard = ({
  address,
  isLoading = false,
  label,
  text,
  tooltip,
}) => {
  const classes = useStyles();
  const { username } = useUserdata(address);

  return (
    <Fragment>
      <InputLabel className={classes.inputLabel} htmlFor="receiver">
        {label}
      </InputLabel>
      <Card>
        <CardHeader
          avatar={<Avatar address={address} size="tiny" />}
          className={classes.cardHeader}
          subheader={
            <Tooltip arrow title={tooltip}>
              <Typography className={classes.cardHeaderContent} component="div">
                <CirclesLogoSVG height={fontSize} width={fontSize} />
                <span>{text}</span>
                {isLoading && <CircularProgress size={fontSize} />}
              </Typography>
            </Tooltip>
          }
          title={`@${username}`}
        />
      </Card>
    </Fragment>
  );
};

TransferInfoCard.propTypes = {
  address: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
};

export default TransferInfoCard;
