import CvForm from "./CvForm";
import CvPreview from "./CvPreview";
import { useState } from "react";

export default function App() {

  const [cvData, setCvData] = useState({
    personal: {
      firstName: '',
      surname: '',
      email: '',
      phone: ''
    },
    education: [],
    experience: [],
    skills: [],
    references: []
  });

  const [isEditing, setIsEditing] = useState(true);
  const [stepToEdit, setStepToEdit] = useState(0);

  function toggleEditing() {
    setIsEditing(prevIsEditing => !prevIsEditing);
  }

  function editSection(step) {
    setStepToEdit(step);
    setIsEditing(true);
  }

  // CvForm callbacks, passed through CvForm.

  // PersonalInfoForm callback, passed through CvForm.
  function updatePersonal(field, value) {
    setCvData(prevCvData => ({
      ...prevCvData,
      personal: {
        ...prevCvData.personal,
        [field]: value
      }
    }));
  }

  // EducationForm callback, passed through CvForm.
  function updateEducation(index, field, value) {
    setCvData(prevCvData => ({
      ...prevCvData,
      education: prevCvData.education.map((entry, i) => {
        if (i === index) {
          return {
            ...entry,
            [field]: value
          };
        } else {
          return entry;
        }
      })
    }));
  }

  function addEducation() {
    setCvData(prevCvData => ({
      ...prevCvData,
      education: [
        ...prevCvData.education,
        {
          id: crypto.randomUUID(),
          university: '',
          major: '',
          minor: '',
          startDate: '',
          endDate: '',
          gpa: ''
        }
      ]
    }));
  }

  function removeEducation(educationIndex) {
    setCvData(currentCvData => {
      const remainingEducation = currentCvData.education.filter(
        (entry, index) => index !== educationIndex
      );

      return {
        ...currentCvData,
        education: remainingEducation
      };
    });
  }

  // ExperienceForm callback, passed through CvForm.
  function addExperience() {
    setCvData(prevCvData => ({
      ...prevCvData,
      experience: [
        ...prevCvData.experience,
        {
          id: crypto.randomUUID(),
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          responsibilities: ''
        }
      ]
    }));
  }

  function updateExperience(index, field, value) {
    setCvData(prevCvData => ({
      ...prevCvData,
      experience: prevCvData.experience.map((entry, i) => {
        if (i === index) {
          return {
            ...entry,
            [field]: value
          };
        } else {
          return entry;
        }
      })
    }));
  }
  
  function removeExperience(experienceIndex) {
    setCvData(currentCvData => {
      const remainingExperience = currentCvData.experience.filter(
        (entry, index) => index !== experienceIndex
      );

      return {
        ...currentCvData,
        experience: remainingExperience
      };
    });
  }

  // SkillsForm callback, passed through CvForm.
  function addSkill() {
    setCvData(prevCvData => ({
      ...prevCvData,
      skills: [
        ...prevCvData.skills,
        {
          id: crypto.randomUUID(),
          skill: '',
          description: '',
          yearsOfExperience: ''
        }
      ]
    }));
  }

  function updateSkill(index, field, value) {
    setCvData(prevCvData => ({
      ...prevCvData,
      skills: prevCvData.skills.map((entry, i) => {
        if (i === index) {
          return {
            ...entry,
            [field]: value
          };
        } else {
          return entry;
        }
      })
    }));
  }

  function removeSkill(skillIndex) {
    setCvData(currentCvData => {
      const remainingSkills = currentCvData.skills.filter(
        (entry, index) => index !== skillIndex
      );

      return {
        ...currentCvData,
        skills: remainingSkills
      };
    });
  }

  // ReferencesForm callback, passed through CvForm.
  function addReference() {
    setCvData(prevCvData => ({
      ...prevCvData,
      references: [
        ...prevCvData.references,
        {
          id: crypto.randomUUID(),
          name: '',
          relationship: '',
          email: '',
          phone: ''
        }
      ]
    }));
  }

  function updateReference(index, field, value) {
    setCvData(prevCvData => ({
      ...prevCvData,
      references: prevCvData.references.map((entry, i) => {
        if (i === index) {
          return {
            ...entry,
            [field]: value
          };
        } else {
          return entry;
        }
      })
    }));
  }

  function removeReference(referenceIndex) {
    setCvData(currentCvData => {
      const remainingReferences = currentCvData.references.filter(
        (entry, index) => index !== referenceIndex
      );

      return {
        ...currentCvData,
        references: remainingReferences
      };
    });
  }

  return (
    <main>
      {isEditing ? (
        <CvForm
          cvData={cvData}
          initialStep={stepToEdit}

          updatePersonal={updatePersonal}
          
          addEducation={addEducation}
          updateEducation={updateEducation}
          removeEducation={removeEducation}

          addExperience={addExperience}
          updateExperience={updateExperience}
          removeExperience={removeExperience}

          addSkill={addSkill}
          updateSkill={updateSkill}
          removeSkill={removeSkill}

          addReference={addReference}
          updateReference={updateReference}
          removeReference={removeReference}

          toggleEditing={toggleEditing}
        />
      ) : (
        <CvPreview
          cvData={cvData}
          onEditSection={editSection}
        />
      )}
    </main>
  )
}
