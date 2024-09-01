declare module "*.module.css";

declare module "*.jpg";
declare module "*.png";
declare module "*.json";

declare module "*.svg" {
  const content: string;
  export default content;
}
