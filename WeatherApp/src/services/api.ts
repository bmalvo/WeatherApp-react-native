export const fetchCityData = async () => {

    const response = await fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/current.json?key=${process.env.EXPO_PUBLIC_API_KEY}&q=Zory&lang=pl`
    )
        return response.json()
}