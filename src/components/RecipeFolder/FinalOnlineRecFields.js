import React from 'react'

const FinalOnlineRecFields = ({ingredientsNew, setIngredientsNew}) => {

  

    let handleChangeIngredient = (e, index) => {
        const {name, value} = e.target
        const list = [...ingredientsNew]
        list[index][name] = value
        setIngredientsNew(list); 
    }

    let handleRemove = (index) => {
        const list = [...ingredientsNew];
        list.splice(index, 1);
        console.log(list)
        setIngredientsNew(list)
    }

    console.log(ingredientsNew)

    let displayIngredients = ingredientsNew? 
    ingredientsNew.map((ing, index) => {
        return(
            <div key={index}  className="ingredients">
                <div className='first-division'>
                    <input name='ingredient' type='text' defaultValue={ing.ingredient} onChange={(e)=> handleChangeIngredient(e, index)}/> 
                </div>
                <div className='second-division'>
                    {ingredientsNew.length > 1 && 
                        <button type='button' className='remove-btn' value={ing.ingredient} onClick={handleRemove}>
                            <span>Remove</span>
                        </button>
                    }
                </div>
            </div>
        )
    }): null



  return (
    <div>
        {displayIngredients}
    </div>
  )
}

export default FinalOnlineRecFields