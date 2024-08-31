import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss'


const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {

    const renderItem = () => {
        return items.map((item, index) => {
            return (
                <MenuItem key={index} data={item} />
            )
        })
    }

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper
                        className={cx('menu-popper')}
                    >
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;