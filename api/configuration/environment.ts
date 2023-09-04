import dotenv from "dotenv";

export const configureEnvironment = () => {
  const { NODE_ENV } = process.env;
  const path = NODE_ENV ? `.env.${NODE_ENV}` : ".env";
  dotenv.config({ path });
};
