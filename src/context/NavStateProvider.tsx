import { useRouter } from "next/router";
import { createContext } from "react";
import navBarOptions from "../constants/navBarOptions.json";

const NavContext = createContext<{
  nextSection: () => void;
  previousSection: () => void;
  selectSection: (value: string) => void;
}>({
  nextSection: () => {},
  previousSection: () => {},
  selectSection: (value: string) => {},
});

export const NavStateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const selected = router.query.section as string;

  const nextSection = () => {
    let newIndex = (navBarOptions.indexOf(selected) + 1) % navBarOptions.length;

    router.replace({
      query: { section: navBarOptions[newIndex] },
    });
  };

  const previousSection = () => {
    let newIndex =
      navBarOptions.indexOf(selected) - 1 < 0
        ? navBarOptions.length - 1
        : navBarOptions.indexOf(selected) - 1;

    router.replace({
      query: { section: navBarOptions[newIndex] },
    });
  };

  function selectSection(value: string) {
    let index = navBarOptions.indexOf(value);

    router.replace({
      query: { section: navBarOptions[index] },
    });
  }

  return (
    <NavContext.Provider
      value={{
        nextSection,
        previousSection,
        selectSection,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;
