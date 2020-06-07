import React from 'react';

import LaunchItem from './LaunchItem';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  return (
    <>
      <Query query={LAUNCHES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h4>loading</h4>;
          if (error) return <h4>error</h4>;
          console.log(data);
          return (
            <>
              {data.launches.map((launch) => (
                <LaunchItem key={launch.flight_number} launch={launch} />
              ))}
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Launches;
