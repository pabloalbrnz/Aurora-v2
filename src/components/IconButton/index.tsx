import "./style.css";

interface IButton {
  icon: JSX.Element;
  dynamicClass: string;
  btnFunction: any;
}

export function IconButton({ dynamicClass, btnFunction, icon }: IButton) {
  return (
    <div onClick={btnFunction} className={`button ${dynamicClass}`}>
      {icon}
    </div>
  );
}
