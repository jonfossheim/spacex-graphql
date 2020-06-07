import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const LaunchSpecific = (props) => {
  let { flight_number } = useParams();
  flight_number = parseInt(flight_number);
  return (
    <>
      <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
        {({ loading, error, data }) => {
          if (loading) return <h4>loading</h4>;
          if (error) return console.log(error);

          const {
            mission_name,
            flight_number,
            launch_date_local,
            launch_year,
            launch_success,
            rocket: { rocket_id, rocket_name, rocket_type },
          } = data.launch;

          console.log(data);
          return (
            <div>
              <h1>Mission: {mission_name}</h1>
              <h3>Launch Details</h3>
              <ul className={'list'}>
                <li className={'list__item'}>Flight Number: {flight_number}</li>
                <li className={'list__item'}>Launch Year: {launch_year}</li>
                <li className={'list__item'}>
                  Launch Successful:{' '}
                  <span
                    className={classNames({
                      'text--success': launch_success,
                      'text--error': !launch_success,
                    })}
                  >
                    {launch_success ? 'yes' : 'no'}
                  </span>
                </li>
                <li className={'list__item'}>Flight Number: {flight_number}</li>
              </ul>
              <h3>Rocket Details</h3>
              <ul className={'list'}>
                <li className={'list__item'}>Rocket ID: {rocket_id}</li>
                <li className={'list__item'}>Rocket Name: {rocket_name}</li>
                <li className={'list__item'}>Rocket Type: {rocket_type}</li>
              </ul>
              <hr />
              <Link className={'btn'} to={'/'}>
                Back
              </Link>
            </div>
          );
        }}
      </Query>
    </>
  );
};

export default LaunchSpecific;
