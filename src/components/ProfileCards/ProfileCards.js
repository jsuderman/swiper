import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import axios from "../../axios";
import "./ProfileCards.css"


function ProfileCards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
           const req = await axios.get('/swiper/cards');

           setPeople(req.data);
        }

        fetchData();
    }, []);

    console.log(people)

    const swiped = (direction, nametoDelete) => {
        console.log("removing" + nametoDelete);
    };


    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    }

    return (
        <div className="profileCards">
            <div className="profileCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(direction) => swiped(direction, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                        style={{ backgroundImage: `url(${person.imgUrl})` }}
                        className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                    
                ))}
            </div>

        </div>
    )
}

export default ProfileCards
