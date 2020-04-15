import React, { useState, useEffect} from "react";
import { api_key } from "../nasa_api_key";
import axios from "axios";
import Header from "./header/Header";
import Home from "../components/content/Home";
import Apod from "../components/content/Apod";
import PhotoByDate from "../components/content/PhotoByDate";
import Footer from "../components/footer/Footer";

function App() {
  const [data, setData] = useState({});
  const [curPage, setCurPage] = useState(<Home />);
  const [curLocation, setCurLocation] = useState("");
  const curDate = new Date();
  const [date, setDate] = useState(curDate);


  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()}`)
      .then(response => {
        //console.log(response.data);
        setData(response.data);
      })
      .catch(err => console.log("Error:", err));
  }, [date]);
  
  useEffect(() => {

    switch(curLocation) {
      case "":
        setCurPage(<Home />);
        break;
      case "#apod":
        setCurPage(<Apod data = {data} today = {setDate} />);
        break;
      default:
        setCurPage(<Home />);
    }
  }, [curLocation, data]);

  

  return (
    <div className="container">
      <Header getAnchor = {setCurLocation}/>
      <section className = "content">
        {/* <Apod data = {data} /> */}
        {curPage}
      </section>
      <Footer />

    </div>
  );
}

export default App;
