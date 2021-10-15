import './TravelPost.css';

function TravelPost(props) {
    const { travel, onBgClick } = props;
    return (
        <div className="travel-post" onClick={onBgClick}>
            <div className="travel-bg"  />
            <div className="travel-content">
                <img src={travel.fullUrl} />
                <h3>{travel.title}</h3>
                <div className="travel-content">
                    <p>{travel.yut}</p>
                </div>
            </div>
        </div>
    );
}

export default TravelPost;