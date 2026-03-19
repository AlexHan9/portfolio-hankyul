import ContactForm from "../components/ContactForm";
import ProjectsGrid from "../components/ProjectsGrid";
export default function Page() {
  return (
    <main>
      <section className="py-8">
  <h1 className="text-3xl font-semibold mb-2">
    IT Product and Project Manager
  </h1>
  <p className="text-gray-600">
    Data-driven IT Product and Project Manager with 10+ years of experience leading cross-functional execution across SaaS, e-commerce, and enterprise operations. Uniquely equipped with hands-on full stack development capabilities and a strong background in ERP, SCM, and CRM system integrations. Proven track record of architecting massive API ecosystems (300+ APIs), optimizing end-to-end user journeys, and leveraging data analytics to drive operational efficiency. Currently an MBA candidate combining technical grit with high-level business strategy to deliver scalable, user-centric solutions.
  </p>
  <div className="mt-3 flex flex-wrap gap-2 text-sm">
    <span className="pill">End-to-end SDLC</span>
    <span className="pill">API Ecosystem Design</span>
    <span className="pill">ERP/SCM/CRM Integrations</span>
    <span className="pill">Cross-border Logistics</span>
  </div>
</section>

      <section id="experience" className="grid md:grid-cols-2 gap-4">
        <div className="card">
          <h3 className="text-lg font-semibold">Ecoverse Solutions — Project Manager</h3>
          <div className="meta">Jan 2026 – Mar 2026 · City of Industry, CA</div>
          <ul className="list-disc ml-5 mt-2">
            <li>Optimized Logistics Operations: Led cross-functional initiatives to streamline end-to-end yard operations, establishing API-first architectures and defining system requirements for future enterprise ERP integrations.</li>
            <li>Process Digitization: Identified severe operational bottlenecks and successfully introduced a digital queuing system ("Smart Truck Check-in"), entirely eliminating legacy paper-based check-ins and boosting data accuracy.</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">Addpulse — Project Manager & IT Consultant</h3>
          <div className="meta">Sep 2023 – Dec 2025 · Los Angeles, CA</div>
          <ul className="list-disc ml-5 mt-2">
            <li>Strategic Roadmap Delivery: Spearheaded discovery workshops and executed omnichannel platform projects, translating complex business goals into technical PRDs and ROI-focused delivery roadmaps.</li>
            <li>Omnichannel Integration: Architected the alignment of online e-commerce checkout systems with offline POS and SAP, leveraging GA4 to track user behavior and enable data-driven feature optimization.</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">Cafe24 Corp — IT Product Manager / Systems Architect</h3>
          <div className="meta">May 2017 – Mar 2023 · Seoul, South Korea</div>
          <ul className="list-disc ml-5 mt-2">
            <li>API Ecosystem Expansion: Owned the product lifecycle for a massive open-API ecosystem, authoring 300+ APIs that empowered global enterprise clients (e.g., Nike, CJ, E-Land) to successfully scale their digital presence.</li>
            <li>Enterprise System Integration: Directed the comprehensive integration of ERP, SCM, and CRM systems following the acquisition of Pimz and the EcountERP partnership, unifying complex enterprise data structures.</li>
            <li>Proactive Risk Management: Architected a technical "Watchtower" using SQL and real-time dashboards to monitor system latency and error classes, successfully reducing incident frequency by 60% during peak traffic.</li>
            <li>Developer Ecosystem Growth: Created and maintained extensive technical documentation in Confluence, including tri-lingual API user guides (EN/KR/JP), fostering a highly collaborative and efficient developer ecosystem.</li>
          </ul>
        </div>
        <div className="card">
  <h3 className="text-lg font-semibold">WEMAKEPRICE — Project Manager (Global E-commerce & Logistics)</h3>
  <div className="meta">Sep 2014 – May 2017 · Seoul, South Korea</div>
  <ul className="list-disc ml-5 mt-2">
    <li>Global Logistics Setup: Acted as a founding member for US and Japan warehouse operations, overseeing logistics price negotiations and directing the initial setup of SCM/ERP workflows.</li>
    <li>Workflow Automation: Managed end-to-end cross-border cargo operations, utilizing root-cause analysis to resolve delivery exceptions, automate workflows, and increase overall logistics efficiency by 25%.</li>
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
      "Product & Project Management", "End-to-end SDLC", "PRD & User Stories", "Agile/Scrum", "Stakeholder Management", "A/B Testing", "API Ecosystem Design",
      "SQL", "Python", "GA4", "System Monitoring", "MERN Stack", "JavaScript", "React", "Node.js", "Tableau",
      "ERP", "SAP", "WMS", "POS", "CRM Integrations", "RESTful APIs", "Cross-functional Coordination", "Risk Mitigation",
      "Cross-border Logistics", "Business Process Reengineering (BPR)", "Inventory Forecasting", "Root-cause Analysis"
    ]
      // 대소문자 무시 중복 제거
      .filter((v, i, arr) => arr.findIndex(x => x.toLowerCase() === v.toLowerCase()) === i)
      .map(s => <span key={s} className="pill">{s}</span>)
    }
  </div>
</section>

      <section id="contact" className="card mt-4">
        <h3 className="text-lg font-semibold">Contact</h3>
        <p>Email: <a className="uline" href="mailto:hankyulbaik@gmail.com">hankyulbaik@gmail.com</a> · Phone: (828) 205-6624 · LinkedIn: <a className="uline" href="https://www.linkedin.com/in/hankyul-baik/" target="_blank" rel="noreferrer">hankyul-baik</a> · GitHub: <a className="uline" href="https://github.com/AlexHan9" target="_blank" rel="noreferrer">AlexHan9</a></p>
        <ContactForm />
      </section>

    </main>
  );
}
