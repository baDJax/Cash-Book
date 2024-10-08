import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import { client } from "@/graphql/apolloClient";
import { GetPageDataBySlug } from "@/query/getPageData";

const fetchPageData = async () => {
  const { data } = await client.query({
    query: GetPageDataBySlug,
    variables: {
      slug: "landing-page",
    },
  });
  return data.pages.data[0].attributes;
};

export async function generateMetadata() {
  const slugData = await fetchPageData();
  const seo = slugData.seo;
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    openGraph: {
      type: "website",
      title: seo.metaTitle,
      description: seo.metaDescription,
      image: seo.metaImage?.url,
    },
    robots: {
      follow: !seo.NoFollow,
      index: !seo.NoIndex,
    },
    alternates: {
      canonical: seo.canonicalURL,
    },
    viewport: seo.metaViewport,
    structuredData: seo.structuredData,
  };
}

export default async function Home() {
  const slugData = await fetchPageData();
  console.log("data", slugData);
  return (
    <section className="">
      <Sidebar />
      <Dashboard />
    </section>
  );
}
