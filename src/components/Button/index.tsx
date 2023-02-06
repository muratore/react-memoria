import * as style from "./styles";

type Props = {
  label: string,
  icon?: any,
  onClick: React.MouseEventHandler<HTMLDivElement>
};

export const Button = ({ label, icon, onClick }: Props) => {
  return (
    <style.container onClick={onClick}>

        {icon &&
        
      <style.IconArea>
        <style.Icon src={icon} />
      </style.IconArea>
        }
    
      <style.Label>{label}</style.Label>
    </style.container>
  );
};
