![alt text](https://github.com/allsouza/Take-a-Hike/blob/master/frontend/src/images/Take_A_Hike.jpg?raw=true)

Take a Hike is hiking assitant app where you can find/share/rate trails around you, save favorites to your profile, create lists and follow like minded hikers.

## Background and Overview

Due to the quarantine demand for access to nature and outdoor excursions has greatly risen.  While there are websites that allow you to find hikes in your area, there remains a dearth of resources connecting individual hikers with like minded individuals.  Often times, hikers will arrive at a hike ill prepared and won't enjoy their experience to the fullest.  

Take a Hike aims to alleviate this by creating a platform that connects hikers to each other.  Users will be able to share equipment lists with each other and to review and rate hikes in the area allowing their followers to have a better insight on what to expect. 

## Technologies Stack
Technologies stack:
+ MongoDB
+ NoSQL Database
+ Javascript
+ React/Redux
+ Google Maps Javascript API
+ Hiking Project Trails API


## Functionality and MVP
 
  * Splash page and User Auth
  * User lists
  * Trail API integration
  * Trail reviews
  * Followers and Dashboard
  * Production ReadMe
  
 ## Technologies and Challenges
 
 Take a Hike will use the MERN stack(MongoDB, Express, React, Node.js).
 
 We will use:
   * Hiking Project API to fetch and display trail information to users.
   * AWS for adding pictures to reviews
   
 ### Backend: MongoDB/Express
 
 Users will be able to save lists and references to saved hikes and followers/followees in the database.
 
 Trails will be saved to the database using information fetched from the API while adding more information gathered by the app.
 
 Lists will be saved to the database allowing them to be shared amongst users.
 
 Reviews will be refer to a specific trail being able to hold photos and a user rating and description of said trail.
 
 ### Frontend: React/Redux/Node.js
 
 Provide a nice interface for users to find/save trails, create/share lists and share reviews regarding trails they have done.
 
 Technical challanges:
   * Implementing the API and making sure we display the correct information.
   * Seeding AWS library
   * Making sure that lists can only be viewed by permitted users(owner and shared with)
   
## Features

### Trails Map

Using the Google Maps API in conjunction with the Hiking Project API, Take-a-Hike creates a dynamic map that finds trails near any location that you wish to search. Using these technologies you are able to:
+ Find trails within a 10 mile radius of your search location. 
+ Find essential information about the hike while still in the form. 
+ Go to a larger trail show page which includes user reviews, rating, and extensive information about the trail. 

![alt text](https://github.com/AAfghahi/Hermes/blob/master/app/assets/images/map_utility.gif)

Using bounds we were able to make constant calls to the Hiking API based on the map's location, which then updates the trail markers:
 ```
onIdle: () => {
          const mapBounds = refs.map.getBounds();
          const northEast= mapBounds.getNorthEast();
          const southWest= mapBounds.getSouthWest();
          const bounds = { northEast: {lat: northEast.lat(), lng: northEast.lng()}, southWest: {lat: southWest.lat(), lng: southWest.lng()}}
          this.props.updateBounds(bounds);
          this.props.getTrails({lat: refs.map.getCenter().lat(), lon: refs.map.getCenter().lng()})
          this.setState({
            trails: Object.values(this.props.trails)
          })
 ```

### Lists Editor

Using Quill, we created a rich text editor that lives in the user dashboard. 
+ This allows a user to create and share lists that they have created.
+ Other users cannot edit a list created by another user. 

![alt text](https://github.com/AAfghahi/Hermes/blob/master/app/assets/images/hiking.gif?raw=true)

 ```
 
 import React from 'react';
 import { openModal } from '../../actions/modal_actions';
 import ListIndexItem from './list_index_item';

class ListIndex extends React.Component {
    constructor(props) {
        super(props)
        this.newList = this.newList.bind(this);
    }

    componentDidMount() {
        this.props.fetchLists()
    }

    newList(){
        this.props.openModal('newList');
    }

    // map in props from List index to list index item

    render() {
        return (
            <div className="list-index">
                
                <ul>
                    {this.props.lists.map(list => {
                        return <li key={list._id} onClick={() => {this.props.editList(list)}}>
                            <ListIndexItem list={list} deleteList={this.props.deleteList} editList={this.props.editList}/>  </li>
                    })} 
                </ul>
                 <button onClick={this.newList}>Create List</button>
            </div>
        )
    }
}

 ```
### Reviews
Users are able to create reviews for each trail that show up on each page's review page. 


### Future Functionality

+ Users will be able to favorite trails, which will show up in their dashboard. 
+ Users will be able to follow and be followed by other users, you will then be able to see their trails and lists. 
