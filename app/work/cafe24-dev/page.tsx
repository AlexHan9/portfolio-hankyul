export const metadata = {
  title: "Case Study — Cafe24 Developer Center | HanKyul Baik",
  description: "Open-API ecosystem: 300+ APIs, multilingual docs, reliability operations.",
};

export default function Page() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-2">Cafe24 Developer Center — Case Study</h1>
      <p className="meta">May 2017 – Mar 2023</p>

      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <h2 className="font-semibold mb-2">Context</h2>
          <p>
            Cafe24’s shift to an open-API ecosystem required a scalable platform for third-party developers and partners.
          </p>

          <h2 className="font-semibold mt-4 mb-2">Problem</h2>
          <ul className="list-disc ml-5">
            <li>Customizations were expensive and slow to deliver.</li>
            <li>API reliability issues under sustained load risked platform stability.</li>
          </ul>

          <h2 className="font-semibold mt-4 mb-2">Role</h2>
          <p>Product Manager / Control-tower lead for API lifecycle, docs, and ecosystem programs.</p>

          <h2 className="font-semibold mt-4 mb-2">Actions</h2>
          <ul className="list-disc ml-5">
            <li>Shipped 300+ APIs across commerce domains with versioning and changelog discipline.</li>
            <li>Established weekly control-center reviews; drove latency to the millisecond range.</li>
            <li>Launched app-store model with partner enablement and QA processes.</li>
            <li>Delivered multilingual documentation (EN/JP/KR) with concrete use-cases.</li>
          </ul>

          <h2 className="font-semibold mt-4 mb-2">Impact</h2>
          <ul className="list-disc ml-5">
            <li>~90% reduction in customization costs; ~10% market-share growth.</li>
            <li>API stability improvements prevented outages for 2M+ stores during a critical CPU spike (90% → &lt;60%).</li>
          </ul>
        </div>

        <aside>
          <img src="/projects/cafe24-dev.png" alt="Cafe24 Developer Center" className="rounded-xl w-full mb-3" />
          <a className="uline" href="https://developers.cafe24.com/" target="_blank" rel="noreferrer">Developer Center →</a>
          <div className="mt-3">
            <div className="pill">APIs</div>
            <div className="pill">Platform</div>
            <div className="pill">Ecosystem</div>
            <div className="pill">Docs</div>
          </div>
        </aside>
      </div>
    </>
  );
}
