import { useState,useMemo } from 'react';

export const useStatus = (initialStatus) => {
  const [state, setStatus] = useState(initialStatus);

  const Status = (props) => props[state];

  return useMemo(()=>({ setStatus, Status }),[state]);
};

export default useStatus;
