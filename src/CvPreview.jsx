import { useState } from 'react';

const sectionOptions = [
    'Personal information',
    'Education',
    'Experience',
    'Skills',
    'References'
];

function CvDocument({ cvData }) {
    const education = cvData.education.filter(entry =>
        entry.university || entry.major || entry.minor ||
        entry.startDate || entry.endDate || entry.gpa
    );
    const experience = cvData.experience.filter(entry =>
        entry.position || entry.company || entry.startDate ||
        entry.endDate || entry.responsibilities
    );
    const skills = cvData.skills.filter(skill =>
        skill.skill || skill.description || skill.yearsOfExperience
    );
    const references = cvData.references.filter(reference =>
        reference.name || reference.relationship || reference.email || reference.phone
    );
    const fullName = [cvData.personal.firstName, cvData.personal.surname]
        .filter(Boolean)
        .join(' ');

    return (
        <article className="cv-paper" aria-label={`${fullName || 'CV'} document`}>
            <header className="cv-document__header">
                {fullName && <h1>{fullName}</h1>}
                <address>
                    {cvData.personal.email && (
                        <a href={`mailto:${cvData.personal.email}`}>
                            {cvData.personal.email}
                        </a>
                    )}
                    {cvData.personal.email && cvData.personal.phone && <span aria-hidden="true"> · </span>}
                    {cvData.personal.phone && (
                        <a href={`tel:${cvData.personal.phone}`}>
                            {cvData.personal.phone}
                        </a>
                    )}
                </address>
            </header>

            {experience.length > 0 && (
                <section className="cv-document__section">
                    <h2>Professional Experience</h2>
                    {experience.map(entry => (
                        <section className="cv-document__entry" key={entry.id}>
                            {(entry.position || entry.company) && (
                                <h3>{entry.position || entry.company}</h3>
                            )}
                            {entry.position && entry.company && <p>{entry.company}</p>}
                            {(entry.startDate || entry.endDate) && (
                                <p className="cv-document__date">
                                    {entry.startDate}
                                    {entry.startDate && entry.endDate && ' – '}
                                    {entry.endDate}
                                </p>
                            )}
                            {entry.responsibilities && <p>{entry.responsibilities}</p>}
                        </section>
                    ))}
                </section>
            )}

            {education.length > 0 && (
                <section className="cv-document__section">
                    <h2>Education</h2>
                    {education.map(entry => (
                        <section className="cv-document__entry" key={entry.id}>
                            {entry.university && <h3>{entry.university}</h3>}
                            {(entry.major || entry.minor) && (
                                <p>
                                    {entry.major}
                                    {entry.major && entry.minor && ' · '}
                                    {entry.minor}
                                </p>
                            )}
                            {(entry.startDate || entry.endDate) && (
                                <p className="cv-document__date">
                                    {entry.startDate}
                                    {entry.startDate && entry.endDate && ' – '}
                                    {entry.endDate}
                                </p>
                            )}
                            {entry.gpa && <p>GPA: {entry.gpa}</p>}
                        </section>
                    ))}
                </section>
            )}

            {skills.length > 0 && (
                <section className="cv-document__section">
                    <h2>Skills</h2>
                    <ul>
                        {skills.map(skill => (
                            <li key={skill.id}>
                                {skill.skill && <strong>{skill.skill}</strong>}
                                {skill.skill && skill.description && ' — '}
                                {skill.description}
                                {skill.yearsOfExperience &&
                                    ` (${skill.yearsOfExperience} years of experience)`}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {references.length > 0 && (
                <section className="cv-document__section">
                    <h2>References</h2>
                    {references.map(reference => (
                        <section className="cv-document__entry" key={reference.id}>
                            {reference.name && <h3>{reference.name}</h3>}
                            {reference.relationship && <p>{reference.relationship}</p>}
                            {reference.email && (
                                <p>
                                    <a href={`mailto:${reference.email}`}>
                                        {reference.email}
                                    </a>
                                </p>
                            )}
                            {reference.phone && (
                                <p>
                                    <a href={`tel:${reference.phone}`}>
                                        {reference.phone}
                                    </a>
                                </p>
                            )}
                        </section>
                    ))}
                </section>
            )}
        </article>
    );
}

function printCv(cvData) {
    const fullName = [cvData.personal.firstName, cvData.personal.surname]
        .filter(Boolean)
        .join(' ');
    const previousTitle = document.title;
    document.title = fullName ? `${fullName} - CV` : 'CV';
    window.addEventListener('afterprint', () => {
        document.title = previousTitle;
    }, { once: true });
    window.print();
}

export default function CvPreview({ cvData, onEditSection }) {
    const [selectedStep, setSelectedStep] = useState(0);

    return (
        <main className="cv-preview-shell">
            <div className="cv-preview-controls" aria-label="CV actions">
                <nav className="cv-preview-edit" aria-label="Edit CV">
                    <span className="cv-preview-select">
                        <select
                            id="section-to-edit"
                            aria-label="Select CV section to edit"
                            value={selectedStep}
                            onChange={event => setSelectedStep(Number(event.target.value))}
                        >
                            {sectionOptions.map((section, index) => (
                                <option value={index} key={section}>
                                    {section}
                                </option>
                            ))}
                        </select>
                        <svg viewBox="0 0 16 16" aria-hidden="true">
                            <path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                    <button type="button" onClick={() => onEditSection(selectedStep)}>
                        Edit CV
                    </button>
                </nav>
                <div className="cv-mobile-document" aria-hidden="true">
                    <svg
                        className="cv-mobile-document__icon"
                        viewBox="0 0 48 48"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path d="M13 4h15l9 9v29H13V4Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                        <path d="M28 4v10h9M19 23h12M19 29h12M19 35h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M4 17h7v14H4z" fill="#FBD509" />
                    </svg>
                    <p className="cv-mobile-document__title">
                        {cvData.personal.firstName || cvData.personal.surname
                            ? `${[cvData.personal.firstName, cvData.personal.surname].filter(Boolean).join(' ')} — CV`
                            : 'Your CV is ready'}
                    </p>
                    <p className="cv-mobile-document__hint">A4 document · Ready to preview or save</p>
                </div>
                <div className="cv-preview-actions">
                    <button
                        className="cv-preview-actions__preview-button"
                        type="button"
                        onClick={() => printCv(cvData)}
                    >
                        Preview PDF
                    </button>
                    <button
                        className="cv-preview-actions__download-button"
                        type="button"
                        onClick={() => printCv(cvData)}
                    >
                        Download
                    </button>
                </div>
            </div>

            <CvDocument cvData={cvData} />
        </main>
    );
}
