import axios from 'axios'
const getMenu = async () => {
    const menuList = await axios.get('http://localhost:5000/menu')
    return menuList.data
}

export { getMenu }