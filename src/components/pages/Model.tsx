import {adidasArr, AdidasItem} from './Adidas';
import {useParams} from 'react-router-dom';
import {pumaArr, PumaItem} from './Puma';

type CurrentModelArrayType = {
    [key: string]: (AdidasItem[] | PumaItem[])
}
const currentModelArray: CurrentModelArrayType = {
    adidas: adidasArr,
    puma: pumaArr,
}
export const Model = () => {

    const {model, id} = useParams();
    const currentModel = model
        ?currentModelArray[model].find(a => a.id === Number(id))
        : null

    const modelStyles = {
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        gap: '20px',
        padding: '50px 20px'
    }

    const modelImageStyles = {
        maxWidth: '300px',
    }

    return (
        <div>
            {
                <div style={modelStyles}>
                    {currentModel
                        ? <>
                            <div>{currentModel.model}</div>
                            <div>{currentModel.collection}</div>
                            <div>{currentModel.price}</div>
                            <div>
                                <img src={currentModel.picture} style={modelImageStyles}/>
                            </div>
                        </>
                        : <h2>Модель отсутствует</h2>
                    }
                </div>

            }
        </div>
    )
        ;
};