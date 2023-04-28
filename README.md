# WSServer

<!-- This is common reserved data, saved in sqlite3 -->
<!-- const commonData = [
  {
    id: 'id1',
    name: 'HBF',
    priceColor: '#8884d8',
    prevPriceColor: '#04d227',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ab iure similique animi accusamus cumque molestiae labore repudiandae, aut iusto voluptate totam eum hic! Delectus itaque, repudiandae molestias ducimus consequuntur, porro dolorem ullam similique voluptates nihil cum cupiditate illo. Qui autem sequi harum et nobis repellendus reiciendis ipsam quod aspernatur, quas itaque voluptas mollitia ad earum voluptates. Omnis consequuntur delectus, minus illum amet voluptatum facere quos iusto dolores necessitatibus in itaque deserunt voluptates temporibus odio. Mollitia ea, provident dicta molestiae, alias ducimus officia voluptatum in praesentium incidunt dolor fugit natus soluta quidem velit magnam optio quod beatae reprehenderit? Saepe, doloremque.',
    metricDataKey: 'month',
    priceTitle: 'Price',
    prevPriceTitle: 'Previos Price',
    isReserved: 'true',
    createdAt: '2023-04-26T08:36:24.146Z'
  },
  {
    id: 'id2',
    name: 'HBsafasfF',
    priceColor: '#0184d0',
    prevPriceColor: '#9004d0',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ab iure similique animi accusamus cumque molestiae labore repudiandae, aut iusto voluptate totam eum hic! Delectus itaque, repudiandae molestias ducimus consequuntur, porro dolorem ullam similique voluptates nihil cum cupiditate illo. Qui autem sequi harum et nobis repellendus reiciendis ipsam quod aspernatur, quas itaque voluptas mollitia ad earum voluptates. Omnis consequuntur delectus, minus illum amet voluptatum facere quos iusto dolores necessitatibus in itaque deserunt voluptates temporibus odio. Mollitia ea, provident dicta molestiae, alias ducimus officia voluptatum in praesentium incidunt dolor fugit natus soluta quidem velit magnam optio quod beatae reprehenderit? Saepe, doloremque.',
    metricDataKey: 'month',
    priceTitle: 'Price',
    prevPriceTitle: 'Previos Price',
    isReserved: 'true',
    createdAt: '2023-04-26T08:37:24.112Z'
  },
  {
    id: 'id3',
    name: 'ABBBA',
    priceColor: '#d8c022',
    prevPriceColor: '#ed42f0',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ab iure similique animi accusamus cumque molestiae labore repudiandae, aut iusto voluptate totam eum hic! Delectus itaque, repudiandae molestias ducimus consequuntur, porro dolorem ullam similique voluptates nihil cum cupiditate illo. Qui autem sequi harum et nobis repellendus reiciendis ipsam quod aspernatur, quas itaque voluptas mollitia ad earum voluptates. Omnis consequuntur delectus, minus illum amet voluptatum facere quos iusto dolores necessitatibus in itaque deserunt voluptates temporibus odio. Mollitia ea, provident dicta molestiae, alias ducimus officia voluptatum in praesentium incidunt dolor fugit natus soluta quidem velit magnam optio quod beatae reprehenderit? Saepe, doloremque.',
    metricDataKey: 'month',
    priceTitle: 'Price',
    prevPriceTitle: 'Previos Price',
    isReserved: 'true',
    createdAt: '2023-04-26T08:33:24.112Z'
  },
  {
    id: 'id4',
    name: 'BAF',
    priceColor: '#7c2727',
    prevPriceColor: '#4644d0',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ab iure similique animi accusamus cumque molestiae labore repudiandae, aut iusto voluptate totam eum hic! Delectus itaque, repudiandae molestias ducimus consequuntur, porro dolorem ullam similique voluptates nihil cum cupiditate illo. Qui autem sequi harum et nobis repellendus reiciendis ipsam quod aspernatur, quas itaque voluptas mollitia ad earum voluptates. Omnis consequuntur delectus, minus illum amet voluptatum facere quos iusto dolores necessitatibus in itaque deserunt voluptates temporibus odio. Mollitia ea, provident dicta molestiae, alias ducimus officia voluptatum in praesentium incidunt dolor fugit natus soluta quidem velit magnam optio quod beatae reprehenderit? Saepe, doloremque.',
    metricDataKey: 'month',
    priceTitle: 'Price',
    prevPriceTitle: 'Previos Price',
    isReserved: 'true',
    createdAt: '2023-04-26T08:37:24.112Z'
  }
] -->
<!-- create table commondata (id text, name text, priceColor text, prevPriceColor text, description text, metricDataKey text, priceTitle text, prevPriceTitle text, isReserved text, createdAt text); -->

<!-- insert into commondata(id, name, priceColor, prevPriceColor, description, metricDataKey, priceTitle, prevPriceTitle, isReserved, createdAt) values('id1','HBF','#8884d8','#04d227','Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ab iure similique animi accusamus cumque molestiae labore repudiandae, aut iusto voluptate totam eum hic! Delectus itaque, repudiandae molestias ducimus consequuntur, porro dolorem ullam similique voluptates nihil cum cupiditate illo. Qui autem sequi harum et nobis repellendus reiciendis ipsam quod aspernatur, quas itaque voluptas mollitia ad earum voluptates. Omnis consequuntur delectus, minus illum amet voluptatum facere quos iusto dolores necessitatibus in itaque deserunt voluptates temporibus odio. Mollitia ea, provident dicta molestiae, alias ducimus officia voluptatum in praesentium incidunt dolor fugit natus soluta quidem velit magnam optio quod beatae reprehenderit? Saepe, doloremque.','month','Price','Previos Price','true','2023-04-26T08:36:24.146Z'); -->

