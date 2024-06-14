import React from 'react';
import { useUpdate, useNotify, useRefresh } from 'react-admin';
import { Checkbox } from '@material-ui/core';

const CustomVerificationToggle = ({ record }) => {
  const [update] = useUpdate();
  const notify = useNotify();
  const refresh = useRefresh();

  const handleToggle = () => {
    update(
      'artists',
      record.id,
      { ...record, verified: !record.verified },
      record,
      {
        onSuccess: () => {
          notify('Artist verification status updated', 'info');
          refresh();
        },
        onFailure: (error) => notify(`Error: ${error.message}`, 'warning'),
      }
    );
  };

  return (
    <Checkbox
      checked={record.verified}
      onChange={handleToggle}
      color="primary"
    />
  );
};

export default CustomVerificationToggle;
