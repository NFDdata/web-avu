import { createContext, useContext, useEffect, useState } from 'react';
import { decodeDictionary } from 'helpers/dictionary/dictionary.helper';
import { signOut } from 'next-auth/react';

import { ActiveAlertTypeEnum, initialAlertMessage } from './constants';
import { ActiveAlertMessageType } from './types';

export const ActiveAlertMessageContext =
  createContext<ActiveAlertMessageType>(initialAlertMessage);

export const ActiveAlertMessageProvider = ({
  children
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(initialAlertMessage.isOpen);
  const [resultCode, setResultCode] = useState(initialAlertMessage.message);
  const [type, setType] = useState(initialAlertMessage.type);

  const onLogOut = async () => {
    await signOut({
      callbackUrl: process.env.NEXTAUTH_URL,
      redirect: true
    });
  };

  const defaultStates = () => {
    setIsOpen(false);
    setResultCode('');
    setType(ActiveAlertTypeEnum.SUCCESS);
  };

  const closeAlertTimer = () => {
    setTimeout(defaultStates, 5000);
  };

  useEffect(() => {
    if (
      resultCode === 'Foridden access' ||
      resultCode === 'auth.token_no_valid'
    )
      onLogOut();
  }, [resultCode]);

  const setValues = (message: string, type: ActiveAlertTypeEnum) => {
    closeAlertTimer();
    setResultCode(message);
    setIsOpen(true);
    setType(type);
  };

  const onClose = () => setIsOpen(false);

  return (
    <ActiveAlertMessageContext.Provider
      value={{
        isOpen,
        message: decodeDictionary(resultCode),
        type,
        setValues,
        onClose
      }}>
      {children}
    </ActiveAlertMessageContext.Provider>
  );
};

export const useActiveAlertMessage = () => {
  const context = useContext(ActiveAlertMessageContext);

  if (context === undefined)
    throw new Error('useContextSession must be used within a SessionProvider');

  return context;
};
