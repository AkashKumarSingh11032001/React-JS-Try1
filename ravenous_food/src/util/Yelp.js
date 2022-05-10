const apiKey = '8GxO64wsZv0yGlOmUycZCptI7du53lyoEdVUYXPjGKRBJ508oDUYmGEnQkA0L8uw7CiuwdsuprzaFmOPLxOoVvnpXQngscgZsqD-LIael0o1i9pAVhD7Qq3izjt6YnYx';
const Yelp = {};

const yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                },
            }).then((response) => { return response.json() }).then((jsonResponse) => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map((business) => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zipCode,
                            category: business.category[0].title,
                            rating: business.rating,
                            reviewCount: business.reviewCount,
                        }

                    });
                }

            }
        )
    }
};
export default yelp;
