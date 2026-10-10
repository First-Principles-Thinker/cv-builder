export default function SkillsForm({ skills, addSkill, updateSkill, removeSkill }) {
    const inputClasses = 'w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-white transition-colors duration-200 hover:border-white/20 focus:border-blue-400/60 focus:outline-none focus:ring-2 focus:ring-blue-400/30';

    return (
        <fieldset className="space-y-8">
            <legend className="sr-only">Skills</legend>

            {skills.map((skill, index) => (
                <fieldset key={skill.id} className="space-y-5">
                    <legend className="sr-only">Skill Entry {index + 1}</legend>
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="text-base font-semibold tracking-tight text-white/90">Skill Entry {index + 1}</h3>
                        <button
                            className="shrink-0 rounded-md border border-white/10 px-3 py-1.5 text-xs font-medium text-white/60 transition-colors duration-200 hover:border-red-300/30 hover:bg-red-400/10 hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300/60 motion-reduce:transition-none"
                            type="button"
                            onClick={() => removeSkill(index)}
                        >
                            Remove
                        </button>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor={`skill-${skill.id}`} className="block text-sm font-medium text-white/70">Skill</label>
                        <input
                            id={`skill-${skill.id}`}
                            name="skill"
                            type="text"
                            className={inputClasses}
                            placeholder="e.g. Project management"
                            value={skill.skill}
                            onChange={e => updateSkill(index, 'skill', e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor={`description-${skill.id}`} className="block text-sm font-medium text-white/70">Description</label>
                        <input
                            id={`description-${skill.id}`}
                            name="description"
                            type="text"
                            className={inputClasses}
                            placeholder="Describe how you use this skill..."
                            value={skill.description}
                            onChange={e => updateSkill(index, 'description', e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor={`yearsOfExperience-${skill.id}`} className="block text-sm font-medium text-white/70">Years of experience</label>
                        <input
                            id={`yearsOfExperience-${skill.id}`}
                            name="yearsOfExperience"
                            type="number"
                            className={inputClasses}
                            placeholder="e.g. 3"
                            value={skill.yearsOfExperience}
                            onChange={e => updateSkill(index, 'yearsOfExperience', e.target.value)}
                        />
                    </div>
                </fieldset>
            ))}

            <button
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-white/15 px-4 py-3 text-sm font-medium text-white/70 transition-colors duration-200 hover:border-blue-400/40 hover:bg-white/[0.03] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/60 motion-reduce:transition-none"
                type="button"
                onClick={addSkill}
            >
                <span aria-hidden="true" className="text-lg leading-none">+</span>
                Add Skill
            </button>
        </fieldset>
    );
}
