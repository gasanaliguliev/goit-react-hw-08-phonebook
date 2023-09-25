import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { changeFilter } from '../../redux/contacts/filterReducer';

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <FilterLabel htmlFor="filter">
      Find contacts by name{' '}
      <FilterInput
        label="Filter contacts"
        variant="outlined"
        size="small"
        id="filter"
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
        placeholder="Enter name to find"
      />
    </FilterLabel>
  );
};

export default Filter;
