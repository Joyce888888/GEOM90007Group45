var config = {
    style: 'mapbox://styles/uuusami/ckgvj6e6u02mz1cqxl4atlshg',
    accessToken: 'pk.eyJ1IjoidXV1c2FtaSIsImEiOiJja2V4Zm80ZWkwZ3JuMnpqcnVvbTg1NGprIn0.sWyLW_6-Wam4CCxgz4MOGw',
    showMarkers: false,
    alignment: 'left',
    theme: 'light',
    title: 'Iconic Restaurants around Melbourne',
    subtitle: 'an amazing dining experience',
    byline: '',
    footer: 'Source: Data from Zomato',
    chapters: [
        {
            id: 'Metropolitan Melbourne',
            title: 'Restaurant in Metropolitan Melbourne',
            image: 'https://ls.imgix.net/factsheets/thumbnails/melbourne123.jpg?w=616&h=308&auto=compress,format&fit=crop',
            description: 'Known for its cool city laneways, graffiti-filled streetscapes, and rooftop bars, Melbourne is a haven for food-obsessed travelers. There’s an elaborate sense of hospitality and food culture that stems from a history of immigrants setting down roots in the city, including people of Vietnamese, Chinese, Indian, Japanese, Spanish, Italian, Greek, French, Middle Eastern, Mexican, and North African descent. Contemporary restaurants embrace innovation and creativity, and Melbourne boasts some of the top restaurants in the country. Wine bars run rampant and restaurateurs are moving away from the white-tablecloth fine dining routine, so diners can get some of Melbourne’s best food experiences without spending a fortune.',
            location: {
                center: [144.905, -37.809],
                zoom: 12.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'melbourne-boundary',
                    opacity: 1
                },
                {
                    layer: 'restaurant-regional',
                    opacity: 0
                },
                {
                    layer: 'southbank',
                    opaticy: 0
                },
                {
                    layer: 'carlton',
                    opaticy: 0
                },
                {
                    layer: 'chinatown',
                    opaticy: 0
                },
                {
                    layer: 'north-melbourne',
                    opaticy: 0
                },
                {
                    layer: 'melbourne-cbd',
                    opaticy: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'melbourne-boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Southbank',
            title: 'Southbank',
            image: 'https://www.frozenforeternity.com/images/data/media/17/_30T0031_web.jpg',
            description: 'Southbank revels in its bustling nature and high-class dining. If you love dressing up for dinner and making it a classy affair to remember, then this is the dinner spot for you. Having played host to Heston Blumenthal’s infamous temporary The Fat Duck, the area has established itself as a place to go for unforgettable dining experiences. Many restaurants are dotted around the infamous Crown Hotel. The hotel also has sweeping views of the cityscape, which is beautifully reflected off the Yarra River.',
            location: {
                center: [144.95827, -37.82411],
                zoom: 16.8,
                pitch: 19.50,
                bearing: -28.80
            },
            onChapterEnter: [
                {
                    layer: 'southbank',
                    opacity: 1
                },
                {
                    layer: 'restaurant-regional',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'restaurant-regional',
                    opacity: 0
                },
                {
                    layer: 'southbank',
                    opacity: 0
                }
            ]
        },
        {
            id: 'CBD',
            title: 'Melbourne CBD',
            image: 'https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/69136414_10156627315968775_3885517446513164288_o.jpg?_nc_cat=103&ccb=2&_nc_sid=e3f864&_nc_ohc=CtR0SXMJDGMAX9PONCM&_nc_ht=scontent-syd2-1.xx&oh=15456ba8ec9e8e59b768a3363b107a14&oe=5FC5896D',
            description: 'Melbourne’s CBD has really made a name for itself with the notorious Flinders Lane attracting thousands of eager diners, day after day. While the queues for the food may be painfully long, the food is worth the wait… plus there are plenty of bars nearby to pass the time. ',
            location: {
                center: [144.96370, -37.81650],
                zoom: 16.64,
                pitch: 12.50,
                bearing: -19.20
            },
            onChapterEnter: [
                {
                    layer: 'melbourne-cbd',
                    opacity: 1
                },
                {
                    layer: 'restaurant-regional',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'restaurant-regional',
                    opacity: 0
                },
                {
                    layer: 'melbourne-cbd',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Chinatown',
            title: 'Chinatown',
            image: 'https://whatsonblog.melbourne.vic.gov.au/wp-content/uploads/2020/06/IMG_1426.jpg',
            description: 'As one of the oldest Chinese settlements in the Western world, Chinatown is brimming with delicious Chinese food and history. Almost all the restaurants here boast traditional and authentic fare, from supple dumplings to spicy noodle dishes you can slurp up to your heart’s content, crispy prawn crackers and steaming fresh seafood. You’ll find crowds at Flower Drum Restaurant – a hotspot for good food and a good chat. ShanDong MaMa is a noodle paradise, where groups come to share bowls and bowls of slippery deliciousness. Chinatown’s throbbing heart is found along Little Bourke Street, a charmingly chaotic centre with Eastern delicacies in a Western urban setting.',
            location: {
                center: [144.96764, -37.81134],
                zoom: 17.04,
                pitch: 41.00,
                bearing: 21.18
            },
            onChapterEnter: [
                {
                    layer: 'chinatown',
                    opacity: 1
                },
                {
                    layer: 'restaurant-regional',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'restaurant-regional',
                    opacity: 0
                },
                {
                    layer: 'chinatown',
                    opacity: 0
                }
            ]
        },
        {
            id: 'North Melbourne',
            title: 'North Melbourne',
            image: 'https://cdn.broadsheet.com.au/cache/aa/92/aa923ed2314588f7ea579e44c4c65dda.jpg',
            description: 'Residents love their brunch in North Melbourne. Their addiction is fuelled by an abundance of cafés , all walking distance from the quaint victorian style housing that gives the suburb it’s old world charm. Dissimilar to other Melbourne hotspots where cafes are concentrated around a single street, cafés are more spread out in the North. What appears to be a quiet suburban street, usually is home to 1-2 ‘hidden’ cafés. In this suburb, word of mouth is more important than prime location. ',
            location: {
                center: [144.94700, -37.80486],
                zoom: 16.03,
                pitch: 32.00,
                bearing: -18.02
            },
            onChapterEnter: [
                {
                    layer: 'north-melbourne',
                    opacity: 1
                },
                {
                    layer: 'restaurant-regional',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'restaurant-regional',
                    opacity: 0
                },
                {
                    layer: 'north-melbourne',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Carlton',
            title: 'Carlton',
            image: 'https://www.melbourne.vic.gov.au/SiteCollectionImages/carlton-lygon-st-400.jpg',
            description: 'Carlton may be a small suburb, but it packs a punch with its rich Italian migrant history that brought along with it the food that many know and love. In this northern Melbourne neighbourhood, expect to find the very best of gelati, pizza, pasta, and coffee – all of which are in abundance in the neighbourhood’s epicentre, Lygon Street. Popular places for a mean bowl of Bolognese are D.O.C. Espresso, 400 Gradi, and Brunetti – all along Lygon Street. Toto’s Pizza House, Australia’s first pizzeria established in 1961, deserves an honourable mention. Others worth visiting are Olivomare, Tiamo and Il Cantuccio. For some festival fun, look out for the Lygon Street Festa, one of Australia’s largest outdoor annual street festivals.',
            location: {
                center: [144.96547, -37.79936],
                zoom: 16.24,
                pitch: 47.00,
                bearing: -32.80
            },
            onChapterEnter: [
                {
                    layer: 'carlton',
                    opacity: 1
                },
                {
                    layer: 'restaurant-regional',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'restaurant-regional',
                    opacity: 0
                },
                {
                    layer: 'carlton',
                    opacity: 0
                }
            ]
        }
        
    ]
};
