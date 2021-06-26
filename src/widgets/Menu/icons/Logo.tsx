import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 205 26" {...props}>
<<<<<<< HEAD
      <image
        width="205"
        height="26"
        href={isDark ? "/images/egg/LogoTextNewDark.png" : "/images/egg/LogoTextNewWhite.png"}
      />
    </Svg>
  );
=======
      <image width="205" height="26" href={isDark ? '/images/egg/LogoTextNewDark.png' : '/images/egg/LogoTextNewWhite.png'}/>
    </Svg>
  )
>>>>>>> refs/remotes/origin/master
};

export default Logo;
