# Take a Hike

## Take a Hike

Take a Hike is hiking assitant app where you can find/share/rate trails around you, save favorites to your profile, create lists and follow like minded hikers.

## Background and Overview

Due to the quarantine demand for access to nature and outdoor excursions has greatly risen.  While there are websites that allow you to find hikes in your area, there remains a dearth of resources connecting individual hikers with like minded individuals.  Often times, hikers will arrive at a hike ill prepared and won't enjoy their experience to the fullest.  

Take a Hike aims to alleviate this by creating a platform that connects hikers to each other.  Users will be able to share equipment lists with each other and to review and rate hikes in the area allowing their followers to have a better insight on what to expect. 

## Functionality and MVP
 
  * Splash page and User Auth
  * User lists
  * Trail API integration
  * Trail reviews
  * Followers and Dashboard
  * Production ReadMe
  
 ## Technologies and Challanges
 
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
   
 ## Group Members and Work breakdown
 
 ### October 3-4
 
  * Created documentation - Everyone
  * Investigate API for integration - John, Andre
  * Create website logo - Brendon
  * Set up MongoDB - Arash, Andre
  
 ### October 5
 
  * Back-end User Auth - Andre and Arash
  * Splash - Brendon
  * Front-end User Auth - John
  
 ### October 6
  * Back-end List and start Trails backend - Arash
  * List Rich Text editor component - Andre
  * List form and container - John
  * Finish styling components from day before and style Lists - Brendon
  
 ### October 7
  * Trails and Reviews backend - Arash
  * Trail API integration - John
  * Trail Index Components - Andre
  * Trail Show Component - Brendon
  
 ### October 8
  * Followers backend - Arash
  * Review Forms(Create/Edit) - Brendon
  * Review AWS integration - John
  * Review Index/Trail integration - Andre
  
 ### October 9
  * Complete production ReadMe - Arash
  * Final touches and debugging - Everyone
