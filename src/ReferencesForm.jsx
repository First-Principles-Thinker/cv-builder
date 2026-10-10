export default function ReferencesForm({ references, addReference, updateReference, removeReference }) {
    const inputClasses = 'w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-white transition-colors duration-200 hover:border-white/20 focus:border-blue-400/60 focus:outline-none focus:ring-2 focus:ring-blue-400/30';

    return (
        <fieldset className="space-y-8">
            <legend className="sr-only">References</legend>

            {references.map((reference, index) => (
                <fieldset key={reference.id} className="space-y-5">
                    <legend className="sr-only">Reference Entry {index + 1}</legend>
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="text-base font-semibold tracking-tight text-white/90">Reference Entry {index + 1}</h3>
                        <button
                            className="shrink-0 rounded-md border border-white/10 px-3 py-1.5 text-xs font-medium text-white/60 transition-colors duration-200 hover:border-red-300/30 hover:bg-red-400/10 hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300/60 motion-reduce:transition-none"
                            type="button"
                            onClick={() => removeReference(index)}
                        >
                            Remove
                        </button>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor={`name-${reference.id}`} className="block text-sm font-medium text-white/70">Name</label>
                        <input
                            id={`name-${reference.id}`}
                            name="name"
                            type="text"
                            className={inputClasses}
                            placeholder="e.g. Jordan Lee"
                            value={reference.name}
                            onChange={e => updateReference(index, 'name', e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor={`relationship-${reference.id}`} className="block text-sm font-medium text-white/70">Relationship</label>
                        <input
                            id={`relationship-${reference.id}`}
                            name="relationship"
                            type="text"
                            className={inputClasses}
                            placeholder="e.g. Former manager"
                            value={reference.relationship}
                            onChange={e => updateReference(index, 'relationship', e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor={`email-${reference.id}`} className="block text-sm font-medium text-white/70">Email</label>
                        <input
                            id={`email-${reference.id}`}
                            name="email"
                            type="email"
                            className={inputClasses}
                            placeholder="e.g. jordan.lee@example.com"
                            value={reference.email}
                            onChange={e => updateReference(index, 'email', e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor={`phone-${reference.id}`} className="block text-sm font-medium text-white/70">Phone</label>
                        <input
                            id={`phone-${reference.id}`}
                            name="phone"
                            type="tel"
                            className={inputClasses}
                            placeholder="e.g. +1 555 234 5678"
                            value={reference.phone}
                            onChange={e => updateReference(index, 'phone', e.target.value)}
                        />
                    </div>
                </fieldset>
            ))}

            <button
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-white/15 px-4 py-3 text-sm font-medium text-white/70 transition-colors duration-200 hover:border-blue-400/40 hover:bg-white/[0.03] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/60 motion-reduce:transition-none"
                type="button"
                onClick={addReference}
            >
                <span aria-hidden="true" className="text-lg leading-none">+</span>
                Add Reference
            </button>
        </fieldset>
    );
}
