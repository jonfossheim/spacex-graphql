import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const LaunchItem = ({
  launch: { flight_number, mission_name, launch_date_local, launch_success },
}) => {
  return (
    <div className={'launchitem'}>
      <div className={'launchitem__details'}>
        <h1>
          Mission:{' '}
          <span
            className={classNames({
              'text--success': launch_success,
              'text--error': !launch_success,
            })}
          >
            {mission_name}
          </span>
        </h1>
        <p>
          Date: <Moment format={'DD-MM-YYYY HH:mm'}>{launch_date_local}</Moment>
        </p>
      </div>
      <div className={'launchitem__actions'}>
        <Link
          className={'launchitem__actions--btn btn'}
          to={`/launch/${flight_number}`}
        >
          launch details
        </Link>
      </div>
    </div>
  );
};

export default LaunchItem;
