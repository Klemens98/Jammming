import React from 'react';
// import Track from 'Track';
// import SearchResults from "App.js";


export class TrackList extends React.Component{
    redner(){



        return(
            <div className="TrackList">
                    {this.props.tracks.map()}
            </div>
        )





    }
}