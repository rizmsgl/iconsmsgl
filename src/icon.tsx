import "./assets/css/fontello.css";
import Icons from "./icons";

export type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
  color?: string;
  size?: string; 
  style?: React.CSSProperties;
}

function Icon({ name, color = "#000", size = '24', style = {} }: IconProps) {
  return (
    <span
      className={Icons[name]}
      style={{
        color,
        fontSize: `${size}px`,
        ...style,
      }}
    ></span>
  );
}

export default Icon;
