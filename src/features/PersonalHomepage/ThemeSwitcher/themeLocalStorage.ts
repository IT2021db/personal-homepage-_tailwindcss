const localStorageKey = "isDark";

export const saveIsDarkInLocalStorage = (isDark: boolean | string): void =>
  localStorage.setItem(localStorageKey, JSON.stringify(isDark));

export const getIsDarkFromLocalStorage = (): boolean | string => {
  const saveData = localStorage.getItem(localStorageKey);
  return saveData ? JSON.parse(saveData) : false;
};
