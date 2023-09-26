import React from 'react';

const MemberCard = ({ data, ...props }) => {
    return (
        <div className='mi-member-card'>
            <div className='mi-member-card-image'><img src={data.image}/></div>
            <div className='mi-member-card-name'>{data.name}</div>
            <div className='mi-member-card-position'>{data.position}</div>
        </div>
    )
}

export default MemberCard;