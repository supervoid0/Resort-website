import surfing from '../../assets/img/entertainment/surfing.jpg'
import background from '../../assets/img/entertainment/entertainment-bg.jpg'


export const BannerInfo = {
    title:"Entertainment",
    subtitle: "Don't wait for the perfect moment. Take the moment and make it perfect",
    bannerImage: background,
    ButtonData: []
}

export const ContentInfo = [
    {
        image:{
            isImagePositionLeft: true,
            source: surfing,
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
            source: surfing,
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
            source: surfing,
        },
        description: {
            title: "The biggest OFFER on New Year",
            details: "On this occasion our resort providing the biggest offer for anyone such as discount on accommodation and entry fee etc. This offer will be closed very soon, so booked your seat as soon as possible.",
            buttonData: ""
        },
    }
]