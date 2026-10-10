export default function ExperienceForm({ experience, addExperience, updateExperience, removeExperience }) {
    const inputClasses = 'w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-white transition-colors duration-200 hover:border-white/20 focus:border-blue-400/60 focus:outline-none focus:ring-2 focus:ring-blue-400/30';

    return (
        <fieldset className="space-y-8">
            <legend className="sr-only">Experience</legend>

            {experience.map((entry, index) => (
                <fieldset key={entry.id} className="space-y-5">
                    <legend className="sr-only">Experience Entry {index + 1}</legend>
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="text-base font-semibold tracking-tight text-white/90">Experience Entry {index + 1}</h3>
                        <button
                            className="shrink-0 rounded-md border border-white/10 px-3 py-1.5 text-xs font-medium text-white/60 transition-colors duration-200 hover:border-red-300/30 hover:bg-red-400/10 hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300/60 motion-reduce:transition-none"
                            type="button"
                            onClick={() => removeExperience(index)}
                        >
                            Remove
                        </button>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor={`company-${entry.id}`} className="block text-sm font-medium text-white/70">Company</label>
                        <input
                            id={`company-${entry.id}`}
                            name="company"
                            type="text"
                            className={inputClasses}
                            placeholder="e.g. Acme Inc."
                            value={entry.company ?? ''}
                            onChange={event => updateExperience(index, event.target.name, event.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor={`position-${entry.id}`} className="block text-sm font-medium text-white/70">Position</label>
                        <input
                            id={`position-${entry.id}`}
                            name="position"
                            type="text"
                            className={inputClasses}
                            placeholder="e.g. Software Engineer"
                            value={entry.position ?? ''}
                            onChange={event => updateExperience(index, event.target.name, event.target.value)}
                        />
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
                                onChange={event => updateExperience(index, event.target.name, event.target.value)}
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
                                onChange={event => updateExperience(index, event.target.name, event.target.value)}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor={`responsibilities-${entry.id}`} className="block text-sm font-medium text-white/70">Responsibilities</label>
                        <textarea
                            id={`responsibilities-${entry.id}`}
                            name="responsibilities"
                            className={`${inputClasses} min-h-32 resize-y`}
                            placeholder="Describe your impact and key responsibilities..."
                            value={entry.responsibilities ?? ''}
                            onChange={event => updateExperience(index, event.target.name, event.target.value)}
                        />
                    </div>
                </fieldset>
            ))}

            <button
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-white/15 px-4 py-3 text-sm font-medium text-white/70 transition-colors duration-200 hover:border-blue-400/40 hover:bg-white/[0.03] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/60 motion-reduce:transition-none"
                type="button"
                onClick={addExperience}
            >
                <span aria-hidden="true" className="text-lg leading-none">+</span>
                Add Experience
            </button>
        </fieldset>
    );
}
