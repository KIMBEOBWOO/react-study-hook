import React from 'react';
import Info from './Info';

const Test = () => {
  const [color, setColor] = React.useState("");
  const [movie, setMovie] = React.useState("");

  const onChangeHandler = (e:any) => {
    if (e.target.id === "color") setColor(e.target.value);
    else setMovie(e.target.value);
  };

  /* useCallBack */
  // const onChangeHandler = React.useCallback(e => {
  //   if (e.target.id === "color") setColor(e.target.value);
  //   else setMovie(e.target.value);
  // }, []);

  return (
    <div className="App">
      <div>
        <label>
          What is your favorite color of rainbow ?
          <input id="color" value={color} onChange={onChangeHandler} />
        </label>
      </div>
      <div>
        What is your favorite movie among these ?
        <label>
          <input
            type="radio"
            name="movie"
            value="Marriage Story"
            onChange={onChangeHandler}
          />
          Marriage Story
        </label>
        <label>
          <input
            type="radio"
            name="movie"
            value="The Fast And The Furious"
            onChange={onChangeHandler}
          />
          The Fast And The Furious
        </label>
        <label>
          <input
            type="radio"
            name="movie"
            value="Avengers"
            onChange={onChangeHandler}
          />
          Avengers
        </label>
      </div>
      <Info color={color} movie={movie} />
    </div>
  );
};

export default Test;