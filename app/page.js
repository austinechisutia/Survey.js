import Survey from "./components/Survey";



export default function Home() {
  return (
    <>
      <div className="survey-container">
        <Survey model={Survey} />
      </div>
    </>
  );
}
