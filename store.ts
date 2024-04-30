import createStore, { State } from "zustand";

interface IState extends State {
  isBurgerMenuOpen: boolean;
  isSearchBoxOpen: boolean;
  isPageLoading: boolean;
  setPageLoading: (isLoading: boolean) => void;
  setBurgerMenuOpen: (isOpen: boolean) => void;
  setSearchBoxOpen: (isOpen: boolean) => void;
}

const useStore = createStore<IState>(set => ({
  isBurgerMenuOpen: false,
  isSearchBoxOpen: false,
  isPageLoading: false,
  setPageLoading: isLoading => set(() => ({ isPageLoading: isLoading })),
  setBurgerMenuOpen: isOpen => set(() => ({ isBurgerMenuOpen: isOpen })),
  setSearchBoxOpen: isOpen => set(() => ({ isSearchBoxOpen: isOpen }))
}));

export default useStore;
