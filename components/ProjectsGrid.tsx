// components/ProjectsGrid.tsx
"use client";
import { projects } from "../data/projects";

export default function ProjectsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((p) => {
        const imgMode =
          p.thumbMode === "contain" ? "object-contain bg-white p-3" : "object-cover";
        return (
          <div key={p.slug} className="card h-full flex flex-col">
            {/* Thumbnail with logo overlay */}
            <div className="relative mb-3">
              <img
                src={p.thumbnail}
                alt={p.title}
                className={`w-full h-40 rounded-xl ${imgMode}`}
              />
              {p.logo && (
                <img
                  src={p.logo}
                  alt={`${p.title} logo`}
                  className="absolute left-2 top-2 h-6 w-auto bg-white/90 rounded-md p-1 shadow"
                />
              )}
            </div>

            <h3 className="text-base font-semibold">{p.title}</h3>
            {p.period && <div className="meta">{p.period}</div>}

            <p className="text-sm text-gray-700 mt-2">{p.summary}</p>

            {p.highlights?.length ? (
              <ul className="list-disc ml-5 mt-2 text-sm">
                {p.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            ) : null}

            {p.impact && (
              <p className="text-sm mt-2">
                <strong>Impact:</strong> {p.impact}
              </p>
            )}

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </div>

            {/* CTA区域: 항상 카드 하단 */}
            <div className="mt-4 flex gap-2 pt-1">
              {p.caseStudy && (
                <a
                  href={p.caseStudy}
                  className="btn btn-outline"
                  aria-label={`View case study: ${p.title}`}
                >
                  View case study →
                </a>
              )}
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  aria-label={`Visit site: ${p.title}`}
                >
                  Visit site ↗
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
