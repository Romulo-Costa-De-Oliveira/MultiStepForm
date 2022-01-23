import * as C from './styles';
import { Link } from 'react-router-dom';
import { ReactComponent as ProfileIcom } from '../../images/profile.svg';
import { ReactComponent as BookIcom } from '../../images/book.svg';
import { ReactComponent as MailIcom } from '../../images/mail.svg';


type Props = {
    title: string,
    description: string,
    icon: string;
    path: string;
    active: boolean;
}

export const SidebarItem = ({title, description,icon,path, active}: Props) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === 'profile' && <ProfileIcom fill="white" width={24} height={24}/>}
                    {icon === 'book' && <BookIcom fill="white" width={24} height={24}/>}
                    {icon === 'mail' && <MailIcom fill="white" width={24} height={24}/>}
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    );
}