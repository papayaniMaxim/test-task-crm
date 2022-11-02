import { useEffect, useState } from 'react';
import FindIcon from '../../UI/icons/FindIcon';
import MainPageIcon from '../../UI/icons/MainPageIcon';
import MapIcon from '../../UI/icons/MapIcon';
import ScheduleIcon from '../../UI/icons/ScheduleIcon';
import SettingsFinenceIcon from '../../UI/icons/SettingsFinenceIcon';
import SettingsIcon from '../../UI/icons/SettingsIcon';
import SettingsUserIcon from '../../UI/icons/SettingsUserIcon';
import TablesIcon from '../../UI/icons/TablesIcon';
import WidgetIcon from '../../UI/icons/WidgetIcon';
import MenuItem from '../MenuItem/MenuItem';
import classes from './Menu.module.css'

function Menu() {
    
    const initialMenuState = window.innerWidth <= 768 ? false : true
    const [isOpen, setIsOpen] = useState<boolean>(initialMenuState)    
    
    useEffect(() => {
        
        window.addEventListener('resize', event => {   
            setIsOpen(() => window.innerWidth <= 768 ? false : true)  
        })

        return () => {
            window.removeEventListener('resize', event => {
                setIsOpen(() => window.innerWidth <= 768 ? false : true)
            })
        }
        
    }, [])
    
    return (
        <menu className={isOpen ? classes.menu : classes.closed}>
            <h2 className={classes.title}>Меню</h2>
            <nav className={classes.nav}>
                <ul className={classes.nav_list}>
                    <MenuItem path='/' icon={<MainPageIcon/>} text='Главная' />
                    <MenuItem path='/address' icon={<FindIcon/>} text='Поиск адресов'/>
                    <MenuItem path='/#' icon={<TablesIcon/>} text='Таблицы'/>
                    <MenuItem path='/#' icon={<ScheduleIcon/>} text='Календарь' />
                    <MenuItem path='/#' icon={<MapIcon/>} text='Карты' />
                    <MenuItem path='/#' icon={<WidgetIcon/>} text='Виджеты' />
                    <MenuItem path='/#' icon={<SettingsIcon/>} text='Настройки'
                        submenuItems={[
                            <MenuItem path='/#' icon={<SettingsUserIcon />} text='Настройки профиля' />,
                            <MenuItem path='/#' icon={<SettingsFinenceIcon />} text='Управление финансами' />
                        ]} />
                    <MenuItem path='/#' icon={<MainPageIcon/>} text='Выход' />
                </ul>
            </nav>
        </menu>);
}

export default Menu;