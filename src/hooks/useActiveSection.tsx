import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ActiveSectionContextProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

interface ActiveSectionProviderProps {
  children: ReactNode;
}

const ActiveSectionContext = createContext({} as ActiveSectionContextProps);

export const ActiveSectionProvider = ({
  children,
}: ActiveSectionProviderProps): JSX.Element => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    setActiveSection(activeSection);
  }, [activeSection]);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = (): ActiveSectionContextProps => {
  const context = useContext(ActiveSectionContext);

  return context;
};
