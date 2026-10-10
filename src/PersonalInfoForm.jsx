export default function PersonalInfoForm({ personal, updatePersonal }) {
    return (
        <fieldset className="space-y-5">
            <legend className="sr-only">Personal Information</legend>

            <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-white/70">
                    First name
                </label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-white transition-colors duration-200 hover:border-white/20 focus:border-blue-400/60 focus:outline-none focus:ring-2 focus:ring-blue-400/30"
                    placeholder="e.g. Alex"
                    value={personal.firstName ?? ''}
                    onChange={event => updatePersonal(event.target.name, event.target.value)}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="surname" className="block text-sm font-medium text-white/70">Surname</label>
                <input
                    id="surname"
                    name="surname"
                    type="text"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-white transition-colors duration-200 hover:border-white/20 focus:border-blue-400/60 focus:outline-none focus:ring-2 focus:ring-blue-400/30"
                    placeholder="e.g. Morgan"
                    value={personal.surname ?? ''}
                    onChange={event => updatePersonal(event.target.name, event.target.value)}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white/70">Email address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-white transition-colors duration-200 hover:border-white/20 focus:border-blue-400/60 focus:outline-none focus:ring-2 focus:ring-blue-400/30"
                    placeholder="e.g. alex.morgan@example.com"
                    value={personal.email ?? ''}
                    onChange={event => updatePersonal(event.target.name, event.target.value)}
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-white/70">Phone number</label>
                <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-white transition-colors duration-200 hover:border-white/20 focus:border-blue-400/60 focus:outline-none focus:ring-2 focus:ring-blue-400/30"
                    placeholder="e.g. +1 555 123 4567"
                    value={personal.phone ?? ''}
                    onChange={event => updatePersonal(event.target.name, event.target.value)}
                />
            </div>
        </fieldset>
    );
}