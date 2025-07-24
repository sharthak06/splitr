import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ConvexClientProvider } from "@/components/convex-client-provider";

import { Providers } from "@/Provider";


const inter = Inter({subsets: ['latin']});



export const metadata = {
  title: "Splitr",
  description: "The Smartest Way to Split Expenses With Friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo.png" sizes="any" />
      </head>
      
      <body
        className={`${inter.className}`}
      >
        
        <Providers>

        
     
        <ConvexClientProvider>
          <Header/>
        <main className="min-h-screen">
          {children}


        </main>

        </ConvexClientProvider>
        </Providers>
           
        
      </body>
    </html>
  );
}
