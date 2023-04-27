import { Dictionary } from './dictionaryWords';

export const decodeDictionary = (resultCode: string): string => {
  const messageOfDictionary =
    Dictionary[resultCode as unknown as keyof typeof Dictionary];

  return messageOfDictionary
    ? messageOfDictionary
    : `Error desconocido ${resultCode}`;
};
