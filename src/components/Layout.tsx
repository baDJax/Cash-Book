"use client";
import { client } from "@/graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";
import Lenis from "lenis";
import React, { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <ApolloProvider client={client}>
      <main>{children}</main>
    </ApolloProvider>
  );
};

export default Layout;
