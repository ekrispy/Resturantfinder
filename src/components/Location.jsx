import react from 'react';
import { FastFoodContext } from '../context/FastFoodContext';

const Location = () => {
    const { state, fetchLocations } = useContext(FastFoodContext);
    const { chain, locations, status, error } = state;

    useEffect(() => {
        fetchLocations(chain);
    }, [chain, fetchLocations]);

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'failed') {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
          <h1>{chain.toUpperCase()} Locations in the USA</h1>
          <ul>
            {locations.map((location) => (
              <li key={location.id}>
                {location.name} - {location.address}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Location