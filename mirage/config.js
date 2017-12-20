export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
   */

  this.namespace = '/api';
  let rentals = [
    {
      type: 'rentals',
      id: 'grand-old-mansion',
      //attributes: {
        title: "Grand Old Mansion",
        owner: "Veruca Salt",
        city: "San Francisco",
        "property-type": "Estate",
        bedrooms: 15,
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        description: "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.",
        comments:['comment1']
     // }
    }
  ];

  this.get('/rentals', function(db, request) {
    if (request.queryParams.city !== undefined) {
      let filteredRentals = rentals.filter(function (i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return {  filteredRentals };
    } else {
      return {  rentals };
    }
  });

  this.get('/rentals/:id', function (db, request) {
    return { data: rentals.find((rental) => request.params.id === rental.id) };
  });
  this.put('/rentals/:id', function (db, request) {
    console.log(request.body);
  });
  this.get('/comments/:id', function (db, request) {
    return { comment:{'id':'comment1',title:' comment 1' }};
  });

  let blogposts = [
    {
      type: 'blog-posts',
      id: 'post1',
      attributes: {
        title: "post1 title",
        comments:[]
      }
       
    },
    {
      type: 'blog-posts',
      id: 'post2',
      attributes: {
        title: "post2 title"

      }
    }
  ];
  this.get('/blog-posts', function(db,request) {
    return {data:blogposts}
  })
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');
  */
}
