// this function generate a random 8 digits number as the email token
export const generateEmailToken = (): string => {
  return Math.floor(1000 * Math.random() * 900).toString();
};
