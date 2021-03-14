import React, { useState, useEffect } from 'react'
import './tindercards.css'
import TinderCard from "react-tinder-card"
import axios from './axios'

function TinderCards() {

    const [people, setPeople] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards')
            setPeople(req.data)

        }
        fetchData();
    }, [])

    return (
        <div>
            <div className="tindercardcontainer">
                {people.map((person) =>

                (

                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                    // onSwipe={(dir) => swiped(dir, person.name)}
                    // onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.imgurl})` }}
                            className="card">
                            <h2>{person.name}</h2>
                        </div>
                    </TinderCard>
                )
                )}
            </div>
        </div>
    )
}

export default TinderCards
