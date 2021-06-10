import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ActiveSectionContextProps {
  activeSection: string;
  handleActiveSection: (active: string) => void;
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

  const handleActiveSection = useCallback(
    (section: string) => {
      console.log(sections.findIndex(item => item === activeSection) + 1);
      setActiveSection(section);
    },
    [activeSection]
  );

  useEffect(() => {
    handleActiveSection(activeSection);
    console.log(activeSection);
  }, [activeSection, handleActiveSection]);

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, handleActiveSection }}
    >
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
