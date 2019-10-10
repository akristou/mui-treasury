import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { FaceGroup } from '@mui-treasury/components/group';
import { usePeopleCardFooterStyles } from '@mui-treasury/styles/cardFooter';

const PeopleCardFooter = ({ faces, noDivider }) => {
  const styles = usePeopleCardFooterStyles();
  return (
    <>
      {!noDivider && <Divider className={styles.divider} light />}
      <FaceGroup faces={faces} />
    </>
  );
};

PeopleCardFooter.propTypes = {
  faces: PropTypes.arrayOf(PropTypes.string),
  noDivider: PropTypes.bool,
};
PeopleCardFooter.defaultProps = {
  faces: [],
  noDivider: false,
};

export default PeopleCardFooter;
