import { plantList } from '../datas/plantList'

function ShoppingList() {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul>
                {plantList.map((plant) => (
                    <li key={plant.id}>{plant.name} {plant.isBestSale && <span>🔥</span> } {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}</li> //&& veut dire que l'élément ne sera généré que si la condition est respectée
                    // on peut simplement mettre ':' pour un true or false
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList