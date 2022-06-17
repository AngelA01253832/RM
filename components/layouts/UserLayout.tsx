import { FC, useEffect } from "react";
import Head from "next/head";
import { SideMenu } from "../ui/SideMenu";
import {useSession,signIn,signOut, getSession} from "next-auth/react";
import { Box } from "@mui/material";

interface Props{
    title: string,
    pageDescription: string,
    imageFullUrl?: string,
    children?: React.ReactNode,
}
const onClick = () => {
    signOut();
}
export const UserLayout:FC<Props> = ({children, title, pageDescription,imageFullUrl}) => {
  
  const {data:session, status } = useSession();

  if (status === 'loading') return <div>Loading...</div>

  if(!session){
    signIn('auth0');
  } else {
    return(
        <>
        <Head>
            <title>{ title }</title>
            <meta name="og:title" content={title} />
            <meta name="og:description" content={pageDescription} />
            {
                imageFullUrl && (
                    <meta name="og:description" content={imageFullUrl} />
                )
            }
        </Head>
    
        <SideMenu onClick={onClick} userName={"Angel Bonilla"} profileImg={"JKABF"} userRole={"Entrenador"}/>
    
    <Box sx={{
        marginLeft: {
            xs: 0,
            sm: 0,
            md:'34vh',
            lg:'34vh',
            xl:'34vh'
        },
        
        }}>
        <main>
            { children }
        </main>
    </Box>
      </>
    );
  }
  return null; 

  }
// return(
//     <>
//     <Head>
//         <title>{ title }</title>
//         <meta name="og:title" content={title} />
//         <meta name="og:description" content={pageDescription} />
//         {
//             imageFullUrl && (
//                 <meta name="og:description" content={imageFullUrl} />
//             )
//         }
//     </Head>

//     <SideMenu/>

//     <main>
//         { children }
//     </main>
//   </>
// );

