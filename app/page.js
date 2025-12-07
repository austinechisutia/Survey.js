"use client";

import { useEffect, useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/survey-core.css";

export default function Home() {
  const [surveyModel, setSurveyModel] = useState();

  useEffect(() => {
    const saved = window.localStorage.getItem("survey-json");

    if (!saved) return;

    const model = new Model(JSON.parse(saved));

    model.onComplete.add((sender) => {
      console.log("Survey result:", sender.data);

      window.localStorage.setItem("survey-result", JSON.stringify(sender.data));
    });

    setSurveyModel(model);
  }, []);

  if (!surveyModel) {
    return (
      <div style={{ padding: 40 }}>
        <h1>No survey found</h1>
        <p>
          Go to{" "}
          <a href="/creator" style={{ color: "blue" }}>
            Survey Creator
          </a>{" "}
          to create one.
        </p>
      </div>
    );
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Survey model={surveyModel} />
    </div>
  );
}
