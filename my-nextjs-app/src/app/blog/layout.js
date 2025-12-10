export default function BlogLayout({ children }) {
  return (
    <section style={{ border: "2px solid #888", padding: "20px" }}>
      <h2>Blog Section</h2>
      {children}
    </section>
  );
}

