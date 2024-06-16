import { useEffect, useState } from "react";
import { useUserContext } from "../../../../contexts/UserContext";
import InternAPI from "../../../../api/InternAPI";

const PersonalInformationStep = () => {

    const { user, token } = useUserContext();
    const [phoneNumber, setPhoneNumber] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [birthPlace, setBirthPlace] = useState("");
    const [schoolName, setSchoolName] = useState("");
    const [major, setMajor] = useState("");
    const [educationLevel, setEducationLevel] = useState("");

    useEffect(() => {
        InternAPI.getPersonalInformation(token)
            .then((response) => {
                console.log(response);
                setPhoneNumber(response.data.phone_number);
                setBirthDate(response.data.birth_date);
                setBirthPlace(response.data.birth_place);
                setSchoolName(response.data.school_name);
                setMajor(response.data.major);
            });
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={submitHandler} className="p-5 space-y-5">

            <div className="grid grid-cols-2 gap-5">

                <div className="w-full flex flex-col">
                    <label htmlFor="first-name">First Name <span className="text-red-500 font-bold">*</span></label>
                    <input type="text" name="first-name" id="first-name" value={user.firstName} placeholder="First Name" disabled className="h-12 px-3 py-2 rounded-lg border-2 border-slate-200 text-gray-500 bg-gray-100" />
                </div>

                <div className="w-full flex flex-col">
                    <label htmlFor="lastName">Last Name <span className="text-red-500 font-bold">*</span></label>
                    <input type="text" name="lastName" id="lastName" value={user.lastName} placeholder="Last Name" disabled className="h-12 px-3 py-2 rounded-lg border-2 border-slate-200 text-gray-500 bg-gray-100" />
                </div>

                <div className="w-full flex flex-col">
                    <label htmlFor="email">Email <span className="text-red-500 font-bold">*</span></label>
                    <input type="email" name="email" id="email" value={user.email} placeholder="email@example.com" disabled className="h-12 px-3 py-2 rounded-lg border-2 border-slate-200 text-gray-500 bg-gray-100" />
                </div>

                <div className="w-full flex flex-col">
                    <label htmlFor="phone">Phone Number <span className="text-red-500 font-bold">*</span></label>
                    <input type="phone" name="phone" id="phone" value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} required placeholder="+212 610203040" className="h-12 px-3 py-2 rounded-lg border-2 border-slate-200" />
                </div>

                <div className="w-full flex flex-col">
                    <label htmlFor="birthDate">Birth Date <span className="text-red-500 font-bold">*</span></label>
                    <input type="text" name="birthDate" id="birthDate" value={birthDate} onChange={(e) => { setBirthDate(e.target.value) }} required placeholder="email@example.com" className="h-12 px-3 py-2 rounded-lg border-2 border-slate-200" />
                </div>

                <div className="w-full flex flex-col">
                    <label htmlFor="birthPlace">Birth Place <span className="text-red-500 font-bold">*</span></label>
                    <input type="text" name="birthPlace" id="birthPlace" value={birthPlace} onChange={(e) => { setBirthPlace(e.target.value) }} required placeholder="Khouribga, Morocco" className="h-12 px-3 py-2 rounded-lg border-2 border-slate-200" />
                </div>

                <div className="w-full flex flex-col">
                    <label htmlFor="school">School Name <span className="text-red-500 font-bold">*</span></label>
                    <input type="text" name="school" id="school" value={schoolName} onChange={(e) => { setSchoolName(e.target.value) }} required placeholder="Fullname of the school" className="h-12 px-3 py-2 rounded-lg border-2 border-slate-200" />
                </div>

                <div className="w-full flex flex-col">
                    <label htmlFor="educationLevel">Education Level <span className="text-red-500 font-bold">*</span></label>
                    <input type="text" name="educationLevel" id="educationLevel" value={educationLevel} onChange={(e) => { setEducationLevel(e.target.value) }} required placeholder="Khouribga, Morocco" className="h-12 px-3 py-2 rounded-lg border-2 border-slate-200" />
                </div>

                <div className="w-full flex flex-col">
                    <label htmlFor="major">Major <span className="text-red-500 font-bold">*</span></label>
                    <input type="text" name="major" id="major" value={major} onChange={(e) => { setMajor(e.target.value) }} required placeholder="Computer Science, Mathematics..." className="h-12 px-3 py-2 rounded-lg border-2 border-slate-200" />
                </div>

                <button type="submit">Sufbmit</button>

            </div>

        </form>
    );
}

export default PersonalInformationStep;