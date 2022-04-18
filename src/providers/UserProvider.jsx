import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  // ProviderにValueとして渡した値がUserContextタグで囲った中で使えるようになる
  const [userInfo, setUserInfo] = useState(null);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

// <UserContext.Provider value={ object }>{Consumer}</UserContext.Provider>
// {contextName : contextName}
// {contextName:"たき"}
// GlobalなStateを提供できる
