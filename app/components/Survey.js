"use client"
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/survey-core.css';
import "../surveyStyles.css";



const surveyJson = {
  title: "Better Evidence",
  checkErrorsMode: "onValueChanged",
  textUpdateMode: "onTyping",
  showProgressBar: "top",
  pages: [
    {
      name: "page1",
      title: "Personal Info",
      elements: [
        {
          type: "text",
          name: "First Name",
          title: "First Name",
          placeholder: "Abebe",
          isRequired: true,
          requiredErrorText: "Value cannot be empty",
        },
        {
          type: "text",
          name: "Last Name",
          title: "Last Name",
          placeholder: "Kebende",
          isRequired: true,
          requiredErrorText: "Value cannot be empty",
        },
        {
          type: "dropdown",
          name: "Title/Degree",
          title: "Title/Degree",
          choices: ["Mr.", "Mrs.", "Dr.", "Prof"],
          isRequired: true,
          requiredErrorText: "Value cannot be empty",
        },
        {
          type: "rating",
          name: "Gender",
          title: "Gender",
          width: "100%",
          rateCount: 3,
          rateValues: [
            {
              value: 1,
              text: "Male",
            },
            {
              value: 2,
              text: "Women",
            },
            {
              value: 3,
              text: "Prefer not to say",
            },
          ],

          isRequired: true,
          requiredErrorText: "Value cannot be empty",
        },
        {
          type: "text",
          inputType: "number",
          name: "Age",
          title: "Age",
          placeholder: "Enter your Age",
          isRequired: true,
          requiredErrorText: "Value cannot be empty",
        },
        {
          type: "text",
          inputType: "email",
          name: "Email",
          title: "Email",
          placeholder: "user@gmail.com",
          isRequired: true,
          requiredErrorText: "Value cannot be empty",
        },
        {
          type: "text",
          inputType: "number",
          name: "Age",
          title: "Phone Number",
          placeholder: "+254768400317",
          isRequired: true,
          requiredErrorText: "Value cannot be empty",
        },
        {
          type: "boolean",
          name: "enableFeature",
          title: "Recieve Updates on Whatsapp",
          titleLocation: "left",
          startWithNewLine: true,
          cssClasses: {
            root: "toggle-row",
          },
        },
        {
          type: "text",
          inputType: "number",
          name: "Age",
          title: "Whatsapp Number",
          placeholder: "+254768400317",
          isRequired: true,
          requiredErrorText: "Value cannot be empty",
        },
      ],
    },

    {
      name: "page2",
      title: "Where do you Practice",
      elements: [
        {
          type: "dropdown",
          name: "country",
          title: "Country",
          choicesByUrl: {
            url: "https://surveyjs.io/api/CountriesExample",
            valueName: "name",
          },
          isRequired: true,
          requiredErrorText: "Value cannot be empty",
        },
        {
          type: "text",
          name: "Facility Name",
          title: "Facility Name",
          isRequired: true,
          requiredErrorText: "Value cannot be empty",
        },
        {
          type: "panel",
          name: "Details",
          title: "Practice Details",
          elements: [
            {
              type: "dropdown",
              name: "Role/Profession",
              title: "Role/Profession",
            },
            {
              type: "dropdown",
              name: "Speciality",
              title: "Primary Speciality",
            },
            {
              type: "dropdown",
              name: "Practice",
              title: "Practice Setting",
            },
          ],
        },
        {
          type: "boolean",
          name: "Patient",
          title: "Patient Care",
        },
        {
          type: "boolean",
          name: "Payment",
          title: "Payment",
        },
        {
          type: "text",
          inputType: "number",
          name: "Payment",
          title: "Average Patients Per week",
        },
      ],
    },
    {
      name: "page3",
      title: "Verify and Submit",
      width: "600%",

      elements: [
        {
          type: "text",
          name: "full-name",
          title: "Identity Check(Veriff)",
          description: "Pending...",
        },
        {
          type: "image",
          name: "textImageSection",
          imageLink:
            "https://www.pexels.com/photo/cityscape-of-naples-with-view-of-the-galleria-umberto-i-17567462/",
          startWithNewLine: false,
        },
        {
          type: "text",
          name: "secure",
          title: "Verification",
          placeholder: "Start secure identity check",
          description: "We use verif to securely confirm your id. It takes 2 minutes"
        },
        
      ],
    },
  ],
  questionErrorLocation: "bottom",
  pagePrevText: "Back",
  pageNextText: "Next Step",
  completeText: "Submit Apllication",
};



export default function SurveyComponent() {
  const survey = new Model(surveyJson);

  return <Survey model={survey} />;
}

