"use client"
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/survey-core.css';
import "../surveyStyles.css";



const surveyJson = {
   title: "Better Evidence",

  showProgressBar: "top",
  pages: [{
    name: "PersonalDetails",
    title: "Personal Info",
    elements: [{
      type: "text",
      name: "First Name",
      title: "First Name",
      placeholder: "Abebe"

    },
    {
      type: "text",
      name: "Last Name",
      title: "Last Name",
      placeholder: "Kebende"
    },
     {
      type: "dropdown",
      name: "Title/Degree",
      title: "Title/Degree",
      choices:[
      "Mr.",
        "Mrs.",
        "Dr.",
        "Prof"
     ]
      
    }
  ]
  },{
    title: "Where do you Practice",

     elements: [{
            name: "how-can-we-improve",
            title: "Country?",
            type: "dropdown",
            enableSearch: true,
            choicesByUrl: {
            url: "https://surveyjs.io/api/CountriesExample",
            valueName: "name", // use country name
  }
        },
       {
    name: "Speciality",
    title: "Primary Speciality",
    type: "dropdowm"
  }],
  },
],
  
  
}



export default function SurveyComponent() {
  const survey = new Model(surveyJson);

  return <Survey model={survey} />;
}

