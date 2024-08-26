import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;

  @media (max-width: 480px) {
    gap: 0.8rem;
    margin-top: 1.5rem;
    margin-bottom: -1.5rem;
    margin-left: 1.8rem;
    width: 90%;
  }
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active === 'true' &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    width: 100%;
  }

  @media (min-width: 480px) and (max-width: 720px) {
    font-size: 1.25rem;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  const handleClick = (value) => {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  };
  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          onClick={() => handleClick(option.value)}
          key={option.value}
          active={(option.value == currentFilter).toString()}
        >
          {option.option}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
