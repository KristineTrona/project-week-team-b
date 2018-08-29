
const dummyData = [
    {
      id: 1,
      title: "Rattle",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61gDN7qMJvL._SY450_.jpg",
      description: "A nice rattle for your baby to play with.",
      price: 1,
      condition: "used",
      category: "toy",
      age: "0-2",
      gender: "uni",
      userId: 1
    },
    {
      id: 2,
      title: "Crib",
      imageUrl: "https://secure.img2-fg.wfcdn.com/im/88064597/resize-h800-w800%5Ecompr-r85/8263/8263290/Baby+Crib+with+Mattress.jpg",
      description: "The best sleep your baby will ever have.",
      price: 60,
      condition: "used",
      category: "furniture",
      age: "0-2",
      gender: "uni",
      userId: 1
      
    },
    {
      id: 3,
      title: "Baby Hat",
      imageUrl: "https://cdn.childrensalon.com/media/catalog/product/cache/0/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/t/e/teddy-me-blue-striped-cotton-premature-baby-hat-89608-215903297a71ed7fed72370b46df70807855d7f5.jpg",
      description: "My baby grew out of it. But it is as good as new - will look nice on your baby! ",
      price: 0,
      condition: "as-good-as-new",
      category: "clothes",
      age: "0-2",
      gender: "boy",
      userId: 2
    },
    {
      id: 4,
      title: "Race Car",
      imageUrl: "https://www.yogee.com.au/media/catalog/product/cache/1/image/450x/9df78eab33525d08d6e5fb8d27136e95/G/B/GBABP601A.jpg",
      description: "Super cool race car! My boy never played with it, so it is brand-new",
      price: 7,
      condition: "brand-new",
      category: "toy",
      age: "2-4",
      gender: "boy",
      userId: 2
    },

    {
      id: 5,
      title: "Tiger Onesie",
      imageUrl: "http://www.onesieonesie.com/wp-content/uploads/2018/04/Tonwhar-Unisex-baby-Animal-Onesie-Costume-Cartoon-Babysuits-70Height22-26ages-0-6-months-Tiger-0-1.jpg",
      description: "Very cute tiger onesie for your baby. Mine grew out of it - perfect condition!",
      price: 5,
      condition: "used",
      category: "clothes",
      age: "0-2",
      gender: "uni",
      userId: 2
    },
    {
      id: 6,
      title: "Princess dress",
      imageUrl: "https://i.pinimg.com/236x/0f/24/b2/0f24b28e5e2d00ae078a47d860118e1f--baby-girl-newborn-infant-girls.jpg",
      description: "For a little girl around the age 2, will make her look like a princess!",
      price: 10,
      condition: "as-good-as-new",
      category: "clothes",
      age: "0-2",
      gender: "girl",
      userId: 3
    },

    {
      id: 7,
      title: "Girl buggy",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nZ3%2B7NeGL._SY355_.jpg",
      description: "Very comfortable and spacious buggy.",
      price: 30,
      condition: "acceptable",
      category: "furniture",
      age: "0-2",
      gender: "girl",
      userId: 3
    },
    {
      id: 8,
      title: "I love daddy onesie",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/612xPka-jjL._SL1000_.jpg",
      description: "Very cute onesie for a little girl or boy who really loves his/her daddy",
      price: 3,
      condition: "as-good-as-new",
      category: "clothes",
      age: "0-2",
      gender: "boy",
      userId: 2
    },

    {
      id: 9,
      title: "Lego",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81YSCviAlYL._SY355_.jpg",
      description: "A box of legos for your kid to build his dream cities to life!",
      price: 5,
      condition: "acceptable",
      category: "toy",
      age: "6+",
      gender: "boy",
      userId: 3
    },
    {
      id: 10,
      title: "Baby changing station",
      imageUrl: "https://cdn.homedit.com/wp-content/uploads/2014/12/side-table-changing-nursery.jpg",
      description: "A baby changing station in very good condition.",
      price: 20,
      condition: "used",
      category: "furniture",
      age: "0-2",
      gender: "uni",
      userId: 3
    },

    {
      id: 11,
      title: "Dress for a little girl",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/517NuuCyTaL._US500_.jpg",
      description: "Beautiful dress for a little girl!",
      price: 3,
      condition: "as-good-as-new",
      category: "clothes",
      age: "2-4",
      gender: "girl",
      userId: 3
    },
    {
      id: 12,
      title: "Wooden stacker",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51QgHhmcLxL._SY355_.jpg",
      description: "My kid does not use it anymore, because it grew up. Maybe useful for some other new mom?",
      price: 0,
      condition: "acceptable",
      category: "toy",
      age: "0-2",
      gender: "uni",
      userId: 2
    },

    {
      id: 13,
      title: "Elsa doll",
      imageUrl: "https://i.dailymail.co.uk/i/pix/2014/07/28/article-2708598-2011CCCE00000578-307_634x1114.jpg",
      description: "If your daughter likes frozen then she will love this doll! My daughter played with it for only a week, so it is as good as new!",
      price: 8,
      condition: "brand-new",
      category: "toy",
      age: "4-6",
      gender: "girl",
      userId: 3
    },
    {
      id: 14,
      title: "Beautiful white crib",
      imageUrl: "https://www.petiteamelie.nl/media/catalog/product/cache/7/thumbnail/1024x/85e4522595efc69f496374d01ef2bf13/b/a/babybed-120x60_1.jpg",
      description: "A beautiful white crib with a drawer underneath it.",
      price: 35,
      condition: "acceptable",
      category: "furniture",
      age: "0-2",
      gender: "uni",
      userId: 4
    },

    {
      id: 15,
      title: "Outfit for a little boy",
      imageUrl: "http://www.dolchefashion.com/wp-content/uploads/2017/08/baby-boy-clothing-2pcs-newborn-toddler-infant-kids-baby-boy-clothes-t-shirt-tops-pants-oxnrxrq-.jpg",
      description: "Very cute outfit for a little boy that loves his mama!",
      price: 7,
      condition: "used",
      category: "clothes",
      age: "2-4",
      gender: "boy",
      userId: 2
    },
    {
      id: 16,
      title: "Police car",
      imageUrl: "http://smartbaby.tv/wp-content/uploads/2016/05/Little-Boy-Unpacking-Police-Transport-Toys-for-Kids-1024x576.jpg",
      description: "My kid never plays with it anymore. Maybe some other mom wants it for free.",
      price: 0,
      condition: "new",
      category: "toy",
      age: "4-6",
      gender: "boy",
      userId: 4
    },

    {
      id: 17,
      title: "Feeding chair",
      imageUrl: "https://img.clasf.co.za/2016/07/08/Baby-Feeding-High-Chair-Used-20160708150540.jpg",
      description: "Green high feeding chair with Vinnie the Poo - used, but can go another round.",
      price: 5,
      condition: "acceptable",
      category: "furniture",
      age: "2-4",
      gender: "uni",
      userId: 1
    },
    {
      id: 18,
      title: "Blue onesie for a boy",
      imageUrl: "https://images.prod.meredith.com/product/dd31eb270d17e45332e5126a98f94115/1504673032667/l/cute-onesie-for-boys-trendy-baby-clothes-baby-onesie-ideas-baby-boy-clothes-babyshower-gift-gift-for-mom-newborn-baby-onsies",
      description: "A onesie for a little boy.",
      price: 0,
      condition: "as-good-as-new",
      category: "clothes",
      age: "0-2",
      gender: "boy",
      userId: 5
    },

    {
      id: 19,
      title: "Coat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQyBpMU9flcq9ko3LctUg2TFw7HGYUaTx-mCriqZrMGLeRJd3",
      description: "Pink coat for a little girl. Very cute and warm",   
      price: 10,
      condition: "used",
      category: "clothes",
      age: "2-4",
      gender: "girl",
      userId: 5
    },
    {
      id: 20,
      title: "A set of piuzzles",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzD-iq4AkRVRX-P3VUI4SQS9aq5dgxfrOWfk5U3cWV8Sm_dwW",
      description: "A few puzzles suitable for the little one. Good for kid's development!",
      price: 5,
      condition: "used",
      category: "toy",
      age: "2-4",
      gender: "uni",
      userId: 5
    },
    
  ]

  export default  dummyData