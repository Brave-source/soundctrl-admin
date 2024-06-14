import React from 'react';
import { useUpdate, useNotify, useRefresh } from 'react-admin';
import Switch from '@material-ui/core/Switch';

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
    <Switch
      checked={record.verified}
      onChange={handleToggle}
      color="primary"
    />
  );
};

export default CustomVerificationToggle;
