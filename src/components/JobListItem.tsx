import React from 'react'
interface JobListItemProps {
    id: string;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[]
}

const JobListItem: React.FC<JobListItemProps> = (props) => {
    const { id, company, logo, new: isNew, featured, position, role, level, postedAt, contract, location, languages, tools } = props;
    return (
        <div className="job-list-card">
            <div className="logo-container">
                <img src={logo} alt={company + ' - logo'} />
            </div>
            <div className="company-name-position-state">
                <h3 className='company-name'>{company}</h3>
                <h3>{isNew ? 'NEW' : ''}</h3>
                <h3>{featured ? 'FEATURED' : ''}</h3>

            </div>
            <div>
                <h3>{position}</h3>
            </div>
            <div className='timestamps'>
                <h3>{postedAt}</h3>
                <h3>{contract}</h3>
                <h3>{location}</h3>
            </div>
            <div className="roles-n-skills">
                <hr />
                <h4>{role}</h4>
                <h4>{level}</h4>
                <h4>{languages}</h4>
                <h4>{tools}</h4>
            </div>

        </div>
    )
}
export default JobListItem