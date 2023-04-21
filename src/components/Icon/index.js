import TimeIcon from './Icons/TimeIcon';
import FavoriteIcon from './Icons/FavoriteIcon';
import FavoriteFullIcon from './Icons/FavoriteFullIcon';


const getIcon = (key = null) => {
    const mappedComponents = [
        ['time-icon', TimeIcon],
        ['favorite-icon', FavoriteIcon],
        ['favorite-full-icon', FavoriteFullIcon],
    ];

    const iconsMap = new Map(mappedComponents);

    if(iconsMap.has(key)) {
        return iconsMap.get(key);
    }

    return null;
}


export default getIcon;
