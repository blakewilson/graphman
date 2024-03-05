import Editor from "../components/editor";
import Header from "../components/header";

export type SearchParams = {
  url?: string;
  query?: string;
  variables?: string;
};

export default async function Page({
  params,
  searchParams,
}: {
  params: {};
  searchParams: SearchParams;
}) {
  const { url, query, variables } = searchParams;

  if (!url) {
    return <>No url</>;
  }

  return (
    <>
      <Header />
      <Editor url={url} query={query} variables={variables} />;
    </>
  );
}
