"use client"
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/survey-core.css';
import "./surveyStyles.css";


const customCss = {
  question: {
    content: "question-content",
    answered: "question-answered",
    titleRequired: "question-required-title",
  },
  progressBar: {
    root: "custom-progress-root",
    bar: "custom-progress-bar",
    text: "custom-progress-text",
  },
};



const surveyJson = {
  title: "Better Evidence",
  description: "Auto save",
  pages: [
    {
      name: "page1",
      title: "Persona Info",
      elements: [
        {
          type: "text",
          name: "question1",
          title: "First Name",
          autocomplete: "name",
          placeholder: "Abebe",
        },
        {
          type: "text",
          name: "question2",
          title: "Last Name",
          autocomplete: "name",
          placeholder: "Kebede",
        },
        {
          type: "dropdown",
          name: "question3",
          title: "Title/Degree",
          choices: ["Item 1", "Item 2", "Item 3"],
          autocomplete: "name",
        },
        {
          type: "rating",
          name: "question4",
          titleLocation: "hidden",
          autoGenerate: false,
          rateCount: 3,
          rateValues: [
            {
              value: 1,
              text: "Man",
            },
            {
              value: 2,
              text: "Woman",
            },
            {
              value: 3,
              text: "Prefer not to say",
            },
          ],
          rateMin: 2,
          rateMax: 4,
          displayRateDescriptionsAsExtremeItems: true,
          displayMode: "buttons",
        },
        {
          type: "text",
          name: "question5",
          title: "Age",
          inputType: "number",
          placeholder: "Enter Your Age",
        },
        {
          type: "text",
          name: "question6",
          title: "Email",
          inputType: "email",
        },
        {
          type: "text",
          name: "question7",
          title: "Phone number",
          inputType: "tel",
          autocomplete: "tel-country-code",
          placeholder: "+2547....",
        },
        {
          type: "boolean",
          name: "question8",
          title: "Receive Update on WhatsApp",
          titleLocation: "top",
          commentText: "Whats",
          labelTrue: "Yes",
          labelFalse: "No",
          swapOrder: true,
        },
        {
          type: "text",
          name: "question9",
          title: "WhatsApp number",
          inputType: "tel",
          autocomplete: "tel-country-code",
        },
      ],
    },
    {
      name: "page2",
      title: "Where do you Practice",
      elements: [
        {
          type: "dropdown",
          name: "question10",
          title: "Country",
          choices: ["Item 1", "Item 2", "Item 3"],
          choicesByUrl: {
            url: "https://surveyjs.io/api/CountriesExample",
          },
        },
        {
          type: "dropdown",
          name: "question11",
          title: "Primary Speciality",
          choices: ["Item 1", "Item 2", "Item 3"],
        },
        {
          type: "text",
          name: "question12",
          title: "Practice Setting",
        },
        {
          type: "boolean",
          name: "question13",
          title: "Patient Care",
        },
        {
          type: "boolean",
          name: "question14",
          title: "Payment",
        },
        {
          type: "text",
          name: "question15",
          title: "Average Patients Per Week",
        },
      ],
    },
    {
      name: "page3",
      title: "How will you use UpToDate",
      elements: [
        {
          type: "dropdown",
          name: "question16",
          title: "Usage Matrix",
          description: "How often do you use these resources",
          choices: ["Item 1", "Item 2", "Item 3"],
          placeholder: "PubMed...",
          choicesStep: 3,
        },
        {
          type: "rating",
          name: "question17",
          titleLocation: "hidden",
          autoGenerate: false,
          rateCount: 3,
          rateValues: [
            {
              value: 1,
              text: "Never",
            },
            {
              value: 2,
              text: "Sometimes",
            },
            {
              value: 3,
              text: "Frequently",
            },
          ],
          rateMax: 3,
          displayMode: "buttons",
        },
        {
          type: "dropdown",
          name: "question 18",
          titleLocation: "hidden",
          choices: ["Item 1", "Item 2", "Item 3"],
          placeholder: "Medscape...",
        },
        {
          type: "slider",
          name: "question20",
          title: "Tech Readiness",
          description: "Access to device",
          max: 5,
        },
        {
          type: "boolean",
          name: "question18",
          title: "Add Downloadable Desktop Version",
          titleLocation: "left",
          validators: [
            {
              type: "expression",
            },
          ],
        },
        {
          type: "boolean",
          name: "question21",
          title: "Interested in CME credits",
          titleLocation: "left",
          validators: [
            {
              type: "expression",
            },
          ],
        },
        {
          type: "comment",
          name: "question22",
          title: "Essay",
          description: "Program Aim Explanation",
          placeholder: "Explain how this tool helps you and your patients",
        },
      ],
    },
    {
      name: "page4",
      title: "Verify and Submit",
      description: "Pending...",
      elements: [
        {
          type: "html",
          name: "question19",
          maxWidth: "50%",
          title: "Identity Check (veriff)",
          description: "Pending",
          html: "Note: We use veriff to securely confirm your id. It will take 2 minutes",
        },
        {
          type: "image",
          name: "question25",
          maxWidth: "50%",
          startWithNewLine: false,
          title: "Identity Check (veriff)",
          description: "Pending",
          imageLink:
            "https://api.surveyjs.io/private/Surveys/files?name=a97c42eb-d01f-4bc7-a11e-659e54fa71d5",
          imageFit: "cover",
          imageHeight: "auto",
          imageWidth: "100%",
        },
        {
          type: "file",
          name: "question23",
          title: "Proof of Employment",
          acceptedCategories: ["document", "image"],
          waitForUpload: true,
          needConfirmRemoveFile: true,
          filePlaceholder: "Tap to upload contracts of ID badge (PDF/JPG)",
        },
        {
          type: "text",
          name: "question24",
          title: "Having trouble?",
          description: "Can't find your documents right now",
          inputType: "url",
          placeholder: "Share location pin",
        },
      ],
    },
  ],
  showProgressBar: true,
  progressBarType: "questions",
  showTOC: true,
  pagePrevText: "Back",
  pageNextText: "Next Step",
  gridLayoutEnabled: true,
  headerView: "advanced",
};



export default function SurveyComponent() {
  const survey = new Model(surveyJson);
  survey.css = customCss;

   survey.onUpdateQuestionCssClasses.add(function (_, options) {
    const q = options.question;
     const c = options.cssClasses;
     if (q.name = "First Name") {
      c.title = "first-name-title";
     }
   });

  return <Survey model={survey} />;
}

