
import React, { useState } from 'react';
import styled from 'styled-components';

// REMINDER: Needed quite a bit of help. 

const CheckboxList = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Dogs', checked: false },
    { id: 2, label: 'Cats', checked: false },
    { id: 3, label: 'Cows', checked: false },
    { id: 4, label: 'Deers', checked: false },
  ]);

  function toggleCheckbox() {
    const areAllChecked = checkboxes.every(checkbox => checkbox.checked); // Checks whether all boxes have been activated. 

    const updateCheckboxes = checkboxes.map(checkbox => ({
      ...checkbox, // It creates a new copy of the object. 
      checked: !areAllChecked,
    }));

    setCheckboxes(updateCheckboxes); // Causes a re-render. Without this it would not work. 
  }

  function toggleSingleCheckbox(index) {
    const updatedCheckboxes = checkboxes.map((checkbox, i) =>
      i === index
        ? { ...checkbox, checked: !checkbox.checked } // Toggels the checkbox.
        : checkbox // The other checkboxes stay the same. 
    );
    setCheckboxes(updatedCheckboxes);
  }

  return (
    <>
      <Container>
        <h3>Select all checkboxes:</h3>
        <CheckboxContainer data-testid="checkbox-container">
          {checkboxes.map((checkbox, index) => (
            <CheckboxLabel key={checkbox.id}>
              <input
                data-testid={`checkbox-${index + 1}`}
                type="checkbox"
                checked={checkbox.checked}
                onChange={() => toggleSingleCheckbox(index)}
              />
              {checkbox.label}
            </CheckboxLabel>
          ))}
        </CheckboxContainer>
        <SelectAllButton data-testid="button" onClick={toggleCheckbox} >Select All</SelectAllButton>
      </Container>
    </>
  );
};

export default CheckboxList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 24px;
  padding-left: 2rem;
  width: 15rem;
  height: 16rem;
  outline: 0.5rem solid red;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SelectAllButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
  margin-top: 24px;

  &:hover {
    opacity: 0.8;
  }
`;