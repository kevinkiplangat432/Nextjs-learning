// this is the home page of the Next.js app
import TestClient from "./test-client";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Home page</h1>
      <p>This is rendered on the server by default.</p>
     

      <TestClient />
    </main>
  );
}
