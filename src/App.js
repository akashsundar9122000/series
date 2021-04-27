
import './App.css';
import { useState } from 'react';

var seriesDictioanry={
  Comedy: [
    {
      Title: "Friends ",
      Description:
        "This show is about 6 friends who go through every life experience imaginable together; love, marriage, divorce, children, heartbreaks, fights, new jobs and job losses and all sorts of drama.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Friends_season_one_cast.jpg/220px-Friends_season_one_cast.jpg",
      Rating: `8.9/10`,
      AvailableAt : "Netflix"
    },
    {
      Title: "The Office",
      Description:"The Office is an American mockumentary sitcom television series that depicts the everyday work lives of office employees in the Scranton, Pennsylvania, branch.",
      Image:"https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
      Rating : '8.9/10',
      AvailableAt:"Amazon Prime"
    },
    {
      Title: "The Big Bang Theory",
      Description:
        "This series is about brilliant physicists who don't know how to interact with people, especially women. All this begins to change when a free-spirited woman moves in next door.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/The_Big_Bang_Theory_%28Official_Title_Card%29.png/250px-The_Big_Bang_Theory_%28Official_Title_Card%29.png",
      Rating: `8.1/10`,
      AvailableAt : "Netflix"
    },
    {
      Title:"Brooklyn Nine Nine",
      Description: "Ray Holt, an eccentric commanding officer, and his diverse and quirky team of odd detectives solve crimes in Brooklyn, New York City." , 
      Image:"https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_.jpg",
      Rating: '8.3/10',
      AvailableAt : 'Netflix'
    },
    {
      Title: "Young Sheldon",
      Description:
        "This series is about a child genius named Sheldon Cooper and his family. Some unique challenges face Sheldon who seems socially impaired.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/Young_Sheldon_title_card.png/250px-Young_Sheldon_title_card.png",
      Rating: `7.4/10`,
      AvailableAt : "Netflix"
    }
  ],
  Drama: [
    {
      Title: "Scam 1992,The Harshad Mehta Story",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Scam_1992_poster.png/250px-Scam_1992_poster.png",
      Description:
        "Set in 1980's & 90's Bombay, Scam 1992 follows the life of Harshad Mehta - a stockbroker who single-handedly took the stock market to dizzying heights & his catastrophic downfall.",
      Rating: `9.5/10`,
      AvailableAt : "Amazon Prime"
    },

    {
      Title: "Panchayat",
      Description:
        "This series chronicles the life of engineering graduate who joins as a Panchayat secretary in a remote village due to lack of better job options.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Panchayat_logo.jpg/250px-Panchayat_logo.jpg",
      Rating: `8.7/10`,
      AvailableAt : "Amazon Prime"
    },

    {
      Title: "The Family Man",
      Description:
        "A working man from the National Investigation Agency tries to protect the nation from terrorism, but he also needs to keep his family safe from his secret job.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/The_Family_Man.jpeg/250px-The_Family_Man.jpeg",
      Rating: `8.6/10`,
      AvailableAt : "Amazon Prime"
    }
  ],

  Crime: [
    {
     Title:"Peaky Blinders",
     Description :"Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.",
     Image:"https://m.media-amazon.com/images/I/71HoryWKeXL._AC_SY741_.jpg",
     Rating:"8.8/10",
     AvailableAt:"Netflix"
    },
    {
      Title: "Sacred Games",
      Description:
        "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm.",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Sacred_Games_Title.png/250px-Sacred_Games_Title.png",
      Rating: `8.7/10`,
      AvailableAt : "Amazon Prime"
    },
    {
      Title: "Mirzapur ",
      Image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Poster_of_Mirzapur_2018.jpg/220px-Poster_of_Mirzapur_2018.jpg",
      Description:
        "A shocking incident at a wedding procession ignites a series of events entangling the lives of two families in the lawless city of Mirzapur.",
      Rating: `8.4/10`,
      AvailableAt : "Amazon Prime"
    }
  ],
  Scify : [
    {
      Title : "Dark",
      Description:"When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids.",
      Image:"https://assets.telegraphindia.com/telegraph/9ee8d472-70cb-485f-871a-8f886b8525f7.jpg",
      Rating:"8.8/10",
      AvailableAt:"Netflix"
    },{
      Title : "Stranger Things",
      Description:"In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
      Image:"https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_.jpg",
      Rating:"8.8/10",
      AvailableAt:"Netflix"
    },
    {
      Title : "Westworld",
      Description:"In a futuristic Western-themed amusement park, Westworld, the visitors interact with automatons. However, all hell breaks loose when the robots begin malfunctioning.",
      Image:"https://m.media-amazon.com/images/M/MV5BMTRmYzNmOTctZjMwOS00ODZlLWJiZGQtNDg5NDY5NjE3MTczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      Rating:"8.7/10",
      AvailableAt:"Disney+"
    }
  ]
};
const seriesGenre = Object.keys(seriesDictioanry);

function App() {

  var [name,setName]=useState(seriesDictioanry.Comedy);

  function chooseGenre(genre){
    setName(seriesDictioanry[genre]);
    return(
      <h1>{genre}</h1>
    )
  }

  function printList(series){
    const title = series.Title;
    const image = series.Image;
    const description = series.Description;
    const ratings = series.Rating;
    const available = series.AvailableAt;

    const details=(
      <li>
        <div style={{ padding: "0rem 1rem" }}>
        <img alt="poster" src={image} />
        <h3 style={{color:"black"}}>{title}</h3>
          <p>{description}</p>
          
          <h3 style={{color:"black"}}><strong>IMDB:{ratings}</strong></h3>
          
          <h3><span style={{color:"black"}}>Available At :</span> {available}</h3>
        </div>
      </li>
    );
    return details;
  }
  
  return (
    <div className="App">
      <nav className="navigationBar">
        <div className="navigationHeader"><h1 style={{textAlign:"center",fontWeight:"bold",fontSize:"30px"}}>Series Suggestion</h1>
        <p style={{textAlign:"center"}}><strong>Here you can find the best series on the genre you choose.</strong></p>
        <br></br>
        
          {seriesGenre.map((genre)=>{
            return(
              <button className="buttonStyle" onClick={()=>chooseGenre(genre)}>
                <strong>{genre}</strong>
              </button>
            );
          })}
          </div>
          
        </nav>
        <div className="bodyContent">
        <ul type="none">
          {name.map((contents) => {
            return printList(contents);
          })}
        </ul>
        </div>
      
    </div>
  );
}

export default App;
