import jwt from "jsonwebtoken";
import env from "../validateEnv";

export const generateAuthToken = (tokenId: number): string => {
  const jwtPayLoad = { tokenId };

  return jwt.sign(jwtPayLoad, process.env.JWT_SECRET!, {
    algorithm: "HS256",
    noTimestamp: true,
  });
};
