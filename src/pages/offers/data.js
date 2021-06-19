import offer_one from '../../assets/img/offerAndPackages/honeymoon.jpg'
import offer_two from '../../assets/img/offerAndPackages/val-day.jpg'
import offer_three from '../../assets/img/offerAndPackages/newyear.jpg'
import background from '../../assets/img/offerAndPackages/offer-background.jpg'


export const BannerInfo = {
    title:"Offers and Packages",
    subtitle: "Enjoy our packages with your friends and family",
    bannerImage: background,
    ButtonData: []
}

export const ContentInfo = [
    {
        id: 1,
        image:{
            isImagePositionLeft: true,
            source: offer_one,
        },
        content: {
            title: "Honeymoon Offer",
            description: "We are providing an amazing discount for newly married couple that includes some free ticket for entertainment as well as more than 30% off.",
            bannerImage: offer_one,
            routerPath: 'honeymoon',
            details: "If you stay the resort at least 3days and 3 nights then you will enjoy free “Somudro Bilash” Speed Boat Service for your ride 2 ticket will be provide without any cost and 30% OFF on house rent",
            galleryImages: []
        },
    },
    {
        id: 2,
        image:{
            isImagePositionLeft: false,
            source: offer_two,
        },
        content: {
            title: "Special offer on Valentine’s Day",
            description: "Don’t miss our big offer on the special day, this offer is available for everyone. Hurry up and confirm your reservation. In this time we are offering up to 45% DISCOUNT!",
            bannerImage: offer_two,
            routerPath: 'ValentineOffer',
            details: "Don’t miss our big offer on the special day, this offer is available for everyone. Hurry up and confirm your reservation. In this time we are offering up to 45% DISCOUNT!" +
                    "“Hirozu Water Skiing” which is completely FREE. This offer is providing only by us through all over the world and 10% OFF into entry fee. Those who will visit there with more than 5 people, we will provide them extra 15% off, for the entry fee",
            galleryImages: []
        },
    },
    {
        id: 3,
        image:{
            isImagePositionLeft: true,
            source: offer_three,
        },
        content: {
            title: "The biggest OFFER on New Year",
            description: "On this occasion our resort providing the biggest offer for anyone such as discount on accommodation and entry fee etc. This offer will be closed very soon, so booked your seat as soon as possible.",
            bannerImage: offer_three,
            routerPath: 'newyear',
            details:"On the 1st three days of new year, 15% OFF on the house rent. You can enjoy this offer as long as you want to stay. If you stay more than 5 nights on our resort, you can get extra 20% DISCOUNT for the house rent",
            galleryImages: []
        },
    }
]