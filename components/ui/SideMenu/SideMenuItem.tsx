import { FC } from "react";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

interface Props {
    text:string
    icon: any
}
export const SideMenuItem: FC<Props>= ({text,icon}) => {
  return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
  )
}
