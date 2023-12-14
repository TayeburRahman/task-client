import React, { Fragment } from 'react';

const CategorySelector = ({ categories, onSelect, defaultSelected, disabled }) => {
  const renderOptions = (category, level = 0) => (
    <Fragment key={category.name}>
      <option value={category.name} className=''>
        {level > 0 && '\u00a0'.repeat(level * 4)}
        {category.name}
      </option>
      {category.children.map((subCategory) => renderOptions(subCategory, level + 1))}
    </Fragment>
  );

  return (
    <label>
    Sectors: <br/>
    <select
      multiple
      disabled={disabled}
      className='select_input'
      onChange={(e) => onSelect(Array.from(e.target.selectedOptions, (option) => option.value))}
      value={defaultSelected}
    > 
      {categories.map((category) => renderOptions(category))}
    </select>
    </label>
  );
};

export default CategorySelector;