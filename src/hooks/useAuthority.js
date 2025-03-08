import { useMemo } from "react";

const useAuthority = (userAuthority, authority) => {
  const roleMatched = useMemo(() => {
    return authority.some((role) => userAuthority?.includes(role));
  }, [userAuthority, authority]);
  return roleMatched;
};

export default useAuthority;
