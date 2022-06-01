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

        <main>
            { children }
        </main>

        <footer> 

        </footer>
      </>
  )
}
