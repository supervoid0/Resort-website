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
        image:{
            isImagePositionLeft: true,
            source: offer_one,
        },
        description: {
            title: "Honeymoon Offer",
            details: "We are providing an amazing discount for newly married couple that includes some free ticket for entertainment as well as more than 30% off.",
            buttonData: ""
        },
    },
    {
        image:{
            isImagePositionLeft: false,
            source: offer_two,
        },
        description: {
            title: "Special offer on Valentine’s Day",
            details: "Don’t miss our big offer on the special day, this offer is available for everyone. Hurry up and confirm your reservation. In this time we are offering up to 45% DISCOUNT!",
            buttonData: ""
        },
    },
    {
        image:{
            isImagePositionLeft: true,
            source: offer_three,
        },
        description: {
            title: "The biggest OFFER on New Year",
            details: "On this occasion our resort providing the biggest offer for anyone such as discount on accommodation and entry fee etc. This offer will be closed very soon, so booked your seat as soon as possible.",
            buttonData: ""
        },
    }
]