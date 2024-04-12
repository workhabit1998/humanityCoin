import { useSelector } from 'react-redux';
import { Web3ModalProvider } from './Components/Layout/AppLayout/providerWalletConnect';

export default function Web3ModalWrapper({ children }) {
  const { isOnline } = useSelector((state) => state.app);
  return (
    <>
      {isOnline ? (
        <Web3ModalProvider>{children}</Web3ModalProvider>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
