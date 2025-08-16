import { DocsLayout } from "@/components/docs/docs-layout"
import { DocsContent } from "@/components/docs/docs-content"

interface DocsPageProps {
  params: {
    slug: string[]
  }
}

export default function DocsSlugPage({ params }: DocsPageProps) {
  const slug = params.slug?.join("/") || ""

  return (
    <DocsLayout>
      <DocsContent slug={slug} />
    </DocsLayout>
  )
}
