import React from 'react';
import classes from './singleService.module.css';

function SingleService(props) {
    const { img, title, text, index } = props;
    return (
        <div className={`${classes.singleService} ${classes.boxShadow}`}>
            <div className={classes.imgBox}>
                <img src={img} className={classes.serviceImg} alt={`service-${index}`} />
            </div>
            <h3 className={classes.serviceTitle}>{title}</h3>
            <p className={classes.serviceText}>{text}</p>
        </div>
    );
}

export default SingleService;
