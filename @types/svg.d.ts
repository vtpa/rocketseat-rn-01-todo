declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  interface CustomSvgProps extends SvgProps {
    primaryColor?: string;
    secondaryColor?: string;
  }
  const content: React.FC<CustomSvgProps>;
  export default content;
}
