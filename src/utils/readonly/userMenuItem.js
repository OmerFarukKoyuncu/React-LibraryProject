import { jsonStringify } from "../jsonConverter/jsonConverter";
import { setSession } from "../storage/session";

export const userMenu = (
  isAdmin,
  isvertical,
  setVertical,
  setAnchor,
  logOut
) => [
  {
    sx: { display: isAdmin ? "block" : "none" },
    text: isvertical ? "User" : "Admin",
    click: () => {
      verticalWriteSession(!isvertical);
      setVertical(!isvertical);
      setAnchor(null);
    },
  },
  {
    sx: { display: "block" },
    text: "Logout",
    click: () => {
      setVertical(false);
      setAnchor(null);
      logOut();
    },
  },
];

const verticalWriteSession = (isvertical) => {
  const jsonVertical = jsonStringify(isvertical);
  setSession("isVertical", jsonVertical);
};
