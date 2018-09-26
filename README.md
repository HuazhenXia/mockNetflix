requirements:
Please create a git repository and push the code there and send across the link when complete.

The task is to create a mock Netflix like page with editable rows of titles using any framework you want (preferably React).

You are given the following JSON object which will serve as mock back­end data: 

```
{
  "mylist": [
    {
      "title": "Futurama",

      "id": 1,

      "img": "http://cdn1.nflximg.net/webp/7621/3787621.webp"
    },

    {
      "title": "The Interview",

      "id": 2,

      "img": "http://cdn1.nflximg.net/webp/1381/11971381.webp"
    },

    {
      "title": "Gilmore Girls",

      "id": 3,

      "img": "http://cdn1.nflximg.net/webp/7451/11317451.webp"
    }
  ],

  "recommendations": [
    {
      "title": "Family Guy",

      "id": 4,

      "img": "http://cdn5.nflximg.net/webp/5815/2515815.webp"
    },

    {
      "title": "The Croods",

      "id": 5,

      "img": "http://cdn3.nflximg.net/webp/2353/3862353.webp"
    },

    {
      "title": "Friends",

      "id": 6,

      "img": "http://cdn0.nflximg.net/webp/3200/9163200.webp"
    }
  ]
}

```

The top row will be the ‘My List’ row and will display the titles included in ‘mylist’ array. The second row will be the recommendation row which will display the titles included in‘recommendations’ array. Hovering over an image in the ‘My List’ row should create a “Remove” button displayed below the image. Clicking on the button should remove the title from the “My List” row.Hovering over an image in the recommendations row should create an “Add” button displayed below the image. Clicking on the button should add the title to the “My List” row.The list of titles in the “My List” row should be displayed at the bottom of the page.

