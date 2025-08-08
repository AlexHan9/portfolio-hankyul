export const metadata = {
  title: "Case Study — Converse (Nike) | HanKyul Baik",
  description: "SSO, SAP integration, raffle features for high-demand drops.",
};

export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-2">Converse (Nike) — Case Study</h1>
      <p className="meta">Jan 2021 – May 2021</p>

      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <h2 className="font-semibold mb-2">Context</h2>
          <p>
            High-demand sneaker drops required reliable identity, inventory integration, and fair purchase flows.
          </p>

          <h2 className="font-semibold mt-4 mb-2">Problem</h2>
          <ul className="list-disc ml-5">
            <li>Traffic spikes during drops caused instability and unfair purchase attempts.</li>
            <li>Disconnected backend systems increased operational overhead.</li>
          </ul>

          <h2 className="font-semibold mt-4 mb-2">Role</h2>
          <p>Product Manager / Solution Architect. Worked with engineering, QA, operations, and the brand’s stakeholders.</p>

          <h2 className="font-semibold mt-4 mb-2">Actions</h2>
          <ul className="list-disc ml-5">
            <li>Designed and implemented end-to-end SSO across web properties.</li>
            <li>Integrated SAP for inventory & accounting to ensure accurate stock and settlement.</li>
            <li>Built raffle workflow (backend & frontend) using platform APIs with rate-limits and audit logging.</li>
            <li>Introduced load-shedding guidelines and API-level back-pressure for peak events.</li>
          </ul>

          <h2 className="font-semibold mt-4 mb-2">Impact</h2>
          <ul className="list-disc ml-5">
            <li>Stable releases under peak demand; reduced operational incidents during drops.</li>
            <li>Improved fairness and compliance; lower manual review load.</li>
          </ul>
        </div>

        <aside>
          <img src="/projects/converse.png" alt="Converse" className="rounded-xl w-full mb-3" />
          <a className="uline" href="https://www.converse.co.kr/" target="_blank" rel="noreferrer">Live site →</a>
          <div className="mt-3">
            <div className="pill">SSO</div>
            <div className="pill">SAP</div>
            <div className="pill">APIs</div>
            <div className="pill">High traffic</div>
          </div>
        </aside>
      </div>
    </>
  );
}
