import {adidasArr} from './Adidas';
import {useParams} from 'react-router-dom';

export const Model = () => {
    const params = useParams()
    // const adidasModel = adidasArr.filter(a => a.id === Number(params.id))
    const adidasModel = adidasArr.find(a => a.id === Number(params.id))
    console.log(
        adidasModel
    )

    return (
        <div>
            {/*<div><img src={adidasModel[0].picture}/></div>*/}
            {/*<div>{adidasModel[0].model}</div>*/}
            {/*<div>{adidasModel[0].collection}</div>*/}
            {/*<div>{adidasModel[0].price}</div>*/}

            {
                adidasModel && <>
                    <div><img src={adidasModel.picture}/>
                    </div>
                    <div>{adidasModel.model}</div>
                    <div>{adidasModel.collection}</div>
                    <div>{adidasModel.price}</div>
                </>


            }


        </div>
    )
        ;
};