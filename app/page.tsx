import ContactForm from "../components/ContactForm";
import ProjectsGrid from "../components/ProjectsGrid";
export default function Page() {
  return (
    <main>
      <section className="py-8">
  <h1 className="text-3xl font-semibold mb-2">
    Global IT Project Manager (IT Systems & Operations)
  </h1>
  <p className="text-gray-600">
    Results-driven Global IT Project Manager with 10+ years of experience leading complex, large-scale technology projects and programs across SaaS, e-commerce, and enterprise operations. Expert in utilizing appropriate project management methodologies (Agile, Scrum, Waterfall) and adhering to strict PMO guidelines to ensure projects are delivered on time, within budget, and per stakeholder requirements. Proven ability to synthesize complex technical concepts, negotiate vendor Statements of Work (SOW), and effectively present ideas to C-level executives. Highly proficient in enterprise PM tools including Jira, Smartsheet, and MS Project Pro, dedicated to establishing cross-functional collaboration and delivering strategic business objectives.
  </p>
  <div className="mt-3 flex flex-wrap gap-2 text-sm">
    <span className="pill">Agile & Scrum</span>
    <span className="pill">PMI Framework</span>
    <span className="pill">SOW Negotiation</span>
    <span className="pill">ERP/SCM/CRM Integrations</span>
  </div>
</section>

      <section id="experience" className="grid md:grid-cols-2 gap-4">
        <div className="card">
          <h3 className="text-lg font-semibold">Ecoverse Solutions — IT Project Manager</h3>
          <div className="meta">Jan 2026 – Present · City of Industry, CA</div>
          <ul className="list-disc ml-5 mt-2">
            <li>Lead and manage complex IT projects by strictly adhering to PMO guidelines for the full lifecycle—Initiating, Planning, Executing, Monitoring & Controlling, and Closing—to successfully deliver a custom digital queuing system.</li>
            <li>Prepare weekly project status reports and manage approved budgets, providing accurate financial forecasting and presenting real-time actionable insights to C-level executives.</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">Independent IT Systems Consultant</h3>
          <div className="meta">Sep 2023 – Dec 2025 · Los Angeles, CA</div>
          <ul className="list-disc ml-5 mt-2">
            <li>Negotiated, assessed, and managed vendor Statements of Work (SOW) and performance, working closely with cross-functional teams to gather requirements and define project scope for omnichannel platforms.</li>
            <li>Synthesized complex data engineering concepts to ensure seamless ERP/SAP integrations, effectively utilizing Agile methodologies to tie technical deliverables back to enterprise business objectives.</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">Cafe24 Corp — IT Product Manager / Systems Architect</h3>
          <div className="meta">May 2017 – Mar 2023 · Seoul, South Korea</div>
          <ul className="list-disc ml-5 mt-2">
            <li>Large-Scale Project Execution: Managed large-scale, cross-functional global IT programs (300+ APIs), utilizing Jira (6+ years) and Smartsheet to ensure objectives were accomplished according to plan and stakeholder expectations.</li>
            <li>Meeting Facilitation & Tracking: Coordinated and facilitated weekly team meetings, preparing agendas, minutes, and action items to ensure all tasks progressed to completion during complex ERP and SCM system integrations.</li>
            <li>Documentation & Change Management: Developed and managed all project-related documentation in Confluence, ensuring any changes in the product lifecycle were properly documented and escalated for approval.</li>
            <li>Data Engineering & BI: Designed a data-driven "Watchtower" system to monitor infrastructure performance; utilized PowerBI and SQL concepts to build dashboards and communicate operational efficiency to senior leadership.</li>
          </ul>
        </div>
        <div className="card">
  <h3 className="text-lg font-semibold">WEMAKEPRICE — Project Manager (Global E-commerce & Logistics)</h3>
  <div className="meta">Sep 2014 – May 2017 · Seoul, South Korea</div>
  <ul className="list-disc ml-5 mt-2">
    <li>Led assigned IT projects for US and Japan warehouse operations, collaborating with external partners to gather requirements and establish initial SCM/ERP business processes.</li>
    <li>Managed end-to-end cargo operations by utilizing root-cause analysis and problem-solving skills, successfully identifying priorities and implementing workflow automation to increase efficiency by 25%.</li>
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
      "Agile", "Scrum", "Waterfall", "SDLC", "PMI Framework", "Change Management",
      "Scope Definition", "Budget & Financial Forecasting", "SOW Negotiation", "Risk Escalation",
      "Stakeholder Management", "C-Level Presentations", "Weekly Status Reporting",
      "ERP/SCM/CRM Integrations", "Data Engineering", "Infrastructure Technologies",
      "SQL", "Python", "JavaScript", "React", "Node.js", "GA4", "Tableau", "Postman", "Jira", "Confluence", "Figma"
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
