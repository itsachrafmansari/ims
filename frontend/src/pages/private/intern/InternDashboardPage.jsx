import { useState } from "react";
import DashboardStepButton from "../../../components/DashboardStepButton";
import EmailConfirmationStep from "./steps/EmailConfirmationStep";
import PersonalInformationStep from "./steps/PersonalInformationStep";
import DocumentsStep from "./steps/DocumentsStep";
import InternshipStep from "./steps/InternshipStep";
import CertificateStep from "./steps/CertificateStep";

const InternDashboardPage = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [currentStep, setCurrentStep] = useState(4);

    const [steps, setSteps] = useState([
        { label: "Email Confirmation", stepComponent: <EmailConfirmationStep /> },
        { label: "Personal Info", stepComponent: <PersonalInformationStep /> },
        { label: "Documents", stepComponent: <DocumentsStep /> },
        { label: "Internship", stepComponent: <InternshipStep /> },
        { label: "Certificate", stepComponent: <CertificateStep /> },
    ]);

    const stepButtonHandler = (stepIndex) => {
        setActiveStep(stepIndex);
    };

    const previousStepHandler = (e) => {
        e.preventDefault();
    }

    const nextStepHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="p-5 mx-auto max-w-screen-lg w-full space-y-5">

            <div className="w-full grid grid-cols-5 gap-1">
                {steps.map(({ label }, i) => <DashboardStepButton key={i} stepIndex={i} label={label} isUnlocked={currentStep >= i} isActive={activeStep === i} onClick={stepButtonHandler} />)}
            </div>

            <div>
                {currentStep >= activeStep && (steps[activeStep].stepComponent)}
            </div>

            <div className="flex justify-between">
                <button type="submit" onClick={previousStepHandler} className="px-3 py-2 rounded-lg text-white bg-mainColor hover:bg-mainColorOnHover transition-color duration-default">Previous Step</button>
                <button type="submit" onClick={nextStepHandler} className="px-3 py-2 rounded-lg text-white bg-mainColor hover:bg-mainColorOnHover transition-color duration-default">Next Step</button>
            </div>

        </div>
    );
}

export default InternDashboardPage;