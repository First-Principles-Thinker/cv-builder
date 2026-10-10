import PersonalInfoForm from './PersonalInfoForm';
import EducationForm from './EducationForm';
import ExperienceForm from './ExperienceForm';
import SkillsForm from './SkillsForm';
import ReferencesForm from './ReferencesForm';
import { useState } from 'react';

export default function CvForm({ cvData, initialStep = 0, toggleEditing, updatePersonal, addEducation, updateEducation, removeEducation, addExperience, updateExperience, removeExperience, addSkill, updateSkill, removeSkill, addReference, updateReference, removeReference }) {
    const [currentStep, setCurrentStep] = useState(initialStep);
    const primaryButtonClasses = 'rounded-lg bg-[#FBD509] px-5 py-3 font-semibold text-[#141619] shadow-[0_4px_0_0_#b99c00] transition-[transform,box-shadow,background-color] duration-200 ease-out hover:bg-[#ffe23d] active:translate-y-1 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FBD509] focus-visible:ring-offset-2 focus-visible:ring-offset-[#141619] motion-reduce:transition-none';
    const secondaryButtonClasses = 'rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-medium text-white/80 shadow-[0_4px_0_0_#292c31] transition-[transform,box-shadow,background-color] duration-200 ease-out hover:bg-white/10 active:translate-y-1 active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141619] motion-reduce:transition-none';
    
    const stepTitles = [
        'Personal Information',
        'Education',
        'Experience',
        'Skills',
        'References'
    ];

    // CvForm navigation callbacks used by the wizard buttons.
    function goToNextStep() {
        setCurrentStep(step => Math.min(step + 1, 4));
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (currentStep < 4) {
            goToNextStep();
        } else {
            toggleEditing();
            console.log('CV submitted:', cvData);
        }
    }

    function goToPreviousStep() {
        setCurrentStep(step => Math.max(step - 1, 0));
    }

    return (
        <form
            className="cv-form mx-auto flex h-dvh w-full max-w-2xl flex-col px-4 pt-8 sm:px-6 sm:pt-12"
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <header className="cv-form__header mb-16">
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {stepTitles[currentStep]}
                </h2>
            </header>

            <section className="cv-form__content min-h-0 flex-1 overflow-y-auto overscroll-contain pb-12 -mr-4 pr-4 sm:-mr-6 sm:pr-6">
                {currentStep === 0 && (
                    <PersonalInfoForm
                        personal={cvData.personal}
                        updatePersonal={updatePersonal}
                    />
                )}

                {currentStep === 1 && (
                    <EducationForm
                        education={cvData.education}
                        addEducation={addEducation}
                        updateEducation={updateEducation}
                        removeEducation={removeEducation}
                    />
                )}

                {currentStep === 2 && (
                    <ExperienceForm
                        experience={cvData.experience}
                        addExperience={addExperience}
                        updateExperience={updateExperience}
                        removeExperience={removeExperience}
                    />
                )}
                
                {currentStep === 3 && (<SkillsForm
                    skills={cvData.skills}
                    addSkill={addSkill}
                    updateSkill={updateSkill}
                    removeSkill={removeSkill}
                />)}

                {currentStep === 4 && (
                    <ReferencesForm
                        references={cvData.references}
                        addReference={addReference}
                        updateReference={updateReference}
                        removeReference={removeReference}
                    />
                )}
            </section>

            <footer className="cv-form__footer mt-16 mb-72 flex shrink-0 items-center justify-center">
                <div className="cv-form__footer-buttons">
                    {currentStep > 0 && (
                        <button
                            className={secondaryButtonClasses}
                            type="button"
                            onClick={goToPreviousStep}
                        >
                            Previous
                        </button>
                    )}

                    <button className={`${primaryButtonClasses} w-full max-w-48`} type="submit">
                        {currentStep < 4 ? 'Next' : 'Submit CV'}
                    </button>
                </div>
            </footer>
        </form>
    );
}