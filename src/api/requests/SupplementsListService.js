
import axios from "axios";


const GetSupplementsList = async () => {
    const response = await axios.get('https://api.vitamin.trade/SupplementsList', {
        headers: {
            'accept': 'application/json',
            'Authorization': 'ers45bsGH^)()Hhj'
        }
    })
    console.log(response.data.SupplementsList)
    return response.data.SupplementsList
}



const SupplementsListService = {
    GetSupplementsList
}

export default SupplementsListService