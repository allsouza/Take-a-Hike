# Take-a-Hike

## Back-end Routes

### `users`
* `GET /api/users/:id` - Finds the user, and returns their routes, their preferred trails, their comments, and their lists. 
* `POST /api/users/register` - Lets a new user sign up
* `POST /api/users/login` - Signs in the user
* `GET /api/users/:user_id/trails` - returns all trails that a user has saved.  ?wouldn't these two gets be associations? so not necessary as a route?
* `GET /api/users/:user_id/trails/:id` - finds and returns a specific trail for a user. 
* `POST /api/users/:user_id/trails` - saves a trail in the user's directory (favorites a trail)
* `DELETE /api/users/:user_id/trails/:id` - deletes a trail from a user's list. 

### `lists`
* `GET /api/lists` - returns lists that a user has created
* `GET /api/list/:id` - returns a specific list. 
* `POST /api/lists` - creates a list
* `PATCH /api/lists/:id` - edit a list
* `DELETE /api/lists/:id` - delete a list

### `trails`
* `GET /api/trails` - finds and returns trails with data from Hiking Project API and other local data
* `GET /api/trails/:id` - fetches a specific trail with data from Hiking Project API and other local data
* `GET /api/trails/:id/reviews` - finds the reviews that a trail has. 
* `GET /api/trails/:trail_id/reviews/:id` - finds a specific review that a trail has. 

### `Reviews`
* `POST /api/reviews ` - creates a review for a trail. 
* `PATCH /api/reviews/:id` - lets user edit a review that they left on a trail. 
* `DELETE /api/reviews/:id` - delete a review that has been left on a trail. 
 
### `Followers`
* `GET /api/users/:user_id/followers` - gets all the followers associated with a user.
* `GET /api/followers/:id` - returns user/follower information (Name, email, saved trails, reviews)
* `GET /api/users/:user_id/following` - returns users followed by this user.
* `POST /api/users/:user_id/follow` - follow another user. 
* `DELETE /api/users/:user_id/unfollow` - stop following a user.


## Schema

### User

| Column       | Data Type | Required |
|--------------|-----------|----------|
| username     | String    | Yes      |
| firstName    | String    | Yes      |
| lastName     | String    | Yes      |
| zipcode      | integer   | Yes      |
| email        | String    | Yes      |
| birthdate    | date      | No       |
| password     | String    | Yes      |
| savedTrails  | Object    | No       |
| lists        | Object    | No       |
| followers    | Object    | No       |
| following    | Object    | No       |
| timestamps   |           | true     |

### Trail

| Column      | Data Type | Required |
|-------------|-----------|----------|
| API id      | integer   | Yes      |
| avg_rating  | integer   | No       |
| review_ids  | Object    | No       |
| hikerCount  | integer   | No       |
| timestamps  |           | true     |

### List

| Column     | Data Type | Required |
|------------|-----------|----------|
| authorId   | integer   | Yes      |
| title      | String    | Yes      |
| body       | String    | No       |
| timestamps |           | true     |

### Review

| Column     | Data Type | Required |
|------------|-----------|----------|
| authorId   | integer   | Yes      |
| title      | String    | Yes      |
| body       | String    | No       |
| rating     | integer   | Yes      |
| pictures   | ? array?  | No       |
| timestamps |           | true     |

## Frontend Routes and Components

### Components
* `Root`
    * `App`
      * `Navbar`
      * `Splash`
      * `Footer`
    * `Auth`
      * `Navbar`
      * `routed components`
      * `footer`
### Routes
The following routes, defined in `App`, will render components between `NavBar` and `Footer`.

* /
  * `Splash`
* `/login`
  * `SessionForm`
* `/signup`
  * `SessionForm`
* `/users/:user_id`
  * `ProfileComponent`
    * `TrailIndex`
       * `TrailItem`
       * `ReviewsIndex`
       * `FollowersIndex`
* `/users/:user_id/lists`
  * `ListsComponent`
* `/users`
  * `UsersIndex`
* `/trails`
  * `TrailsIndex`
* `/trails/:trail_id`
     * `TrailShow`
* `/trails/:trail_id/review/new`
     * `ReviewForm`
* `/trails/:trail_id/review/:review_id`
     * `EditReview`
     * `DeleteReview`
     
## Sample State

``` 
{
  entities: {
    trails: {
      1: {
        id: 1,
        name: "Boulder Skyline Traverse",
        summary: "The classic long mountain route in Boulder.",
        state: "California",
        difficulty: "hard",
        ascent: 5480,
        high: 8454,
        low: 5423,
        latitude: 39.9388,
        longitude: -105.2582,
        location: "Boulder, Colorado",
        reviewIds: [6, 7, 12],
        conditionSatus: "All Clear",
        conditionDetails: "Dry",
        averageRating: 4.3,
        hikerCount: 10
      },
      2: {
        id: 2,
        name: "Walker Ranch",
        summary: "An awesome and challenging hike near Boulder with great scenery.",
        state: "California",
        difficulty: "medium",
        ascent: 1594,
        high: 7335,
        low: 6439,
        latitude: 39.9511,
        longitude: -105.3378,
        location: "Boulder, Colorado",
        reviewIds: [6, 7, 12],
        conditionSatus: "All Clear",
        conditionDetails: "Dry",
        averageRating: 4.3,
        hikerCount: 0
      },
    users: {
      1: {
        id: 1,
        userName: "bigtym3hik3r",
        firstName: "Bill",
        lastName: "Simmons",
        email: "bsimmons@gmail.com",  
        zipcode: 02347,
        birthdate: 09/07/1984,
        savedHikes: [1, 3],
        reviewsIds: [1, 2, 5, 8]        
      },
      2: {
        id: 2,
        userName: "lostindawoodz",
        firstName: "Roger",
        lastName: "Jones",
        email: "rog.jones@gmail.com",  
        zipcode: 02561,
        birthdate: 12/11/1992,
        savedHikes: [1, 3],
        reviewsIds: [1, 2, 5, 8]        
      }
    },
    reviews: {
      1: {
        id: 1,
        reviewerId: 3,
        trailId: 4,
        title: "I was hungry",
        body: "The trail is really well maintained, not too challenging, but no where to buy food nearby",  
        rating: 5,  
        pictures ?
      },
      2: {
        id: 2,
        reviewerId: 4,
        trailId: 12,
        title: "Wow!"
        body: "challenging, but the view is worth it!",  
        rating: 5,    
        pictures ?
      },
  },
  ui: {
    loading: true/false,
    filters: ,
    modal: null or string of active modal
  },
  errors: {
    login: ["Incorrect username or password"],
    signUp: ["Zipcode cannot be blank", "First Name Field cannot be blank", "Last Name cannot be blank", "Email cannot be blank"]
    reviewForm: ["Review cannot be submitted if the body is blank"]
  },
  session: { currentUserId: 15 }
}


```
