"use client";
import { projects } from "../data/projects";

export default function ProjectsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((p) => (
        <div key={p.slug} className="card">
          {p.thumbnail && (
            <img src={p.thumbnail} alt={p.title} className="w-full h-40 object-cover rounded-xl mb-3" />
          )}
          <h3 className="text-base font-semibold">{p.title}</h3>
          {p.period && <div className="meta">{p.period}</div>}
          <p className="text-sm text-gray-700 mt-2">{p.summary}</p>

          {p.highlights && (
            <ul className="list-disc ml-5 mt-2 text-sm">
              {p.highlights.map((h, i) => (<li key={i}>{h}</li>))}
            </ul>
          )}
          {p.impact && <p className="text-sm mt-2"><strong>Impact:</strong> {p.impact}</p>}

          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => (<span key={t} className="pill">{t}</span>))}
          </div>

          <div className="mt-3 flex gap-2">
            {p.caseStudy && (
              <a href={p.caseStudy} className="rounded-xl px-3 py-2 border border-gray-200 hover:border-accent">
                View case study
              </a>
            )}
            {p.url && (
              <a href={p.url} target="_blank" rel="noreferrer" className="rounded-xl px-3 py-2 bg-accent text-white">
                Visit site
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
