import React from 'react';

export interface ISortersProps<T> {
  obj: T;
  setProperty: (property: keyof T) => void;
}

const Sorters = <T extends object>(props: ISortersProps<T>): JSX.Element => {
  const { obj, setProperty } = props;

  return (
    <div className="row justify-content-center m-3">
      <label
        htmlFor="sorters"
        className="mt-3"
      >
        Sorters! Try us too....
      </label>
      <div className="col-3">
        <select
          id="sorters"
          className="form-select"
          aria-label="generic select dropdown"
          onChange={(e) => {
            setProperty(e.target.value as keyof T);
          }}
        >
          {Object.keys(obj).map((key) => {
            return (
              <option
                key={key}
                value={key}
              >
                Sort by {key}!
              </option>
            );
          })}
          {/* <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option> */}
        </select>
      </div>
    </div>
  );
};

export default Sorters;
