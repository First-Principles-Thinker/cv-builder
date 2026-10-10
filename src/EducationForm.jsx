export default function EducationForm({ education, addEducation, updateEducation, removeEducation }) {
    const inputClasses = 'w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-white transition-colors duration-200 hover:border-white/20 focus:border-blue-400/60 focus:outline-none focus:ring-2 focus:ring-blue-400/30';

    return (
        <fieldset className="space-y-12">
            <legend className="sr-only">Education</legend>

            {education.map((entry, index) => (
                <fieldset key={entry.id} className="space-y-5">
                    <legend className="sr-only">Education Entry {index + 1}</legend>
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="text-base font-semibold tracking-tight text-white/90">Education Entry {index + 1}</h3>
                        <button
                            className="shrink-0 rounded-md border border-white/10 px-3 py-1.5 text-xs font-medium text-white/60 transition-colors duration-200 hover:border-red-300/30 hover:bg-red-400/10 hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300/60 motion-reduce:transition-none"
                            type="button"
                            onClick={() => removeEducation(index)}
                        >
                            Remove
                        </button>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor={`university-${entry.id}`} className="block text-sm font-medium text-white/70">University</label>
                        <input
                            id={`university-${entry.id}`}
                            name="university"
                            type="text"
                            className={inputClasses}
                            placeholder="e.g. State University"
                            value={entry.university ?? ''}
                            onChange={event => updateEducation(index, event.target.name, event.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                            <label htmlFor={`major-${entry.id}`} className="block text-sm font-medium text-white/70">Major</label>
                            <input
                                id={`major-${entry.id}`}
                                name="major"
                                type="text"
                                className={inputClasses}
                                placeholder="e.g. Computer Science"
                                value={entry.major ?? ''}
                                onChange={event => updateEducation(index, event.target.name, event.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor={`minor-${entry.id}`} className="block text-sm font-medium text-white/70">Minor</label>
                            <input
                                id={`minor-${entry.id}`}
                                name="minor"
                                type="text"
                                className={inputClasses}
                                placeholder="e.g. Mathematics (optional)"
                                value={entry.minor ?? ''}
                                onChange={event => updateEducation(index, event.target.name, event.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                            <label htmlFor={`startDate-${entry.id}`} className="block text-sm font-medium text-white/70">Start Date</label>
                            <input
                                id={`startDate-${entry.id}`}
                                name="startDate"
                                type="date"
                                className={inputClasses}
                                value={entry.startDate ?? ''}
                                onChange={event => updateEducation(index, event.target.name, event.target.value)}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor={`endDate-${entry.id}`} className="block text-sm font-medium text-white/70">End Date</label>
                            <input
                                id={`endDate-${entry.id}`}
                                name="endDate"
                                type="date"
                                className={inputClasses}
                                value={entry.endDate ?? ''}
                                onChange={event => updateEducation(index, event.target.name, event.target.value)}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor={`gpa-${entry.id}`} className="block text-sm font-medium text-white/70">GPA</label>
                        <input
                            id={`gpa-${entry.id}`}
                            name="gpa"
                            type="number"
                            step="0.01"
                            className={inputClasses}
                            placeholder="e.g. 3.8"
                            value={entry.gpa ?? ''}
                            onChange={event => updateEducation(index, event.target.name, event.target.value)}
                        />
                    </div>

                </fieldset>
            ))}

            <button
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-white/15 px-4 py-3 text-sm font-medium text-white/70 transition-colors duration-200 hover:border-blue-400/40 hover:bg-white/[0.03] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/60 motion-reduce:transition-none"
                type="button"
                onClick={addEducation}
            >
                <span aria-hidden="true" className="text-lg leading-none">+</span>
                Add Education
            </button>

        </fieldset>
    );
}
