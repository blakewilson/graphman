import { Metadata, ResolvingMetadata } from "next";
import Editor from "../components/editor";
import EnterURL from "../components/enter-url";
import Header from "../components/header";
import Logo from "../components/logo";

export type SearchParams = {
  url?: string;
  query?: string;
  variables?: string;
};

export async function generateMetadata(
  { params, searchParams }: { params: any; searchParams: SearchParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  let title = "Graphman - Test and share GraphQL requests.";

  if (searchParams.url) {
    title = `Graphman - ${new URL(searchParams.url).host}`;
  }

  return {
    title,
    description: "Graphman lets you test and share GraphQL requests.",
  };
}

export default async function Page({
  params,
  searchParams,
}: {
  params: {};
  searchParams: SearchParams;
}) {
  const { url, query, variables } = searchParams;

  if (!url) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-10 text-center">
            <Logo />
            <p className="mt-2 text-slate-400">
              Test and share GraphQL requests.
            </p>
          </div>
          <EnterURL />
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Editor url={url} query={query} variables={variables} />;
    </>
  );
}
