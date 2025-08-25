export default function Home() {
  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = Object.fromEntries(form.entries());
    body.latitude = parseFloat(body.latitude || "");
    body.longitude = parseFloat(body.longitude || "");

    const res = await fetch("http://localhost:5000/actions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    const json = await res.json();
    alert(JSON.stringify(json, null, 2));
  }

  return (
    <main style={{ maxWidth: 720, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>🌱 GreenLedger</h1>
      <p>Submit a verified environmental action to Hedera Testnet.</p>

      <form onSubmit={handleSubmit} style={{display:"grid", gap:12}}>
        <label>
          Type (e.g., TREE_PLANTED, WASTE_RECYCLED)
          <input name="type" required placeholder="TREE_PLANTED" />
        </label>
        <label>
          Latitude
          <input name="latitude" type="number" step="any" placeholder="9.05785" />
        </label>
        <label>
          Longitude
          <input name="longitude" type="number" step="any" placeholder="7.49508" />
        </label>
        <label>
          Photo/IPFS Hash (optional)
          <input name="photoHash" placeholder="Qm..." />
        </label>
        <label>
          Metadata (optional JSON)
          <input name="metadata" placeholder='{"species":"Neem","count":10}' />
        </label>
        <button type="submit">Submit Action</button>
      </form>

      <p style={{marginTop:24}}>Backend must be running on <code>http://localhost:5000</code>.</p>
    </main>
  );
}
