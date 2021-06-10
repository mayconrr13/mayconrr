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

const sections = ['home', 'about', 'techs', 'projects', 'contact'];

const ActiveSectionContext = createContext({} as ActiveSectionContextProps);

export const ActiveSectionProvider = ({
  children,
}: ActiveSectionProviderProps): JSX.Element => {
  const [activeSection, setActiveSection] = useState<string>('home');
  console.log(activeSection);

  useEffect(() => {
    setActiveSection(activeSection);
  }, [activeSection]);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);

  return context;
};
