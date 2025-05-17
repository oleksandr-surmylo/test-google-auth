import {
    getRedirectGoogleResult,
    signWithGooglePopup,
    signWithGoogleRedirect,
    auth
} from "./firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

const TestComponent = () => {

    useEffect( () => {
        // Подписка на изменения состояния аутентификации
        const unsubscribe = onAuthStateChanged( auth, ( user ) => {
            if ( user ) {
                console.log( "Пользователь аутентифицирован:", user );
            } else {
                console.log( "Пользователь вышел или не аутентифицирован" );
            }
        } );

        // Очистка подписки при размонтировании компонента
        return () => unsubscribe();
    }, [] );

    useEffect( () => {
        async function getGoogleResult() {
            console.log( "Проверяем результаты редиректа..." );
            try {
                const response = await getRedirectGoogleResult();
                console.log( "Сырой ответ от getRedirectResult:", response );

                if ( response ) {
                    const user = response.user;
                    console.log( 'Успешная авторизация через redirect:', user );
                } else {
                    console.log( 'Нет данных авторизации через redirect' );
                }
            } catch ( error ) {
                console.error( 'Ошибка при получении результата редиректа:', error.code, error.message );
            }
        }

        getGoogleResult();
    }, [] );


    const logGoogleRedirectUser = async () => {
        await signWithGoogleRedirect();
    }

    const logGooglePopupUser = async () => {
        const { user } = await signWithGooglePopup();
        console.log( { user } )
    }


    return (
        <div className='flex flex-col items-center justify-center text-black text gap-5 mt-5'>
            <button onClick={ logGoogleRedirectUser } className='cursor-pointer border'>sign With Redirect</button>
            <button onClick={ logGooglePopupUser } className='cursor-pointer border'>sign With Popup</button>
        </div>
    );
};

export default TestComponent;