const productData = [
  {
    id: 1,
    name: 'Wildest Dreams Mask',
    summary: 'Your skin will feel new, almost like in your wildest dreams!',
    description:
      'Taylor Swift inspired face mask that will leave you feeling like a champ!',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$24.99',
    inventory: 1
  },
  {
    id: 2,
    name: "Lina's Lemon Lip Balm",
    summary: 'Lip care is part of Skincare!',
    description: 'Lip Balm that also has sunscreen and tastes like lemon!',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$12.99',
    inventory: 2
  },
  {
    id: 3,
    name: 'JJ Cream',
    summary: 'Moisturize all day, every day!',
    description:
      'Moisturizing your skin is key! Especially if you spend a lot of time outdoors!',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$7.58',
    inventory: 3
  },
  {
    id: 4,
    name: 'Ivy Mask',
    summary: 'Face mask with scents of lemon and lime.',
    description:
      'This mask has been made with the finest blends of lemon and lime. Perfect start to your day.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$8.58',
    inventory: 4
  },
  {
    id: 5,
    name: 'React Retinol',
    summary: 'Eye cream for that hustle!',
    description:
      'Spending a lot of time in front of a computer screen? Your eyes will thank you with this rejuvinating React Retinol eye cream.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$28.99',
    inventory: 5
  },
  {
    id: 6,
    name: 'Node Pore Cleanser',
    summary: 'Makeup remover that also moisturizes!',
    description:
      'Pores are part of every day life, just like Node is part of JS. This face cleanser will keep your skin under control.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$7.99',
    inventory: 6
  },
  {
    id: 7,
    name: 'Botanical Betsy',
    summary: 'Face mist that works with or without makeup!',
    description:
      'If setting sprays could talk, this one would say, you are one in a million.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$11.50',
    inventory: 7
  },
  {
    id: 8,
    name: "Sydney's Sculpting Cream",
    summary: 'Redux the stress, regenerate the cells.',
    description:
      'Your face is already perfectly sculpted, try this cream to stay at your best.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$7.06',
    inventory: 8
  },
  {
    id: 9,
    name: "Mary's Mint Mask",
    summary: 'Mint mask leaving your skin minty fresh!',
    description:
      'Minty fresh! This mask will wake you up or get your ready for bed with its lovely scent.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$6.72',
    inventory: 9
  },
  {
    id: 10,
    name: 'Express Eye Cream',
    summary: 'Great for puffy eyes in the morning.',
    description:
      'This express eye cream will quickly depuff your eyes to make sure you feel your best.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$6.72',
    inventory: 10
  },
  {
    id: 11,
    name: 'Grace Hopper Aloe Gel',
    summary: 'Aloe gel to moisturize after too much fun in the sun!',
    description: '90% Aloe Vera, rated the best 6 years in a row!',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$7.45',
    inventory: 11
  },
  {
    id: 12,
    name: 'Fullstack Collection',
    summary:
      'Full stack of our leading products in our moisturizing collection!',
    description:
      'Pick 4 of your favorite products and create your own fullstack skincare approach.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$25.31',
    inventory: 12
  },
  {
    id: 13,
    name: 'Health',
    summary:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    description:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$9.94',
    inventory: 13
  },
  {
    id: 14,
    name: 'Home',
    summary: 'Maecenas pulvinar lobortis est.',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$5.01',
    inventory: 14
  },
  {
    id: 15,
    name: 'Automotive',
    summary:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$0.43',
    inventory: 15
  },
  {
    id: 16,
    name: 'Industrial',
    summary:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$6.07',
    inventory: 16
  },
  {
    id: 17,
    name: 'Sports',
    summary: 'Aliquam erat volutpat.',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$5.24',
    inventory: 17
  },
  {
    id: 18,
    name: 'Garden',
    summary:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$5.35',
    inventory: 18
  },
  {
    id: 19,
    name: 'Computers',
    summary: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    description: 'Pellentesque ultrices mattis odio.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$5.68',
    inventory: 19
  },
  {
    id: 20,
    name: 'Electronics',
    summary:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$5.75',
    inventory: 20
  },
  {
    id: 21,
    name: 'Books',
    summary:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    description:
      'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$1.60',
    inventory: 21
  },
  {
    id: 22,
    name: 'Movies',
    summary:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$0.45',
    inventory: 22
  },
  {
    id: 23,
    name: 'Tools',
    summary: 'Sed sagittis.',
    description:
      'In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$2.34',
    inventory: 23
  },
  {
    id: 24,
    name: 'Music',
    summary:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    description:
      'Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$9.42',
    inventory: 24
  },
  {
    id: 25,
    name: 'Toys',
    summary: 'In eleifend quam a odio.',
    description:
      'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$7.23',
    inventory: 25
  },
  {
    id: 26,
    name: 'Books',
    summary:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$4.47',
    inventory: 26
  },
  {
    id: 27,
    name: 'Garden',
    summary: 'Vivamus vestibulum sagittis sapien.',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$4.68',
    inventory: 27
  },
  {
    id: 28,
    name: 'Shoes',
    summary:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$5.74',
    inventory: 28
  },
  {
    id: 29,
    name: 'Clothing',
    summary: 'Sed vel enim sit amet nunc viverra dapibus.',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$8.49',
    inventory: 29
  },
  {
    id: 30,
    name: 'Jewelery',
    summary: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$8.87',
    inventory: 30
  },
  {
    id: 31,
    name: 'Toys',
    summary: 'Donec ut mauris eget massa tempor convallis.',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$4.33',
    inventory: 31
  },
  {
    id: 32,
    name: 'Kids',
    summary: 'Vestibulum sed magna at nunc commodo placerat.',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$4.96',
    inventory: 32
  },
  {
    id: 33,
    name: 'Industrial',
    summary: 'Donec quis orci eget orci vehicula condimentum.',
    description: 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$8.48',
    inventory: 33
  },
  {
    id: 34,
    name: 'Garden',
    summary: 'Aenean lectus. Pellentesque eget nunc.',
    description:
      'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$2.39',
    inventory: 34
  },
  {
    id: 35,
    name: 'Garden',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$9.82',
    inventory: 35
  },
  {
    id: 36,
    name: 'Games',
    summary:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    description:
      'Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$9.24',
    inventory: 36
  },
  {
    id: 37,
    name: 'Tools',
    summary:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$9.44',
    inventory: 37
  },
  {
    id: 38,
    name: 'Garden',
    summary:
      'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    description:
      'Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$2.73',
    inventory: 38
  },
  {
    id: 39,
    name: 'Home',
    summary: 'Praesent blandit. Nam nulla.',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$8.34',
    inventory: 39
  },
  {
    id: 40,
    name: 'Jewelery',
    summary: 'In hac habitasse platea dictumst.',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$1.97',
    inventory: 40
  },
  {
    id: 41,
    name: 'Outdoors',
    summary:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. ',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$4.66',
    inventory: 41
  },
  {
    id: 42,
    name: 'Grocery',
    summary:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$3.49',
    inventory: 42
  },
  {
    id: 43,
    name: 'Computers',
    summary:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula.',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$4.87',
    inventory: 43
  },
  {
    id: 44,
    name: 'Tools',
    summary:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$6.24',
    inventory: 44
  },
  {
    id: 45,
    name: 'Beauty',
    summary: 'Sed sagittis.',
    description: 'Nulla mollis molestie lorem. Quisque ut erat.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$0.18',
    inventory: 45
  },
  {
    id: 46,
    name: 'Tools',
    summary:
      'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
    description: 'Donec vitae nisi.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$0.94',
    inventory: 46
  },
  {
    id: 47,
    name: 'Books',
    summary:
      'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$1.11',
    inventory: 47
  },
  {
    id: 48,
    name: 'Automotive',
    summary:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$6.45',
    inventory: 48
  },
  {
    id: 49,
    name: 'Kids',
    summary:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    description:
      'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$4.47',
    inventory: 49
  },
  {
    id: 50,
    name: 'Toys',
    summary: 'Suspendisse potenti.',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. ',
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flibrary.essentialwholesale.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSkincare-Packaging-Basics-Choosing-The-Right-Material-For-Your-Product-BLOG.jpg&f=1&nofb=1',
    price: '$7.97',
    inventory: 50
  }
]

module.exports = productData
