import { useNavigate, Link} from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';


export const FormStep3 = () => {
    const history = useNavigate();
    const { state, dispatch } = useForm();
    
    useEffect(() => { 
        if (state.name === '') {
            history('/')
        }else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);
    
    const handlerNextStep = () => {
        if (state.email !== '' && state.github !== '') {
            console.log(state)
        } else {
            alert('Preencha os dados adequadamente.')
        }
    };
    
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }
    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }
    
    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha os campos abaixo com seus contatos.</p>

                <hr />
                
                <label>
                    Qual o seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label>
                    Qual o seu GitHub?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>
                <Link to="/step2" className="back-button">Voltar</Link>

                <button onClick={handlerNextStep}>Finalizar Cadastro</button>

            </C.Container>
        </Theme>
    );
}