0 CV APPLICATION — V1.0

Problem
Users want to create their own CV by entering their information on our website.

Core behavior
- Users enter their information.
- The application generates/displays a CV from that information.
- Users can edit their information afterward.

V1.0 Scope
- Personal information
- Education
- Professional experience
- Skills
- References

Acceptance Criteria — CV Application V1.0

Personal information
- User can enter their first name, surname, email address, and phone number.
- These fields are required before the CV can be submitted.

Education
- User can optionally enter university name, major, minor, start date, end date, and GPA.
- Submitted education information appears on the CV.

Professional experience
- User can optionally enter job title, employer/company, major responsibilities or work completed, projects, start date, and end date.
- Submitted professional experience appears on the CV.

Skills
- User can optionally enter a skill.
- User can provide a description of the skill and years of experience.
- Submitted skills appear on the CV.

References
- User can enter the reference's name and contact information.
- Submitted reference information appears on the CV.

Submit / Edit
- User can submit the entered information and view the generated CV.
- User can return to edit mode after submitting.
- User can modify previously entered information.
- Updated information is reflected on the CV after resubmitting.

Personal information     → one
Education                → multiple entries
Professional experience  → multiple entries
Skills                   → multiple entries
References               → multiple entries

User flow

Open website
    ↓
Fill Personal Information
    ↓
Add Education
    ↓
Add Experience
    ↓
Add Skills
    ↓
Add References
    ↓
Submit
    ↓
CV Preview
    ↓
Edit
    ↓
Form appears again with previous values
    ↓
Submit updated CV

Architecture

App
│
├── CVForm
│   ├── PersonalInfoForm
│   ├── EducationForm
│   ├── ExperienceForm
│   ├── SkillsForm
│   └── ReferencesForm
│
└── CVPreview

Responsibilities / Boundaries

App
- Owns application state
- Decides whether Form or Preview is shown

CVForm
- Organizes the complete form
- Controls which step of the form wizard is currently displayed.
- Handles submit

PersonalInfoForm
- Personal fields

EducationForm
- Displays/adds/removes education entries

ExperienceForm
- Displays/adds/removes experience entries

SkillsForm
- Displays/adds/removes skills

ReferencesForm
- Displays/adds/removes references

CVPreview
- Turns cvData into the finished CV UI
- Contains Edit button