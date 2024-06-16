const DashboardStepButton = ({ stepIndex, label, icon, isUnlocked, onClick, isActive }) => {

    const onClickHandler = (e) => {
        e.preventDefault();
        onClick(stepIndex);
    }

    return (
        <button onClick={isUnlocked ? onClickHandler : null} disabled={!isUnlocked} className={`px-2 py-1.5 text-center first:rounded-l-lg last:rounded-r-lg ${isUnlocked ? `text-white ${isActive ? "bg-mainColor" : "bg-mainColorOnHover"}` : "text-slate-500 bg-slate-200"}`}>{label}</button>
    );
}

export default DashboardStepButton;