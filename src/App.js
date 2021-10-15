import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import AppSearch from './components/AppSearch';
import TravelItem from './components/TravelItem';
import TravelPost from './components/TravelPost';
import travel from './data/travel';

function App() {
    const [selected, setSelectedTravel] = useState(null);
    const [searchText, setSearchText] = useState('');

    function onTravelOpenClick(travel) {
        setSelectedTravel(travel);
    }

    function onTravelCloseClick() {
        setSelectedTravel(null);
    }

    const travelItems = travel.filter((travel) => {
        return travel.title.includes(searchText);
    }).map((travel, index) => {
        return <TravelItem key={index} travel={travel} onTravelClick={onTravelOpenClick} />;
    });

    let travelPost = null;
    if (selected) {
        travelPost = <TravelPost travel={selected} onBgClick={onTravelCloseClick} />;
    }

    return (
        <div className="app">
            <AppHeader />
            <section className="app-section">
                <div className="app-container">
                    <AppSearch value={searchText} onValueChange={setSearchText} />
                    <div className="app-grid">
                        {travelItems}
                    </div>
                </div>

            </section>
            {travelPost}
        </div>
    );
}

export default App;
