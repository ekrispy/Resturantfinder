import React,  { useState , useEffect} from "react";
import axious from "axios";

const Resturants = () => {
    const [resturants, setResturants] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {   
        axious.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        .then((response) => {
            setResturants(response.data.data.cards[2].data.data.cards);
        })  
    }, []);
    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {resturants
                    .filter((resturant) =>
                        resturant.data.name 
                            .toLowerCase()  
                            .includes(search.toLowerCase())
                    )   
                    .map((resturant) => (   
                        <li key={resturant.data.id}>
                            {resturant.data.name}
                        </li>
                    ))} 
            </ul>
        </div>
    );
};
export default Resturants;