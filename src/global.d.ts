declare module "*.less" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.html" {
  const content: string;
  export default content;
}
