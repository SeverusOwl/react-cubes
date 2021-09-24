import React, { useState } from 'react';
import classNames from 'classnames';
import './cubes.scss';

export const Cubes: React.FC = () => {
  const [selectedCubes, setSelectedCubes] = useState<number[]>([]);
  const [validCubes, setValidCubes] = useState<number[]>([1, 2, 3]);
  const [showError, setShowError] = useState(false);

  const getRandomArray = () => {
    const valid = [];

    for (; validCubes.length < 3;) {
      const number = Math.round(Math.random() * (0 - 7) + 0);

      if (!validCubes.includes(number)) {
        valid.push(number);
      }
    }

    return valid;
  };

  const compareArrays = (selected: number[], valid: number[]) => {
    for (let i = 0; i < selectedCubes.length; i += 1) {
      if (!valid.includes(selected[i]) || selected.length !== valid.length) {
        return false;
      }
    }

    return true;
  };

  const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;

    if (!selectedCubes.includes(+name)) {
      setSelectedCubes([...selectedCubes, +name]);
    } else {
      setSelectedCubes([...selectedCubes.filter(n => n !== +name)]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const error = compareArrays(selectedCubes, validCubes);
    const array = getRandomArray();

    setSelectedCubes([]);
    setValidCubes(array);
    setShowError(error);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <section className="cubes">
          <button
            type="button"
            name="1"
            className={classNames('cube', { selected: selectedCubes.includes(1) })}
            onClick={handleChange}
          >
            {' '}
          </button>
          <button
            type="button"
            name="2"
            className={classNames('cube', { selected: selectedCubes.includes(2) })}
            onClick={handleChange}
          >
            {' '}
          </button>
          <button
            type="button"
            name="3"
            className={classNames('cube', { selected: selectedCubes.includes(3) })}
            onClick={handleChange}
          >
            {' '}
          </button>
          <button
            type="button"
            name="4"
            className={classNames('cube', { selected: selectedCubes.includes(4) })}
            onClick={handleChange}
          >
            {' '}
          </button>
          <button
            type="button"
            name="5"
            className={classNames('cube', { selected: selectedCubes.includes(5) })}
            onClick={handleChange}
          >
            {' '}
          </button>
          <button
            type="button"
            name="6"
            className={classNames('cube', { selected: selectedCubes.includes(6) })}
            onClick={handleChange}
          >
            {' '}
          </button>
        </section>

        <button
          type="submit"
          className="submit"
        >
          Submit
        </button>
        {!showError && (
          <div className="error">
            Error
          </div>
        )}
      </form>
    </>
  );
};
