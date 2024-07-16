import { useLayout } from "../../core/LayoutProvider";
import { Toolbar1 } from "./Toolbar1";
import { HorizontalMenuPorps } from "../../../helpers";

export const Toolbar: React.FC<HorizontalMenuPorps> = ({
  menuTitle,
  horizontalMenuItems,
}) => {
  const { config } = useLayout();
  switch (config.toolbar.layout) {
    case "toolbar1":
      return (
        <Toolbar1
          menuTitle={menuTitle}
          horizontalMenuItems={horizontalMenuItems}
        />
      );

    default:
      return (
        <Toolbar1
          menuTitle={menuTitle}
          horizontalMenuItems={horizontalMenuItems}
        />
      );
  }
};

export default { Toolbar };
