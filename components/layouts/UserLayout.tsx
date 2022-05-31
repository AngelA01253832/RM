import { FC } from "react";
import Head from "next/head";
import { SideMenu } from "../ui/SideMenu";

interface Props{
    title: string,
    pageDescription: string,
    imageFullUrl?: string,
    children?: React.ReactNode
}
export const UserLayout:FC<Props> = ({children, title, pageDescription,imageFullUrl}) => {
  return (
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

        <SideMenu/>

        <main style={{
            margin:'80px auto',
            maxWidth:'1440px',
            padding: '0px 30px'
        }}>
            { children }
        </main>

        <footer> 

        </footer>
      </>
  )
}
