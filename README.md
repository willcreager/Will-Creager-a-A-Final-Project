# Spumblr

[Heroku link][heroku]

[heroku]: link TBD

## Minimum Viable Product
My final proect is a clone of Tumblr built on Rails and Backbone, but with the
twist that it is solely for sports blogs. It will be similar to Bleacher Report,
except that all users can create blogs and write their own posts. Users can:

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create blogs
- [ ] Tag what team (in the MLB, NBA or NFL) their blog is about
- [ ] Create blog posts
- [ ] View blogs and posts
- [ ] Subscribe to blogs
- [ ] View a feed of subscribed blogs
- [ ] Search for blogs by leagues
- [ ] Search for blogs by specific team tags

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication and log in (~.5 days)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create an account
and then log into their account with a session token. The most important part
of this phase will be pushing the app to Heroku and ensuring that log ins work
before moving on to phase 2.

[Details][phase-one]

### Phase 2: Creating blogs and tag blogs (~1 day)
I will allow users to create new blogs and tag what team their blog is about
using simple Rails forms. By the end of this phase, users can create their own blogs.

[Details][phase-two]

### Phase 3: Creating and Displaying Posts (~1 days)
I will create backbone models, collections and views so that users can create
new posts for one of their blogs. By the end of this phase, users should be able
to make new posts and then view the index of posts for each of their blogs and
other people's blogs as well.

[Details][phase-three]

### Phase 4: Subscriptions and User Feeds (~2-3 days)
First I'll add a button next that says either 'subscribe' or 'unsubscribe'
depending on the current subscription status when on the show page of another
user's blogs. I'll then add a `feed` route that uses the `current_user`'s
`subscribed_blogs` association to serve a list of blog posts ordered
chronologically. On the Backbone side, I'll make a `FeedPosts` collection that
fetches from the new route, then create a `FeedShow` view that uses the new
collection. By the end of this phase, users can subscribe to blogs and then view
a feed of recent posts from their subscribed blogs.

[Details][phase-four]

### Phase 5: Searching for Blogs (~1-2 days)
I'll create a nav bar at the top of the page so that when you hover over a
league the bar will drop down, displaying a list of all the teams in that
league. Users can then click on a specific team, and it'll redirect them to an
index of blogs whose tag matches the selected team. By the end of this phase,
users can easily see a list of blogs about their favorite teams.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Allow users to put images in their posts
- [ ] Allow users to rate other users' blogs
- [ ] Display average user rating for blogs
- [ ] Make user profiles where they can select teams as their 'favorite teams'
- [ ] Suggest blogs users would like based on blog ratings and/or profile info
- [ ] Allow users to post comments on blog posts

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
