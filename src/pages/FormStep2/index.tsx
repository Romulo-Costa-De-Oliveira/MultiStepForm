import { useNavigate, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
import { SelectOptions } from '../../components/SelectOptions';


export const FormStep2 = () => {
    const history = useNavigate();
    const { state, dispatch } = useForm();
    
    useEffect(() => { 
        if (state.name === '') {
            history('/')
        }else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);
    
    const handlerNextStep = () => {
        if (state.name !== '') {
            history('/step3')
        } else {
            alert("Preencha os dados adequadamente!")
        }
        
    };
    
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }
    
    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>{state.name}, o que melhor define você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, proficionalmente.</p>

                <hr />

                <SelectOptions
                    title="Sou iniciante"
                    description="Comecei a programar a menos de 2 anos."
                    icon="😌"
                    selected={state.level === 0}
                    onClick={()=>setLevel(0)}
                />
                <SelectOptions
                    title="Sou programador"
                    description="Já programo há 2 anos ou mais."
                    icon="😎"
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}
                />
                <Link to="/" className="back-button">Voltar</Link>
                <button onClick={handlerNextStep}>Próximo</button>

            </C.Container>
        </Theme>
    );
}