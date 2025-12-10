
// dynamic blog post page
export default function BlogPost({ params }) {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Blog Post: {params.id}</h1>
      <p>This is a dynamic route in Next.js.</p>
    </main>
  );
}