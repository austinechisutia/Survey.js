"use client";

import { useState } from "react";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";

const defaultCreatorOptions = {
  autoSaveEnabled: true,
  collapseOnDrag: true,
};

const defaultJson = {
  pages: [
    {
      name: "Name",
      elements: [
        { name: "FirstName", title: "Enter your first name:", type: "text" },
        { name: "LastName", title: "Enter your last name:", type: "text" },
      ],
    },
  ],
};

export default function SurveyCreatorWidget(props) {
  const [creator, setCreator] = useState(null);

  // Create Survey Creator instance once
  if (!creator) {
    const newCreator = new SurveyCreator(
      props?.options || defaultCreatorOptions
    );
    setCreator(newCreator);
  }

  if (!creator) return null;

  // SAVE survey JSON automatically
  creator.saveSurveyFunc = (saveNo, callback) => {
    window.localStorage.setItem("survey-json", creator.text);
    callback(saveNo, true);
  };

  // LOAD previous survey (or default)
  creator.text =
    JSON.stringify(props?.json) ||
    window.localStorage.getItem("survey-json") ||
    JSON.stringify(defaultJson);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <SurveyCreatorComponent creator={creator} />
    </div>
  );
}
