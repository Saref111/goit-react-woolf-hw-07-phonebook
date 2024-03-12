import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/filterSlice';

import css from './Filter.module.scss';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name:{' '}
      <input
        type="text"
        onChange={onFilterChange}
        value={filter}
      />
    </label>
  );
};

export default React.memo(Filter);
