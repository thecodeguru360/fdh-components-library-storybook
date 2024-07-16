import { MenuItem } from "./MenuItem";
import { MenuInnerWithSub } from "./MenuInnerWithSub";
import { MegaMenu } from "./MegaMenu";
import { useIntl } from "react-intl";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { reInitMenu } from "../../../helpers/react18MigrationHelpers";

export type HorizontalMenuItem = {
  title: string;
  url: string;
  menuIcon?: IconProp;
  infoText?: string;
  subMenu?: HorizontalMenuItem[] | undefined;
};

export interface AppHorizonalMenuProps {
  horizontalMenuItems?: HorizontalMenuItem[];
}

//This is a 3 level Main menu component. If more levels needed then this component needs to be modified to accomodate it. Example below
// Main Title
//    Sub Title
//      Sub Title 2
//        Sub Title 3
export const MenuInner: React.FC<AppHorizonalMenuProps> = ({
  horizontalMenuItems,
}) => {
  const intl = useIntl();
  reInitMenu();
  return (
    <>
      {horizontalMenuItems &&
        horizontalMenuItems?.map((item, mainIndex) =>
          item.subMenu ? (
            <MenuInnerWithSub
              key={`m${mainIndex}`}
              title={item.title}
              to={item.url}
              menuPlacement="bottom-start"
              menuTrigger="click"
              hasArrow={true}
              faproIcon={item.menuIcon}
              infoText={item.infoText}
            >
              {item.subMenu &&
                item.subMenu?.map((subItem, subIndex1) =>
                  subItem.subMenu ? (
                    <MenuInnerWithSub
                      key={`m${mainIndex}-${subIndex1}`}
                      title={subItem.title}
                      to={subItem.url}
                      menuPlacement="right-start"
                      menuTrigger={`{default:'click', lg: 'hover'}`}
                      hasArrow={true}
                      faproIcon={subItem.menuIcon}
                      infoText={subItem.infoText}
                    >
                      {subItem.subMenu &&
                        subItem.subMenu?.map((subItem2, subIndex2) =>
                          subItem2.subMenu ? (
                            <MenuInnerWithSub
                              key={`m${mainIndex}-${subIndex1}-${subIndex2}`}
                              title={subItem2.title}
                              to={subItem2.url}
                              menuPlacement="right-start"
                              menuTrigger={`{default:'click', lg: 'hover'}`}
                              hasArrow={true}
                              faproIcon={subItem2.menuIcon}
                            >
                              {subItem2.subMenu &&
                                subItem2.subMenu?.map((subItem3, subIndex3) => (
                                  <MenuItem
                                    key={`m${mainIndex}-${subIndex1}-${subIndex2}-${subIndex3}`}
                                    title={subItem3.title}
                                    to={subItem3.url}
                                    faproIcon={subItem3.menuIcon}
                                  />
                                ))}
                            </MenuInnerWithSub>
                          ) : (
                            <MenuItem
                              key={`m${mainIndex}-${subIndex1}-${subIndex2}`}
                              title={subItem2.title}
                              to={subItem2.url}
                              faproIcon={subItem2.menuIcon}
                            />
                          )
                        )}
                    </MenuInnerWithSub>
                  ) : (
                    <MenuItem
                      key={`m${mainIndex}-${subIndex1}`}
                      title={subItem.title}
                      to={subItem.url}
                      faproIcon={subItem.menuIcon}
                      infoText={subItem.infoText}
                    />
                  )
                )}
            </MenuInnerWithSub>
          ) : (
            <MenuItem
              key={`m${mainIndex}`}
              title={item.title}
              to={item.url}
              faproIcon={item.menuIcon}
            />
          )
        )}
    </>
  );
};
