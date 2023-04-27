export const useDelayText = (
  onDelayComplete: (text: string) => void,
  delayms: number
) => {
  let timeout: NodeJS.Timeout;

  const delay = (text: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => onDelayComplete(text), delayms);
  };

  return {
    delay
  };
};
