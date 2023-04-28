import { notFound } from "next/navigation";
// import { allProjects } from "contentlayer/generated";
// import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";

export async function generateStaticParams() {
  return [];
}

export default async function PostPage({ params }) {
  const slug = params?.slug;
  const project = slug;

  if (!project) {
    notFound();
  }

  const views =
    (await redis.get) < number > ["pageviews", "projects", slug].join(":") ?? 0;

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} views={views} />
      <ReportView slug={project.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={project.body.code} />
      </article>
    </div>
  );
}
