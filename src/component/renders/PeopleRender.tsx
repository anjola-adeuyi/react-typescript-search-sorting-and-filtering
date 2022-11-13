import React from 'react';
import Moment from 'react-moment';
import IPerson from '../../interfaces/IPerson';

interface IPeopleRenderProps extends IPerson {}

const WidgetRender = (props: IPeopleRenderProps) => {
  const { firstName, birthday, eyeColor, lastName } = props;
  return (
    <div className="col-lg-4 p-3">
      <div className={'card'}>
        <div className="card-body">
          <h1 className="card-title">
            {firstName} - {lastName}
          </h1>
          <p className="card-text">My eye color is {eyeColor}</p>
        </div>
        <div className="card-footer text-muted text-right">
          Birthday:{' '}
          <Moment
            fromNow
            date={birthday}
            format="MM/DD/YYYY"
          />
        </div>
      </div>
    </div>
  );
};

export default WidgetRender;
