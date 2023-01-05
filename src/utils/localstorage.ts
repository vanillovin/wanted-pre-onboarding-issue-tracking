export default class LocalStorage {
  static getItem<T>(key: string, onError?: () => void): T | undefined {
    try {
      const value = localStorage.getItem(key);
      return value && JSON.parse(value);
    } catch (error) {
      console.error(error);
      onError && onError();
    }
  }
  
  static setItem(key: string, value: any) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      throw Error("Error, JSON stringify");
    }
  }

  static removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
