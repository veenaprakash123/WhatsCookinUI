import React from 'react'

const FinalOnlineRecFields = ({ingredientsNew}) => {



    let handleChangeIngredient=(e)=>{
        console.log('you are changing something')
    }

    let handleRemove=(e)=>{
        console.log('remove')
    }

    let displayIngredients = ingredientsNew? 
    ingredientsNew.map((ing, index) => {
        return(
            <div key={index}  className="ingredients">
                <div className='first-division'>
                    <input name='ingredient' type='text' defaultValue={ing.name} onChange={(e)=> handleChangeIngredient(e, index)}/> 
                </div>
                <div className='second-division'>
                    {ingredientsNew.length > 1 && 
                        <button type='button' className='remove-btn' value={ing.name} onClick={handleRemove}>
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