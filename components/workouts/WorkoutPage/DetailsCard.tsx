import { FC } from "react";
import { Stack, Typography } from "@mui/material";

interface Props {
    text:string
    icon: any
}
export const DetailsCard: FC<Props>= ({text,icon}) => {
  return (
    <Stack direction="row" alignItems="center" gap={1} sx={{
        color:'black'
    }}>
        {icon}
        <Typography variant="subtitle1">{text}</Typography>
    </Stack>
  )
}
