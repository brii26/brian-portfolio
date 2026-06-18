export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="min-h-dvh flex items-center justify-center">
      {/* detail content coming soon for {slug} */}
      <p className="text-sm text-muted-foreground">{slug}</p>
    </main>
  );
}
