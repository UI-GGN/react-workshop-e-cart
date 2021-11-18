import { useState } from 'react';

export const useStatus = (initialStatus) => {
  const [state, setStatus] = useState(initialStatus);

  const Status = (props) => props[state];

  return { setStatus, Status };
};

export default useStatus;
