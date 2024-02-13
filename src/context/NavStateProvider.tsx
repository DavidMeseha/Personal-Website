import { useRouter } from "next/router";
import { createContext } from "react";
import navBarOptions, { NavOptions } from "../constants/navBarOptions";

interface NavProps {
  nextSection: () => void;
  previousSection: () => void;
  selectSection: (value: NavOptions) => void;
}

const NavContext = createContext<NavProps>({
  nextSection: () => {},
  previousSection: () => {},
  selectSection: () => {},
});

export const NavStateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const selected: NavOptions =
    typeof router.query["section"] == "string"
      ? router.query["section"]
      : "intro";

  const nextSection = () => {
    const newIndex =
      (navBarOptions.indexOf(selected) + 1) % navBarOptions.length;

    router.replace({
      query: { section: navBarOptions[newIndex] },
    });
  };

  const previousSection = () => {
    const newIndex =
      navBarOptions.indexOf(selected) - 1 < 0
        ? navBarOptions.length - 1
        : navBarOptions.indexOf(selected) - 1;

    router.replace({
      query: { section: navBarOptions[newIndex] },
    });
  };

  function selectSection(value: NavOptions) {
    const newIndex = navBarOptions.indexOf(value);

    router.replace({
      query: { section: navBarOptions[newIndex] },
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
