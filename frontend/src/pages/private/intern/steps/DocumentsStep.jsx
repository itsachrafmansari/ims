import { useState } from "react";

const DocumentsStep = () => {

    const [formData, setFormData] = useState({
        idCardFront: null,
        idCardBack: null,
        internshipAgreement: null,
        internshipInsurance: null,
        resume: null,
        coverLetter: null,
        enrolmentCertificate: null,
    });

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({
            ...formData,
            [name]: files[0],
        });
        console.log(formData);
    };

    const submitHandler = (e) => {
        e.preventDefault();

    } 

    return (
        <form className="p-5 space-y-5">
            
            <div className="grid grid-cols-2 gap-5">

                <div className="w-full flex flex-col">
                    <label htmlFor="idCard">ID Card (Front & Back)</label>
                    <input type="file" name="idCard" id="idCard" onChange={handleFileChange} className="px-3 py-2 rounded-lg border-2 border-slate-200" />
                </div>

                <div className="w-full flex flex-col">
                    <label htmlFor="enrolmentCertificate">Enrolment Certificate (Attestation de Scolarité)</label>
                    <input type="file" name="enrolmentCertificate" id="enrolmentCertificate" onChange={handleFileChange} required className="px-3 py-2 rounded-lg border-2 border-slate-200" />
                </div>

                <div className="w-full flex flex-col">
                    <label htmlFor="internshipAgreement">Internship Agreement (Convention de Stage)</label>
                    <input type="file" name="internshipAgreement" id="internshipAgreement" onChange={handleFileChange} required className="px-3 py-2 rounded-lg border-2 border-slate-200" />
                </div>

                <div className="w-full flex flex-col">
                    <label htmlFor="internshipInsurance">Internship Insurance (Assurance de stage)</label>
                    <input type="file" name="internshipInsurance" id="internshipInsurance" onChange={handleFileChange} required className="px-3 py-2 rounded-lg border-2 border-slate-200" />
                </div>

                <div className="w-full flex flex-col">
                    <label htmlFor="cv">Resume/CV (En/Fr)</label>
                    <input type="file" name="cv" id="cv" onChange={handleFileChange} required className="px-3 py-2 rounded-lg border-2 border-slate-200" />
                </div>

                <div className="w-full flex flex-col">
                    <label htmlFor="coverLetter">Cover Letter (Lettre de Motivation)</label>
                    <input type="file" name="coverLetter" id="coverLetter" onChange={handleFileChange} required className="px-3 py-2 rounded-lg border-2 border-slate-200" />
                </div>

            </div>

        </form>
    );
}

export default DocumentsStep;