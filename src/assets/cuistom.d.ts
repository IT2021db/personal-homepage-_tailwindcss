declare module "*.svg" {
  const content: string;
  export default content;
}
declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  import * as React from "react";

  // Deklaracja typu dla importów SVG z ReactComponent
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  // Deklaracja typu dla zwykłych importów SVG
  const src: string;

  export { ReactComponent, src };
}
