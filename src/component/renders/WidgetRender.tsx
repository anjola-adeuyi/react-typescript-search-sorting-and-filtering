import React from 'react';
import Moment from 'react-moment';
import IWidget from '../../interfaces/IWidget';

interface IWidgetRenderProps extends IWidget {}

const WidgetRender = (props: IWidgetRenderProps) => {
  const { id, created, description, isSpecialCard, rating, title, updated } = props;
  return (
    <div className="col-4 p-3">
      <div className={isSpecialCard ? 'card specialCard' : 'card'}>
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <p className="card-text">{description}</p>
          <p className="card-text font-italic">Rating: {rating}/10</p>
        </div>
        <div className="card-footer text-muted text-right">
          <span className="float-left">#{id}</span> Created:{' '}
          <Moment
            fromNow
            date={created}
            format="MM/DD/YYYY"
          />{' '}
          Updated:{' '}
          <Moment
            fromNow
            date={updated}
            format="MM/DD/YYYY"
          />
        </div>
      </div>
    </div>
  );
};

export default WidgetRender;
