import ContactForm from "../components/ContactForm";
import ProjectsGrid from "../components/ProjectsGrid";
export default function Page() {
  return (
    <main>
      <section className="py-8">
  <h1 className="text-3xl font-semibold mb-2">
    Experiment-driven Product & Growth for E-commerce / DTC.
  </h1>
  <p className="text-gray-600">
    I connect promotions, checkout, and landing-page improvements to measurable outcomes.
    Strong analytics (GA4, Excel) and cross-functional execution across Design,
    Engineering, Marketing, and Finance.
  </p>
  <div className="mt-3 flex flex-wrap gap-2 text-sm">
    <span className="pill">Customization cost −90%+</span>
    <span className="pill">API incidents −~60%</span>
    <span className="pill">Kmall24 revenue +473%</span>
  </div>
</section>

      <section id="experience" className="grid md:grid-cols-2 gap-4">
        <div className="card">
          <h3 className="text-lg font-semibold">E-commerce & Platform Consultant (Independent)</h3>
          <div className="meta">Sep 2023 – Present · Los Angeles, CA</div>
          <ul className="list-disc ml-5 mt-2">
            <li>Advised major retail brands on end-to-end digital transformation on Cafe24.</li>
            <li>Architected omnichannel: BOPIS, ship-from-store, unified loyalty.</li>
            <li>Defined API requirements and sourced 3rd-party development partners.</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">Cafe24 Corp — Product Manager</h3>
          <div className="meta">May 2021 – Mar 2023</div>
          <ul className="list-disc ml-5 mt-2">
            <li>Launched open-API app store; 90% cost reduction for customization.</li>
            <li>Built an internal API monitoring “watchtower”; reduced incident frequency by ~60%.</li>
            <li>Co-led global YouTube Shopping expansion (visibility↑; stock +11.78%).</li>
            <li>Resolved critical API CPU spike (90% → &lt;60%) to protect 2M+ stores.</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">Cafe24 Corp — Project Manager</h3>
          <div className="meta">Jul 2019 – May 2021</div>
          <ul className="list-disc ml-5 mt-2">
            <li>Consulted Nike & YG Entertainment; enabled high-transaction launches.</li>
            <li>Contributed to YG store performance (35% of $430M revenue).</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">Cafe24 Corp — Product Owner</h3>
          <div className="meta">May 2017 – Jul 2019</div>
          <ul className="list-disc ml-5 mt-2">
            <li>Developed 300+ APIs; managed changelog and reliability.</li>
            <li>Reduced API response to milliseconds via weekly control-center reviews.</li>
          </ul>
        </div>
        <div className="card">
  <h3 className="text-lg font-semibold">WEMAKEPRICE — Project Manager</h3>
  <div className="meta">Dec 2015 – May 2017</div>
  <ul className="list-disc ml-5 mt-2">
    <li>Refocused Kmall24 on the U.S. market and integrated Amazon & eBay, achieving ~473% YoY revenue growth within a year.</li>
    <li>Co-developed cross-border shipping insurance and a co-branded credit card with Shinhan Card and Mastercard, improving value for international shoppers.</li>
  </ul>
</div>
      </section>

<section id="projects" className="mt-6">
  <div className="mb-3">
    <h2 className="text-xl font-semibold">Selected Projects</h2>
    <p className="text-gray-600 text-sm">
      Representative work across platform, APIs, and commerce.
    </p>
  </div>
  <ProjectsGrid />
</section>

      
      <section id="skills" className="card mt-4">
  <h3 className="text-lg font-semibold">Skills</h3>
  <div className="mt-2">
    {[
      // 기존
      "Product Management", "API Architecture", "E-commerce Strategy", "SDLC",
      "Data Analysis", "Confluence/Jira", "GA (Certified)",
      // 추가
      "A/B testing", "Landing-page optimization", "Promotions & discounts",
      "Checkout & payments UX", "API integrations", "Analytics instrumentation",
      "GA4", "Excel (VLOOKUP, Pivots)", "UTM tracking", "Budget pacing & reporting",
    ]
      // 대소문자 무시 중복 제거
      .filter((v, i, arr) => arr.findIndex(x => x.toLowerCase() === v.toLowerCase()) === i)
      .map(s => <span key={s} className="pill">{s}</span>)
    }
  </div>
</section>

      <section id="contact" className="card mt-4">
        <h3 className="text-lg font-semibold">Contact</h3>
        <p>Email: <a className="uline" href="mailto:hankyulbaik@gmail.com">hankyulbaik@gmail.com</a> · LinkedIn: <a className="uline" href="https://www.linkedin.com/in/hankyul-baik/" target="_blank" rel="noreferrer">hankyul-baik</a></p>
        <ContactForm />
      </section>

    </main>
  );
}
