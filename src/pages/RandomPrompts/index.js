import React, { useEffect, useState } from "react";
import { RandomImage, RandomWord, Card } from "../../components";
import axios from "axios";
import Styles from "./style.module.css";

const imagesURL =
  "https://api.unsplash.com/photos/random?client_id=KlqKTIHfc9rS-ilCMxEZx_0-XF5g8PKXySEU5IiCVOM";
const wordsURL = "https://random-word-api.herokuapp.com/word";

const RandomPrompts = () => {
  const [randomImage, setRandomImage] = useState();
  const [randomWord, setRandomWord] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        let { data } = await axios.get(imagesURL);
        setRandomImage(data.urls.thumb);
      } catch (error) {
        setErrorMessage("There was an error getting your random image");
      }

      // console.log(data.urls);
    };
    getData();
  }, []);

  useEffect(() => {
    const getWords = async () => {
      try {
        const data = await axios.get(wordsURL);
        console.log(data);
        const randomWord = data.data;
        setRandomWord(randomWord);
      } catch (error) {
        setErrorMessage("There was an error getting your random word");
      }
    };
    getWords();
  }, []);

  return (
    <>
      <h2>Random Prompts</h2>
      <div className={Styles.randomsDescription}>
        <p>
          Looking for a quick prompt to kick off your creative flow? Try out one
          (or all!) of the categories below to get a different type of random
          prompt. Use it for anything from quick sketch practise to ideation for
          big art pieces and everything in between!
        </p>
      </div>
      <div className={Styles.randomsContainer}>
        {randomImage && (
          <Card title="Random Image" child={<img src={randomImage} />} />
        )}
        {randomWord && <Card title="Random Word" child={<p>{randomWord}</p>} />}
      </div>
    </>
  );
};

export default RandomPrompts;
