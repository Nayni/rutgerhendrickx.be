import React from "react";

import { globalHistory } from "@reach/router";

export const useHistory = () => {
  const [history, setHistory] = React.useState({
    location: globalHistory.location,
    navigate: globalHistory.navigate
  });

  React.useEffect(() => {
    const removeListener = globalHistory.listen(params => {
      setHistory({
        ...history,
        location: params.location
      });
    });

    return () => {
      removeListener();
    };
  });

  return history;
};
