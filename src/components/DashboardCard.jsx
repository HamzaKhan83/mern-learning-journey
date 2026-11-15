function DashboardCard({title,number,description}) {
    return (
        <div>
            <h3>{title}</h3>
            <h1>{number}</h1>
            <p>{description}</p>
        </div>
    );
}

export default DashboardCard;