<!-- insert into commondata(id, name, priceColor, prevPriceColor, description, metricDataKey, priceTitle, prevPriceTitle, isReserved, createdAt) values('id2','HBsafasfF','#0184d0','#9004d0','Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ab iure similique animi accusamus cumque molestiae labore repudiandae, aut iusto voluptate totam eum hic! Delectus itaque, repudiandae molestias ducimus consequuntur, porro dolorem ullam similique voluptates nihil cum cupiditate illo. Qui autem sequi harum et nobis repellendus reiciendis ipsam quod aspernatur, quas itaque voluptas mollitia ad earum voluptates. Omnis consequuntur delectus, minus illum amet voluptatum facere quos iusto dolores necessitatibus in itaque deserunt voluptates temporibus odio. Mollitia ea, provident dicta molestiae, alias ducimus officia voluptatum in praesentium incidunt dolor fugit natus soluta quidem velit magnam optio quod beatae reprehenderit? Saepe, doloremque.','month','Price','Previos Price','true','2023-04-26T08:37:24.112Z'); -->

<!-- insert into commondata(id, name, priceColor, prevPriceColor, description, metricDataKey, priceTitle, prevPriceTitle, isReserved, createdAt) values('id3','ABBBA','#d8c022','#ed42f0','Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ab iure similique animi accusamus cumque molestiae labore repudiandae, aut iusto voluptate totam eum hic! Delectus itaque, repudiandae molestias ducimus consequuntur, porro dolorem ullam similique voluptates nihil cum cupiditate illo. Qui autem sequi harum et nobis repellendus reiciendis ipsam quod aspernatur, quas itaque voluptas mollitia ad earum voluptates. Omnis consequuntur delectus, minus illum amet voluptatum facere quos iusto dolores necessitatibus in itaque deserunt voluptates temporibus odio. Mollitia ea, provident dicta molestiae, alias ducimus officia voluptatum in praesentium incidunt dolor fugit natus soluta quidem velit magnam optio quod beatae reprehenderit? Saepe, doloremque.','month','Price','Previos Price','true','2023-04-26T08:33:24.112Z'); -->

<!-- insert into commondata(id, name, priceColor, prevPriceColor, description, metricDataKey, priceTitle, prevPriceTitle, isReserved, createdAt) values('id4','BAF','#7c2727','#4644d0','Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, ab iure similique animi accusamus cumque molestiae labore repudiandae, aut iusto voluptate totam eum hic! Delectus itaque, repudiandae molestias ducimus consequuntur, porro dolorem ullam similique voluptates nihil cum cupiditate illo. Qui autem sequi harum et nobis repellendus reiciendis ipsam quod aspernatur, quas itaque voluptas mollitia ad earum voluptates. Omnis consequuntur delectus, minus illum amet voluptatum facere quos iusto dolores necessitatibus in itaque deserunt voluptates temporibus odio. Mollitia ea, provident dicta molestiae, alias ducimus officia voluptatum in praesentium incidunt dolor fugit natus soluta quidem velit magnam optio quod beatae reprehenderit? Saepe, doloremque.','month','Price','Previos Price','true','2023-04-26T08:37:24.112Z'); -->


<!-- This is metric reserved data template, saved in the sqlite3 -->
<!-- const metricReservedData = [
  {
    id: 'id1',
    Price1: 8680,
    PreviosPrice1: 5222,
    month1: 'Apr',
    Price2: 5356,
    PreviosPrice2: 4804,
    month2: 'May',
    Price3: 3562,
    PreviosPrice3: 3022,
    month3: 'Jun'
  },
  {
    id: 'id2',
    Price1: 984,
    PreviosPrice1: 6286,
    month1: 'Apr',
    Price2: 8092,
    PreviosPrice2: 6558,
    month2: 'May',
    Price3: 2137,
    PreviosPrice3: 3983,
    month3: 'Jun',
  },
  {
    id: 'id3',
    Price1: 4165,
    PreviosPrice1: 405,
    month1: 'Apr',
    Price2: 4624,
    PreviosPrice2: 812,
    month2: 'May',
    Price3: 2258,
    PreviosPrice3: 3162,
    month3: 'Jun',
  },
  {
    id: 'id4',
    Price1: 2148,
    PreviosPrice1: 1648,
    month1: 'Apr',
    Price2: 7706,
    PreviosPrice2: 9957,
    month2: 'May',
    Price3: 1082,
    PreviosPrice3: 3069,
    month3: 'Jun',
  }
] -->
<!-- create table metricdata (id text, Price1 integer, PreviosPrice1 integer, month1 text, Price2 integer, PreviosPrice2 integer, month2 text, Price3 integer, PreviosPrice3 integer, month3 text); -->

<!-- insert into metricdata(id, Price1, PreviosPrice1, month1, Price2, PreviosPrice2, month2, Price3, PreviosPrice3, month3) values('id1',8680,5222,'Apr',2706,9057,'May',1182,3169,'Jun'); -->

<!-- insert into metricdata(id, Price1, PreviosPrice1, month1, Price2, PreviosPrice2, month2, Price3, PreviosPrice3, month3) values('id2',1680,2222,'Apr',2006,3057,'May',2182,2109,'Jun'); -->

<!-- insert into metricdata(id, Price1, PreviosPrice1, month1, Price2, PreviosPrice2, month2, Price3, PreviosPrice3, month3) values('id3',8600,222,'Apr',706,1057,'May',282,1169,'Jun'); -->

<!-- insert into metricdata(id, Price1, PreviosPrice1, month1, Price2, PreviosPrice2, month2, Price3, PreviosPrice3, month3) values('id4',2148,1648,'Apr',7706,9957,'May',1082,3069,'Jun'); -->